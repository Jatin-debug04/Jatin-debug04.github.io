-- ============================================================
-- SQL Data Analysis — Sales Database
-- Schema: customers (600 rows) | products (20 rows) | orders (28,000 rows)
-- Open this file alongside sales.db in DB Browser for SQLite (free, no
-- install hassle): https://sqlitebrowser.org
-- ============================================================


-- 1. TOTAL REVENUE BY REGION
-- Revenue isn't stored directly — it's quantity x unit_price, computed via
-- a join across all three tables. This is the most basic "is the business
-- healthy" query, and a natural one to walk through first.
SELECT
    c.region,
    COUNT(DISTINCT o.order_id)                AS total_orders,
    SUM(o.quantity * p.unit_price)            AS total_revenue,
    ROUND(AVG(o.quantity * p.unit_price), 2)  AS avg_order_value
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
JOIN products  p ON p.product_id  = o.product_id
GROUP BY c.region
ORDER BY total_revenue DESC;


-- 2. TOP 10 CUSTOMERS BY REVENUE
-- Identifies highest-value customers — useful for account prioritization
-- or churn-risk conversations.
SELECT
    c.customer_id,
    c.customer_name,
    c.region,
    c.segment,
    SUM(o.quantity * p.unit_price) AS total_revenue,
    COUNT(o.order_id)              AS total_orders
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
JOIN products  p ON p.product_id  = o.product_id
GROUP BY c.customer_id
ORDER BY total_revenue DESC
LIMIT 10;


-- 3. MONTHLY REVENUE TREND
-- strftime() pulls year-month out of the date string for a clean trend line.
SELECT
    strftime('%Y-%m', o.order_date) AS month,
    SUM(o.quantity * p.unit_price)  AS revenue
FROM orders o
JOIN products p ON p.product_id = o.product_id
GROUP BY month
ORDER BY month;


-- 4. NEW vs RETURNING CUSTOMER BEHAVIOR
-- Compares average order value and order frequency by customer segment —
-- the kind of question a QMR/analytics role would ask about reported data.
SELECT
    c.segment,
    COUNT(o.order_id)                          AS total_orders,
    ROUND(AVG(o.quantity * p.unit_price), 2)   AS avg_order_value,
    SUM(o.quantity * p.unit_price)             AS total_revenue
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
JOIN products  p ON p.product_id  = o.product_id
GROUP BY c.segment;


-- 5. TOP-SELLING PRODUCTS BY CATEGORY
-- Uses a window function (RANK) to get the #1 product within each
-- category, rather than just an overall top-N — a slightly more advanced
-- pattern worth highlighting if asked about SQL depth.
SELECT category, product_name, total_revenue
FROM (
    SELECT
        p.category,
        p.product_name,
        SUM(o.quantity * p.unit_price) AS total_revenue,
        RANK() OVER (
            PARTITION BY p.category
            ORDER BY SUM(o.quantity * p.unit_price) DESC
        ) AS rnk
    FROM orders o
    JOIN products p ON p.product_id = o.product_id
    GROUP BY p.category, p.product_name
)
WHERE rnk = 1;


-- ============================================================
-- 6. QUERY OPTIMIZATION — BEFORE / AFTER INDEX
-- See performance_notes.md for the measured timing and EXPLAIN QUERY PLAN
-- output. Short version: filtering 28,000 orders by date range originally
-- forced a full table scan ('SCAN o'). Adding an index on order_date
-- changed the plan to a direct index SEARCH instead of a SCAN.
-- ============================================================

-- Indexes added (also created by benchmark_index.py):
-- CREATE INDEX idx_orders_order_date  ON orders(order_date);
-- CREATE INDEX idx_orders_customer_id ON orders(customer_id);
-- CREATE INDEX idx_orders_product_id  ON orders(product_id);

-- The query that was benchmarked:
SELECT
    c.region,
    SUM(o.quantity * p.unit_price) AS revenue
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
JOIN products  p ON p.product_id  = o.product_id
WHERE o.order_date BETWEEN '2025-04-01' AND '2025-06-30'
GROUP BY c.region
ORDER BY revenue DESC;
