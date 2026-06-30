# SQL Data Analysis — Sales Database

## What this is
A normalized SQLite database (`customers`, `products`, `orders` — 28,000 orders
across 600 customers and 20 products) with a set of business queries, plus a
genuine before/after query-optimization benchmark.

## Files
| File | What it is |
|---|---|
| `sales.db` | The SQLite database itself — already built, indexed, and ready to query |
| `queries.sql` | **Open this to "demo" the project** — 6 commented business queries you can run one at a time |
| `build_database.py` | The script that generated `sales.db` from scratch (for transparency / re-running) |
| `benchmark_index.py` | Measures real query timing before/after adding an index |
| `performance_notes.md` | The actual measured results from `benchmark_index.py`, written up as a talking point |

## How to open it
**Easiest — free GUI, no command line needed:**
1. Download [DB Browser for SQLite](https://sqlitebrowser.org) (free)
2. Open `sales.db`
3. Go to the "Execute SQL" tab, paste in queries from `queries.sql` one at a
   time, and run them — you'll see results in a table instantly

**If you prefer the command line:**
```bash
sqlite3 sales.db
.read queries.sql
```

## What's in `queries.sql`
1. Total revenue by region
2. Top 10 customers by revenue
3. Monthly revenue trend
4. New vs. Returning customer behavior
5. Top-selling product per category (uses a `RANK()` window function)
6. The exact query benchmarked in `performance_notes.md`

## Talking points for an interview
- **Schema design.** This isn't one flat spreadsheet-style table — it's three
  properly normalized tables (`customers`, `products`, `orders`) joined with
  foreign keys. Revenue isn't stored anywhere; it's always computed as
  `quantity × unit_price` at query time, which is the correct way to avoid
  stale/inconsistent stored totals.
- **You ran a real optimization, not a textbook one.** Read
  `performance_notes.md` before the interview — you measured an actual
  `SCAN` → `SEARCH USING INDEX` change with `EXPLAIN QUERY PLAN`, with real
  timing numbers from your own machine. That's a much stronger answer to
  "tell me about a time you optimized a query" than reciting a definition
  of indexing.
- **The window function (query 5) is worth mentioning explicitly** if asked
  about more advanced SQL — `RANK() OVER (PARTITION BY ...)` is a level up
  from basic `GROUP BY`, and shows you can do per-group ranking, not just
  per-group aggregation.
- **Be upfront if asked**: this is a synthetic database built to practice
  and demonstrate SQL skills, not a real company's data.
