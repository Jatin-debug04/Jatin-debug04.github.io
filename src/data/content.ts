// Certifications -- used for the scrolling marquee strip
export const certifications = [
  'Data Analytics Job Simulation -- Deloitte',
  'Digital Marketing -- IIM Ahmedabad',
  'SQL for Data Analysis -- Udemy',
  'Digital Marketing -- Samyak Institute',
  'Foundation to AI, Data Science & BI -- Samatrix.io',
];

export const certificationsRow2 = [
  'Data Analysis Using Python -- Samatrix.io',
  'R-Programming for Data Science -- Samatrix.io',
  'Statistics & Computational Data Analysis -- Samatrix.io',
  'Data Analysis & Visualization -- Samatrix.io',
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
    title: 'SQL for Data Analysis',
    issuer: 'Udemy',
    year: '',
    image: '',
    fileHref: '',
    comingSoon: true,
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
