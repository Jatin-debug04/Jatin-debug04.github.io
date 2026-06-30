# Query Optimization Notes

## The query
A date-range revenue-by-region report — the kind of "give me Q2 numbers by
region" request that comes up constantly in operational reporting:

```sql
SELECT c.region, SUM(o.quantity * p.unit_price) AS revenue
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
JOIN products p ON p.product_id = o.product_id
WHERE o.order_date BETWEEN '2025-04-01' AND '2025-06-30'
GROUP BY c.region
ORDER BY revenue DESC;
```

Run against the `orders` table (28,000 rows).

## Before adding an index

`EXPLAIN QUERY PLAN` output:
```
SCAN o
SEARCH c USING INTEGER PRIMARY KEY (rowid=?)
SEARCH p USING INTEGER PRIMARY KEY (rowid=?)
USE TEMP B-TREE FOR GROUP BY
USE TEMP B-TREE FOR ORDER BY
```

`SCAN o` means SQLite reads every single row in `orders` and checks the date
filter row-by-row — there's no faster way to find "rows where order_date is
in this range" without an index on that column.

**Measured: 3.552 ms average** (averaged over 30 runs, to smooth out noise)

## After adding an index

```sql
CREATE INDEX idx_orders_order_date  ON orders(order_date);
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_product_id  ON orders(product_id);
```

`EXPLAIN QUERY PLAN` output:
```
SEARCH o USING INDEX idx_orders_order_date (order_date>? AND order_date<?)
SEARCH c USING INTEGER PRIMARY KEY (rowid=?)
SEARCH p USING INTEGER PRIMARY KEY (rowid=?)
USE TEMP B-TREE FOR GROUP BY
USE TEMP B-TREE FOR ORDER BY
```

`SCAN o` became `SEARCH o USING INDEX` — SQLite now jumps straight to the
matching date range instead of reading the whole table.

**Measured: 3.090 ms average — a 13% improvement**

## Honest framing for an interview

At 28,000 rows, the absolute time difference is small (3.5ms → 3.1ms) because
the whole table fits comfortably in memory either way — SQLite is fast at
this scale regardless. **The evidence that actually matters is the query
plan change** (`SCAN` → `SEARCH USING INDEX`), not the millisecond gap. That
distinction is the real point to make if asked: the *type* of operation
changed from "read everything" to "jump directly to what you need," and that
gap widens dramatically as the table grows into the millions of rows —
which is the regime real production reporting tables actually live in.

If asked "have you seen this matter on a bigger table," the honest answer is:
*"I tested it at 28K rows myself and saw the plan change from a scan to an
indexed search — at production scale (millions of rows) that same plan
change is the difference between a query that takes seconds and one that
times out."*

## How to reproduce this yourself
```bash
python build_database.py     # creates sales.db
python benchmark_index.py    # runs the before/after timing + EXPLAIN QUERY PLAN
```
