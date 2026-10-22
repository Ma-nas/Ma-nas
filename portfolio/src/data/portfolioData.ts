export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  category: 'ml-ai' | 'cloud-systems' | 'full-stack';
  tags: string[];
  metrics: string[];
  features: string[];
  architectureNotes: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  status: 'Production' | 'Live Demo' | 'Active Benchmark' | 'Tooling';
}

export interface SkillCategory {
  title: string;
  skills: { name: string; highlight?: boolean; iconTag?: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  verifiedDocLink?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  specialization: string;
  milestones: string[];
  coursework?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  category: 'AI/ML' | 'DevOps & Systems' | 'UI/UX';
  highlight?: boolean;
  description?: string;
}

export const PERSONAL_INFO = {
  name: "Manas Mishra",
  role: "AI/ML Systems Engineer",
  title: "AI/ML Systems Engineer & Full-Stack Builder",
  headline: "AI/ML Systems Engineer & Full-Stack Builder",
  subheadline: "Architecting quantitative LLM evaluation matrices, grounded RAG pipelines, and database-kernel-isolated backends.",
  bio: "Undergraduate Computer Science (AI & ML) engineer at Jain University FET, Bengaluru. Former Machine Learning Intern at CodSoft. My work centers where deep language models interface with production systems engineering: atomic hallucination auditing, zero-leakage row-level security, and responsive full-stack applications.",
  email: "mm7390180@gmail.com",
  backupEmail: "manasmishra131005@gmail.com",
  location: "Bengaluru, Karnataka, India",
  status: "Available for AI/ML & Engineering Roles",
  github: "https://github.com/Ma-nas",
  linkedin: "https://www.linkedin.com/in/manas-mishra-a05679294/",

};

export const PROJECTS: Project[] = [
  {
    id: "evalforge",
    title: "EvalForge",
    tagline: "LLM Evaluation Matrix & Automated Hallucination Radar",
    description: "An observability and evaluation platform designed to benchmark Large Language Model outputs with quantitative precision, measuring semantic accuracy, hallucination rates, and inference economics.",
    problem: "LLM production pipelines suffer from silent factual fabrications, non-deterministic drift, and runaway token costs with little observability.",
    solution: "Engineered an evaluation matrix that deconstructs model completions into atomic declarative claims, auditing each claim against reference contexts using dense embeddings and multi-model shootouts.",
    category: "ml-ai",
    tags: ["Python", "FastAPI", "React 19", "PyTorch", "all-MiniLM-L6-v2", "Tailwind CSS"],
    metrics: [
      "Atomic Claim Decomposition Engine",
      "5-Pillar RAG Faithfulness Scoring",
      "Head-to-head Gemini vs GPT-4o Cost/Latency Benchmarking"
    ],
    features: [
      "Semantic similarity scoring via PyTorch sentence transformers",
      "Automated claim decomposition isolating discrete assertions",
      "Multi-model warzone comparing accuracy, latency (ms), and $/1K tokens",
      "Batch dataset ingestion for SQuAD & TruthfulQA benchmark corpora"
    ],
    architectureNotes: "FastAPI decoupled backend with SQLite/PostgreSQL SQLAlchemy layer, PyTorch vectorizer running locally for zero API leakage, and React 19 client styled with tactical telemetry HUD.",
    githubUrl: "https://github.com/Ma-nas/EvalForge",
    featured: true,
    status: "Active Benchmark"
  },
  {
    id: "catalog-intelligence",
    title: "Privacy-Preserving Catalog Intelligence",
    tagline: "Enterprise Multi-Tenant Catalog Enrichment with Kernel-Enforced RLS",
    description: "An enterprise platform that ingests, classifies, and enriches B2B product catalogs across hundreds of corporate tenants while mathematically guaranteeing zero cross-tenant data leakage.",
    problem: "Shared-table multi-tenant applications risk catastrophic data exposure if a single SQL query omits a tenant_id filter or application code has bugs.",
    solution: "Delegates isolation boundary enforcement directly to the PostgreSQL database kernel via Row-Level Security (RLS) with SQL-92 3-Valued Logic fail-closed semantics.",
    category: "cloud-systems",
    tags: ["Python 3.11+", "FastAPI", "PostgreSQL 15 RLS", "Celery", "Redis", "Terraform", "Docker"],
    metrics: [
      "Database Kernel Enforced Row-Level Security",
      "Fail-Closed 3-Valued Logic (Zero 403 leakage, strict 404s)",
      "Async Worker Fleet with Redis Semaphore Concurrency"
    ],
    features: [
      "PostgreSQL RLS fail-closed boundaries via scoped session contexts",
      "Celery async fleet with SHA-256 idempotency cache & tenant rate limiting",
      "Stateless ML classification microservice using TF-IDF + SGD",
      "Append-only audit trail logging every administrative cross-tenant probe"
    ],
    architectureNotes: "Single DB access gateway checked by automated CI AST linter. Terraform GCP Cloud Run + Cloud SQL private VPC architecture.",
    githubUrl: "https://github.com/Ma-nas/Privacy-Preserving-Catalog-Intelligence-System",
    featured: true,
    status: "Production"
  },
  {
    id: "tourism-co",
    title: "TourismCo. AI",
    tagline: "Intelligent Travel OS & Grounded RAG Itinerary Engine",
    description: "A travel intelligence engine for Uttar Pradesh, India, combining official state tourism knowledge bases with a resilient 7-model Google Gemini fallback cascade.",
    problem: "Generic travel chatbots hallucinate non-existent transit connections, misquote monument entry timings, and ignore multi-variable budget constraints.",
    solution: "Engineered a custom RAG pipeline that bounds Gemini 1.5 Flash completions within verified state tourism databases, producing deterministic tri-tier budget breakdowns.",
    category: "full-stack",
    tags: ["React 19", "TypeScript", "Node.js", "Express", "Socket.IO", "Google Gemini 1.5", "Tailwind CSS"],
    metrics: [
      "7-Model Resilient Fallback Cascade",
      "Tri-Tier Budget Optimization (Budget, Balanced, Premium)",
      "Live Collaborative Travel Circles via WebSockets"
    ],
    features: [
      "Constraint extraction parsing cities, budgets, days, and dietary rules",
      "Official tourism knowledge base grounding eliminating transit hallucinations",
      "Interactive day-by-day scheduling tabbed across morning/afternoon/night",
      "Real-time WebSocket group chat for collaborative trip planning"
    ],
    architectureNotes: "Vite React client with Lucide iconography connected to an Express API server with Socket.IO room synchronization and exponential backoff retry mechanisms.",
    githubUrl: "https://github.com/Ma-nas/TourismCo.",
    liveUrl: "https://tourism-co.vercel.app",
    featured: true,
    status: "Live Demo"
  },
  {
    id: "attendance-system",
    title: "Attendance Management System",
    tagline: "Enterprise Academic Governance with Tamper-Evident Audit Logging",
    description: "A full-stack institutional attendance platform with strict Role-Based Access Control, client IP tracing, and interactive faculty roster workflows.",
    problem: "Traditional academic attendance records lack cryptographic accountability, allowing unlogged retroactive status alterations and faculty impersonation.",
    solution: "Built a Spring Boot 3 & PostgreSQL platform with a tamper-evident audit service capturing client IP, timestamp, and status diff for every attendance mutation.",
    category: "cloud-systems",
    tags: ["Java 21", "Spring Boot 3", "Spring Security", "PostgreSQL", "React 18", "TypeScript", "Tailwind"],
    metrics: [
      "Tamper-Evident Security Audit Pipeline",
      "3-Tiered RBAC (Admin, Trainer, Student)",
      "Multi-Department Roster (5 Departments, 110+ Students)"
    ],
    features: [
      "Role-Based Access Control enforcing isolated workflows across roles",
      "Batch attendance marking sheet with instant status toggle",
      "Immutable audit log trail tracking every manual override and IP address",
      "Pre-configured 1-click Render blueprint and standalone SQL seeder"
    ],
    architectureNotes: "Java 21 Spring Boot REST backend with Hibernate ORM, BCrypt password hashing, and dynamic cloud datasource binding.",
    githubUrl: "https://github.com/Ma-nas/Attandance-Managment-system",
    featured: false,
    status: "Production"
  },
  {
    id: "resumeforge-ai",
    title: "ResumeForge AI",
    tagline: "Client-Side Generative AI Engine for Dynamic LaTeX Resumes",
    description: "A zero-dependency in-browser application that analyzes job descriptions, scores candidate portfolio relevance, and synthesizes compilable Jake Ryan LaTeX resumes.",
    problem: "Job seekers manually reformat resumes without quantitative alignment to applicant tracking system (ATS) criteria, while cloud builders compromise privacy.",
    solution: "Built a 100% client-side pipeline utilizing Google Gemini API with LocalStorage caching, evaluating project fit and generating tailored LaTeX source with clickable hyperref links.",
    category: "ml-ai",
    tags: ["JavaScript (ES6+)", "Google Gemini API", "LaTeX", "HTML5", "CSS3 HUD Tokens"],
    metrics: [
      "100% Client-Side Privacy (Zero Server Storage)",
      "Single-Page Vertical Spacing Guarantee",
      "Automated Portfolio Gap Mitigation"
    ],
    features: [
      "Automated JD decomposition extracting tech stack and responsibilities",
      "Weighted project scoring factoring tech match, domain, and impact",
      "Synthetic gap-filling project generator for target competencies",
      "Compilable Jake Ryan LaTeX output with hyperlinked contact headers"
    ],
    architectureNotes: "Pure client-side single-page architecture executing directly in the browser with Gemini model fallback cascades and LocalStorage state management.",
    githubUrl: "https://github.com/Ma-nas/ResumeForge-AI",
    featured: false,
    status: "Tooling"
  },
  {
    id: "ai-test-generator",
    title: "AI Test Case Generator",
    tagline: "Automated Pytest Suite Synthesis via Google GenAI",
    description: "A developer tool that parses Python modules or natural language specifications and automatically synthesizes comprehensive, PEP-8 compliant pytest suites.",
    problem: "Developers frequently omit negative test paths, edge cases, and boundary assertions during rapid prototyping, causing runtime leaks.",
    solution: "Applies Gemini 2.5 Flash via the Google GenAI SDK to isolate edge cases, type errors, and boundary limits, emitting test modules with strict pytest.raises assertions.",
    category: "ml-ai",
    tags: ["Python", "Google GenAI SDK", "Pytest", "Next.js 15", "TypeScript"],
    metrics: [
      "Zero-AST Direct Prompt Ingestion",
      "Automated Exception Boundary Assertion",
      "Dual Interface: Headless CLI + Next.js Workbench"
    ],
    features: [
      "CLI batch processor generating test files directly from Python source",
      "Targeted exception path verification using pytest.raises blocks",
      "Sanitizer stripping markdown artifacts to emit clean python code",
      "Next.js web workbench for interactive diff inspection"
    ],
    architectureNotes: "Dual CLI and Next.js full-stack utility designed for CI pipeline integration and local developer productivity.",
    githubUrl: "https://github.com/Ma-nas/Ai-test-case-generator",
    featured: false,
    status: "Tooling"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Machine Learning & NLP",
    skills: [
      { name: "Python", highlight: true },
      { name: "PyTorch", highlight: true },
      { name: "scikit-learn", highlight: true },
      { name: "SentenceTransformers", highlight: true },
      { name: "NumPy & Pandas" },
      { name: "FAISS Vector Search" },
      { name: "Feature Engineering" },
      { name: "Model Evaluation & Benchmarking" }
    ]
  },
  {
    title: "Generative AI & LLMOps",
    skills: [
      { name: "RAG Architecture", highlight: true },
      { name: "Hallucination Detection", highlight: true },
      { name: "LangChain" },
      { name: "Google Gemini API", highlight: true },
      { name: "OpenAI GPT API" },
      { name: "Prompt Engineering" },
      { name: "Model Fallback Cascades" },
      { name: "Context Retrieval Scoring" }
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "Java 21", highlight: true },
      { name: "Spring Boot 3", highlight: true },
      { name: "PostgreSQL (Row-Level Security)", highlight: true },
      { name: "Node.js & Express" },
      { name: "RESTful API Design" },
      { name: "JWT & RBAC Security" },
      { name: "Redis & Celery" }
    ]
  },
  {
    title: "Frontend & Architecture",
    skills: [
      { name: "React 18 / 19", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Vite" },
      { name: "Next.js" },
      { name: "WebSockets (Socket.IO)" },
      { name: "Liquid Glass & UI Design Tokens" },
      { name: "State Management" }
    ]
  },
  {
    title: "DevOps & Tooling",
    skills: [
      { name: "Docker & Containerization" },
      { name: "Git & GitHub Actions (CI/CD)", highlight: true },
      { name: "Vercel Deployment" },
      { name: "Linux / Bash" },
      { name: "Pytest & Unit Testing" },
      { name: "Figma UX Design" },
      { name: "Terraform (Basic)" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Machine Learning Intern",
    company: "CodSoft",
    period: "June 2025 - July 2025",
    location: "Remote / Bengaluru",
    type: "Internship",
    highlights: [
      "Engineered supervised classification pipelines for financial risk assessment and customer churn prediction.",
      "Handled tabular datasets using Pandas, NumPy, and scikit-learn, executing feature scaling, median/mode imputation, and SMOTE oversampling.",
      "Evaluated models using ROC-AUC curves, precision-recall tradeoffs, and 5-fold cross-validation.",
      "Documented complete end-to-end notebooks with data visualization in Seaborn and Matplotlib."
    ],
    verifiedDocLink: "https://drive.google.com/file/d/1AOyukFXcYgKH3s1ReYrW6Zlz8lZRFRVu/view"
  }
];

export const WORK_EXPERIENCE = EXPERIENCES;

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Jain University - Faculty of Engineering and Technology (FET)",
    period: "2022 - 2027",
    location: "Bengaluru, Karnataka, India",
    specialization: "Computer Science & Engineering (Artificial Intelligence and Machine Learning)",
    coursework: [
      "Deep Learning",
      "Natural Language Processing",
      "Operating Systems",
      "Database Management Systems",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Cloud Computing"
    ],
    milestones: [
      "Coursework: Deep Learning, Natural Language Processing, Operating Systems, Database Management Systems, Data Structures & Algorithms, Computer Networks.",
      "Finalist: Code Relay DSA Competition, Jain University FET."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Introduction to Transformer-Based Natural Language Processing",
    issuer: "NVIDIA",
    date: "June 2025",
    credentialUrl: "https://learn.nvidia.com/certificates?id=9icw86RHQG277r6jODreOA",
    category: "AI/ML"
  },
  {
    title: "Deep Learning with Python: Optimizing Deep Learning Models",
    issuer: "LinkedIn Learning",
    date: "April 2026",
    category: "AI/ML"
  },
  {
    title: "Foundations of Data Science and Machine Learning with Python",
    issuer: "Coursera",
    date: "Verified",
    credentialUrl: "https://coursera.org/share/632486aa6263537d178de352f31f1163",
    category: "AI/ML"
  },
  {
    title: "DevOps Essentials",
    issuer: "Coursera",
    date: "Verified",
    credentialUrl: "https://coursera.org/share/37246247cc40f5ddeaa3d66cb87d3005",
    category: "DevOps & Systems"
  },
  {
    title: "Introduction to Internet of Things (IoT)",
    issuer: "Coursera",
    date: "Verified",
    credentialUrl: "https://coursera.org/share/81380e5fc60c1bbd91486369210e2a54",
    category: "DevOps & Systems"
  },
  {
    title: "Figma for UX Design",
    issuer: "LinkedIn Learning",
    date: "April 2026",
    category: "UI/UX"
  },
  {
    title: "Fundamentals of Git & GitHub",
    issuer: "Microsoft Learn Student Ambassador",
    date: "Verified",
    category: "DevOps & Systems"
  }
];
