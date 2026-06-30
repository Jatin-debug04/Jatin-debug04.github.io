# Sales Performance Dashboard (Excel)

## What this is
A two-sheet Excel workbook: a clean **Raw Data** table (1,499 orders) and a
**Dashboard** sheet with KPI cards, region/month/product summaries, and three
native Excel charts — all formula-driven, so it updates automatically if the
raw data changes.

## Files
| File | What it is |
|---|---|
| `Sales_Dashboard.xlsx` | **Open this one to "demo" the project** |
| `clean_sales_data.csv` | The source data (same cleaned dataset from the Python project) |
| `build_dashboard.py` | The script that generated the workbook (for transparency) |

## What's on the Dashboard sheet
- **KPI cards**: Total Revenue, Total Orders, Avg Order Value, Top Region,
  Date Range — all live formulas (`SUM`, `COUNTA`, `AVERAGE`, `INDEX/MATCH`)
  referencing the Raw Data table, not typed-in numbers
- **Revenue by Region** — table (`SUMIF`) + bar chart
- **Monthly Revenue Trend** — table (`SUMIF` on a `Month` helper column) + line chart
- **Top 8 Products by Revenue** — a full per-product revenue list, then the
  top 8 pulled out dynamically using `LARGE` + `INDEX/MATCH` (a ranking
  technique, not a manual sort) + bar chart

## How to open it
Just double-click `Sales_Dashboard.xlsx` — works in Excel, Google Sheets, or
LibreOffice Calc. The Raw Data sheet is a proper Excel **Table** (not just a
range), so filtering/sorting on it works out of the box, and the Dashboard
formulas automatically expand if you add new rows.

## Talking points for an interview
- **Everything recalculates.** This isn't a snapshot — every KPI and chart
  reads off the Raw Data table via formulas. Add a row of new sales data and
  the whole dashboard updates itself. That's the actual point of a "dashboard"
  versus a one-off report.
- **The Top 8 Products ranking is worth explaining.** Rather than manually
  sorting, it uses `LARGE($I$10:$I$28, rank)` to pull the nth-largest revenue
  value, then `INDEX/MATCH` to look up which product that belongs to. That's
  a legitimately useful Excel pattern for any "top N" reporting.
- **Why Excel and not Power BI**: Power BI Desktop needs to be installed and
  run locally — for a quick, shareable, formula-transparent dashboard, Excel
  is often the more practical choice, especially for sharing with people who
  don't have Power BI. (If you do get access to Power BI later, this exact
  dataset — `clean_sales_data.csv` — drops straight in as a data source and
  you could rebuild the same dashboard there for the Power BI experience too.)
- **Be upfront if asked**: this uses the same synthetic practice dataset as
  the Python and SQL projects, not real company data — and that's exactly why
  the three projects connect: raw data → Python cleaning → Excel dashboard →
  SQL analysis at larger scale, one consistent story.

## If you want a *native* Excel PivotTable too
This workbook uses formula-based summaries instead of a native PivotTable
(more transparent, easier to explain formula-by-formula). If you want to add
a real PivotTable on top for practice: select any cell in the Raw Data table
→ **Insert → PivotTable** → drag `Region` or `Month` to Rows and `Revenue` to
Values. Takes about 30 seconds since the data's already clean and structured.
