# Python Data Analysis — Sales Data Cleaning & Reporting

## What this is
A messy, raw sales export (`raw_sales_data.csv` — 1,624 rows, simulating a typical
CRM/ERP dump) gets cleaned and analyzed with Python (pandas + matplotlib), producing
a clean dataset and three charts.

## Files
| File | What it is |
|---|---|
| `raw_sales_data.csv` | The messy input data (inconsistent casing, mixed date formats, missing values, duplicates, sign errors) |
| `clean_and_analyze.ipynb` | **Open this one to "demo" the project** — a Jupyter notebook with explanations, code, and the charts already rendered inside it |
| `clean_and_analyze.py` | Same logic as a plain script — run with `python clean_and_analyze.py` if you don't want to use Jupyter |
| `clean_sales_data.csv` | Output: the cleaned dataset (this also feeds the Excel dashboard and SQL project) |
| `charts_*.png` | The three charts, exported as standalone images |

## How to open it
**Easiest — view it without installing anything:**
Upload `clean_and_analyze.ipynb` to [Google Colab](https://colab.research.google.com)
(File → Upload notebook) — it'll show all the code, explanations, and charts
immediately, even already-run.

**To actually run it yourself:**
```bash
pip install pandas matplotlib jupyter
jupyter notebook clean_and_analyze.ipynb
```
Or, for the plain script:
```bash
pip install pandas matplotlib
python clean_and_analyze.py
```

## What the data-quality issues were (and how each was handled)
| Issue | Found in raw data | How it was fixed |
|---|---|---|
| Inconsistent casing/whitespace | `Region` had values like `"north"`, `"NORTH"`, `" East"` | `.str.strip().str.title()` |
| Mixed date formats | `OrderDate` mixed `YYYY-MM-DD`, `DD/MM/YYYY`, `MM-DD-YYYY`, `DD-Mon-YYYY` | `pd.to_datetime(..., format='mixed')` |
| Missing values | ~3% of rows missing `Quantity` or `UnitPrice` | Dropped — no reliable way to estimate a missing price without bias |
| Negative quantities | ~3% of rows had negative `Quantity` (data-entry sign errors) | Took absolute value — these were judged to be real orders with a sign mistake, not invalid orders |
| Duplicate rows | ~1.5% exact duplicate rows | Dropped with `drop_duplicates()` |

## Talking points for an interview
- **Lead with the decisions, not the code.** Anyone can call `.dropna()` — the
  interesting part is *why* you fixed negative quantities instead of dropping them,
  but dropped missing prices instead of imputing them. That's the actual analytical
  judgment a QMR-style data-validation role is testing for.
- **This mirrors a "close" cycle.** Walk through it as: raw export → data-quality
  checks → cleaning → validated dataset → reporting. That's structurally the same
  flow as quarterly data validation work.
- **Know your numbers.** Open the notebook and be ready to say, off the top of your
  head, which region had the highest revenue and roughly what the trend looked like
  month to month — re-run it and actually look before an interview.
- **Be upfront if asked**: this is a synthetic practice dataset built to demonstrate
  the cleaning/analysis workflow, not real company data. That's a perfectly normal
  thing to say — interviewers ask this regularly and respect the honesty.
