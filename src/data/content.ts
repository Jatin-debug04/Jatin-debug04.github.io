// Certifications -- used for the scrolling marquee strip
export const certifications = [
  'Data Analytics Job Simulation -- Deloitte',
  'Digital Marketing -- IIM Ahmedabad',
  'SQL for Beginners -- Udemy',
  'Digital Marketing -- Samyak Institute',
  'Foundation to AI, Data Science & BI -- Samatrix.io',
  'Tableau A-Z -- Udemy',
  'Microsoft Power BI Desktop -- Udemy',
];

export const certificationsRow2 = [
  'Data Analysis Using Python -- Samatrix.io',
  'R-Programming for Data Science -- Samatrix.io',
  'Statistics & Computational Data Analysis -- Samatrix.io',
  'Data Analysis & Visualization -- Samatrix.io',
  'What Is Generative AI? -- LinkedIn Learning',
  'Ethics in the Age of Generative AI -- LinkedIn Learning',
  'Career Skills in Data Analytics -- LinkedIn Learning',
];

export const marqueeRow1 = certifications;
export const marqueeRow2 = certificationsRow2;

export interface Experience {
  number: string;
  name: string;
  category: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    number: '01',
    name: 'BPO Analyst -- TCS',
    category: 'Full-time',
    period: 'Sept 2025 -- Present',
    description:
      'Analyzing and processing business data at Tata Consultancy Services to improve operational efficiency, performing data quality checks across client-facing systems, and collaborating cross-functionally to resolve bottlenecks and support SLA compliance.',
  },
  {
    number: '02',
    name: 'Data Analytics Job Simulation -- Deloitte',
    category: 'Virtual Internship',
    period: 'April 2026 -- May 2026',
    description:
      'Completed a virtual job simulation via Forage focused on real-world data analytics and forensic technology tasks, applying analysis techniques to derive insights and understand how data integrity is managed in a professional consulting environment.',
  },
  {
    number: '03',
    name: 'BBA -- JECRC University',
    category: 'Education',
    period: '2022 -- 2025',
    description:
      'Built a foundation in business administration with coursework spanning analytics, operations, and strategy at JECRC University, Jaipur, graduating with a CGPA of 7.37/10.0 while pursuing certifications in data analytics and digital marketing.',
  },
];

export interface DataProject {
  number: string;
  title: string;
  tech: string;
  description: string;
  bullets: string[];
  demoHref: string;
  demoLabel: string;
  downloadHref: string;
  downloadLabel: string;
  image?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export const dataProjects: DataProject[] = [
  {
    number: '01',
    title: 'Sales Performance Dashboard',
    tech: 'Excel',
    description:
      'A two-sheet Excel workbook with a clean 1,499-row data table and a fully formula-driven dashboard -- KPI cards, region/month/product breakdowns, and native charts that update automatically if the source data changes.',
    bullets: [
      'Built interactive dashboards using Excel formulas (SUMIF, LARGE, INDEX/MATCH) and native charts to track KPIs and sales trends.',
      'Automated recurring reporting calculations, eliminating manual recalculation.',
      'Improved decision-making by translating raw sales data into clear visual analytics.',
    ],
    demoHref: '/projects/sales-performance-dashboard/Sales_Dashboard.xlsx',
    demoLabel: 'Open Dashboard (.xlsx)',
    downloadHref: '/projects/sales-performance-dashboard/Sales_Dashboard.xlsx',
    downloadLabel: 'Download File',
  },
  {
    number: '02',
    title: 'SQL Data Analysis',
    tech: 'SQL (SQLite)',
    description:
      'A normalized relational database -- 28,000 orders across 600 customers and 20 products -- with business queries and a genuine before/after query-optimization benchmark measured with EXPLAIN QUERY PLAN.',
    bullets: [
      'Queried large datasets to identify customer behavior patterns and revenue trends across regions and product categories.',
      'Optimized SQL queries by adding indexes, changing the query plan from a full table SCAN to an indexed SEARCH.',
      'Used window functions (RANK) to find top-selling products within each category.',
    ],
    demoHref: '/projects/sql-data-analysis/queries.sql',
    demoLabel: 'View Queries (.sql)',
    downloadHref: '/projects/sql-data-analysis/sales.db',
    downloadLabel: 'Download Database',
  },
  {
    number: '03',
    title: 'Python Data Analysis',
    tech: 'Python',
    description:
      'A deliberately messy raw sales export (inconsistent casing, mixed date formats, missing values, duplicates) cleaned and analyzed end-to-end in a Jupyter notebook, with three exploratory charts.',
    bullets: [
      'Cleaned and analyzed datasets using Python (pandas) to prepare them for reporting and review.',
      'Handled real data-quality issues: mixed date formats, missing values, sign errors, and duplicate rows.',
      'Generated visual reports (matplotlib) to support data-driven business insights.',
    ],
    demoHref: '/projects/python-data-analysis/clean_and_analyze.html',
    demoLabel: 'View Notebook (rendered)',
    downloadHref: '/projects/python-data-analysis/clean_and_analyze.ipynb',
    downloadLabel: 'Download .ipynb',
  },
  {
    number: '04',
    title: 'Customer Churn & Retention Analytics',
    tech: 'Power BI',
    description:
      'A full churn-analytics build on a 4,500-customer telecom-style dataset -- churn risk scoring, What-If revenue-saved simulation, and drill-through customer profiles, uncovering a 25.4% churn rate driven mainly by month-to-month contracts.',
    bullets: [
      'Built a transparent, rule-based Risk Score and Risk Tier system to flag high-risk active customers for proactive retention outreach.',
      'Implemented Power BI What-If Parameters to model revenue-saved scenarios (10-50% churn reduction) for stakeholder budget conversations.',
      'Designed a star-schema model with DAX time-intelligence measures for MRR trend and month-over-month growth.',
    ],
    image: '/projects/customer-churn-retention-analytics/preview.jpg',
    demoHref:
      '/projects/customer-churn-retention-analytics/Churn_Retention_PowerBI_Build_Guide.docx',
    demoLabel: 'View Build Guide (.docx)',
    downloadHref:
      '/projects/customer-churn-retention-analytics/Customer_Churn_Retention_Dataset.xlsx',
    downloadLabel: 'Download Dataset',
  },
  {
    number: '05',
    title: 'Sales Performance & Revenue Forecasting',
    tech: 'Power BI',
    description:
      'A 6-page executive sales dashboard across 22,000+ orders and 3.5 years of data, uncovering that the highest-revenue region also carried the lowest margin because of excessive discounting -- with Field Parameters, What-If target simulation, and revenue forecasting.',
    bullets: [
      'Used Power BI Field Parameters to let stakeholders dynamically switch the KPI driving every executive-page chart.',
      'Built a What-If target-simulation parameter so leadership could stress-test regional target changes live.',
      'Combined Power BI\u2019s built-in Analytics forecast with a transparent DAX trend measure for a defensible revenue forecast.',
    ],
    image: '/projects/sales-performance-forecasting/preview.jpg',
    demoHref:
      '/projects/sales-performance-forecasting/Sales_Forecasting_PowerBI_Build_Guide.docx',
    demoLabel: 'View Build Guide (.docx)',
    downloadHref:
      '/projects/sales-performance-forecasting/Sales_Performance_Forecasting_Dataset.xlsx',
    downloadLabel: 'Download Dataset',
  },
  {
    number: '06',
    title: 'Customer Segmentation & Marketing Analytics',
    tech: 'Tableau',
    description:
      'RFM-based customer segmentation across 3,200 customers and 20,000+ transactions, paired with 144 marketing campaigns spanning 6 channels -- surfacing that Email far outperforms Influencer spend on ROI, and that Loyal customers buy often but spend less per order than Champions.',
    bullets: [
      'Built LOD expressions and quintile-based RFM scoring in Tableau to classify customers into 7 actionable segments.',
      'Identified a lower average order value in the Loyal segment despite its highest purchase frequency, informing a bundling recommendation.',
      'Layered campaign spend, conversions, and ROMI across 6 channels, surfacing a clear budget-reallocation opportunity.',
    ],
    image: '/projects/customer-segmentation-marketing-analytics/preview.jpg',
    demoHref:
      '/projects/customer-segmentation-marketing-analytics/Segmentation_Marketing_Tableau_Build_Guide.docx',
    demoLabel: 'View Build Guide (.docx)',
    downloadHref:
      '/projects/customer-segmentation-marketing-analytics/Customer_Segmentation_Marketing_Dataset.xlsx',
    downloadLabel: 'Download Dataset',
  },
  {
    number: '07',
    title: 'Factory Downtime & Equality Scoring Analysis',
    tech: 'Tableau + Excel',
    description:
      'A virtual job simulation (via Forage) analyzing factory telemetry data across sites and device types to identify the biggest sources of unplanned downtime, paired with an equality scoring task benchmarking outcomes across factory locations.',
    bullets: [
      'Built a Tableau dashboard breaking down unhealthy/downtime hours by factory site and by device type to pinpoint the worst offenders.',
      'Completed an equality scoring exercise in Excel comparing outcomes across factories to flag locations needing intervention.',
      'Practiced translating raw telemetry data into an executive-ready view for non-technical stakeholders.',
    ],
    image: '/projects/daikibo-factory-downtime-analysis/preview.png',
    demoHref: '/projects/daikibo-factory-downtime-analysis/preview.png',
    demoLabel: 'View Dashboard',
    downloadHref:
      '/projects/daikibo-factory-downtime-analysis/Equality_Table_Updated.xlsx',
    downloadLabel: 'Download Equality Table',
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
  fileHref: string;
  comingSoon?: boolean;
}

export const certificates: Certificate[] = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte (via Forage)',
    year: '2026',
    image: '/certificates/deloitte-data-analytics.jpg',
    fileHref: '/certificates/deloitte-data-analytics.pdf',
  },
  {
    title: 'Digital Marketing',
    issuer: 'IIM Ahmedabad (Acmegrade)',
    year: '2023',
    image: '/certificates/iim-ahmedabad-digital-marketing.jpeg',
    fileHref: '/certificates/iim-ahmedabad-digital-marketing.jpeg',
  },
  {
    title: 'Digital Marketing -- Live Project Internship',
    issuer: 'Samyak IT Solutions Pvt Ltd',
    year: '2023',
    image: '/certificates/samyak-digital-marketing.jpg',
    fileHref: '/certificates/samyak-digital-marketing.pdf',
  },
  {
    title: 'Foundation to AI, Data Science & Data Analytics',
    issuer: 'Samatrix.io',
    year: '2023',
    image: '/certificates/samatrix-foundation-ai-2023.jpg',
    fileHref: '/certificates/samatrix-foundation-ai-2023.pdf',
  },
  {
    title: 'Foundation to AI, Data Science, BI and Data Analytics',
    issuer: 'Samatrix.io',
    year: '2024',
    image: '/certificates/samatrix-foundation-ai-2024.jpg',
    fileHref: '/certificates/samatrix-foundation-ai-2024.pdf',
  },
  {
    title: 'Data Analysis Using Python',
    issuer: 'Samatrix.io',
    year: '2024',
    image: '/certificates/samatrix-python.jpg',
    fileHref: '/certificates/samatrix-python.pdf',
  },
  {
    title: 'R Programming for Data Science and Data Analysis',
    issuer: 'Samatrix.io',
    year: '2024',
    image: '/certificates/samatrix-r-programming.jpg',
    fileHref: '/certificates/samatrix-r-programming.pdf',
  },
  {
    title: 'Statistics & Computational Data Analysis',
    issuer: 'Samatrix.io',
    year: '2024',
    image: '/certificates/samatrix-statistics.jpg',
    fileHref: '/certificates/samatrix-statistics.pdf',
  },
  {
    title: 'Data Analytics and Visualization -- Tools & Techniques',
    issuer: 'Samatrix.io',
    year: '2024',
    image: '/certificates/samatrix-data-viz.jpg',
    fileHref: '/certificates/samatrix-data-viz.pdf',
  },
  {
    title: 'Machine Learning for Business',
    issuer: 'Samatrix.io',
    year: '2024',
    image: '/certificates/samatrix-ml-for-business.jpg',
    fileHref: '/certificates/samatrix-ml-for-business.pdf',
  },
  {
    title: 'SQL for Beginners: Learn SQL using MySQL and Database Design',
    issuer: 'Udemy',
    year: '2026',
    image: '/certificates/udemy-sql-for-beginners.jpg',
    fileHref: '/certificates/udemy-sql-for-beginners.pdf',
  },
  {
    title: 'Tableau A-Z: Hands-On Tableau Training for Data Science',
    issuer: 'Udemy',
    year: '2026',
    image: '/certificates/udemy-tableau-az.jpg',
    fileHref: '/certificates/udemy-tableau-az.pdf',
  },
  {
    title: 'Microsoft Power BI Desktop for Business Intelligence',
    issuer: 'Udemy',
    year: '2026',
    image: '/certificates/udemy-powerbi-desktop.jpg',
    fileHref: '/certificates/udemy-powerbi-desktop.pdf',
  },
  {
    title: 'Introduction to Career Skills in Data Analytics (2022)',
    issuer: 'LinkedIn Learning',
    year: '2026',
    image: '/certificates/linkedin-career-skills-data-analytics.jpg',
    fileHref: '/certificates/linkedin-career-skills-data-analytics.pdf',
  },
  {
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning',
    year: '2026',
    image: '/certificates/linkedin-what-is-generative-ai.jpg',
    fileHref: '/certificates/linkedin-what-is-generative-ai.pdf',
  },
  {
    title: 'Ethics in the Age of Generative AI',
    issuer: 'LinkedIn Learning',
    year: '2026',
    image: '/certificates/linkedin-ethics-generative-ai.jpg',
    fileHref: '/certificates/linkedin-ethics-generative-ai.pdf',
  },
  {
    title: 'Python Certification',
    issuer: '',
    year: '',
    image: '',
    fileHref: '',
    comingSoon: true,
  },
];


export interface Skill {
  number: string;
  name: string;
  description: string;
}

export const services: Skill[] = [
  {
    number: '01',
    name: 'Data Analysis',
    description:
      'Interpreting datasets to identify trends, patterns, and insights that support data-driven decision-making.',
  },
  {
    number: '02',
    name: 'SQL & Python',
    description:
      'Querying and analyzing data with SQL (Intermediate) and Python (Basic), with growing experience in R programming.',
  },
  {
    number: '03',
    name: 'Excel & Power BI',
    description:
      'Building advanced Excel models and learning Power BI to turn raw data into clear, actionable reporting.',
  },
  {
    number: '04',
    name: 'Business Analysis',
    description:
      'Identifying operational bottlenecks and streamlining workflows to improve efficiency and SLA compliance.',
  },
  {
    number: '05',
    name: 'Digital Marketing',
    description:
      'Applying SEO, SEM, and Google Analytics to support data-informed campaign and marketing decisions.',
  },
];
