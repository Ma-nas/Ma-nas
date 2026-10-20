# Manas Mishra — Complete GitHub Profile Upgrade Guide

*A world-class GitHub presence for AI/ML internship applications*

---

## 1. Profile Settings (Do These First)

### Username
Your current username `Ma-nas` has a hyphen that makes it slightly awkward. Consider requesting a rename to `manas-mishra` or `manasmishra` through GitHub's Settings → Account → Change username. This makes it cleaner in URLs and @mentions. Do this before sharing your profile anywhere, as old links will redirect but you will lose any prior SEO.

### Bio
Replace the current "Student in AIML" with:
```
AI/ML engineer · building evaluation infra, RAG systems & full-stack AI apps · Jain University (B.Tech AIML)
```

### Profile Photo
Use a clear, well-lit headshot with a neutral background. Not a cartoon, not a crop from a group photo.

### Location
Set to: `Bengaluru, India`

### Website
Set to your best live project: `https://tourism-co.vercel.app`

---

## 2. Profile README Setup

Create a repository named exactly `Ma-nas` (matching your username). Add the `PROFILE_README.md` file provided alongside this document as `README.md` in that repository. This is what visitors see when they land on your GitHub profile.

**What makes this README work:**
- The typing SVG banner immediately communicates identity without a static title
- The stats section is functional, not decorative — it shows actual contribution data
- The project table is scannable in under 10 seconds, which is all a recruiter gives you
- It does not use flashy animated borders or rainbow gradients that read as immature

---

## 3. Pinned Repositories — Recommended Order

You can pin up to 6 repositories. Here is the recommended order, from strongest to supporting:

**Pin 1: EvalForge** — Your strongest project. Full-stack, AI-native, production architecture, well-documented. Leads with your most impressive capability (LLM evaluation + hallucination detection).

**Pin 2: TourismCo.** — Live deployed app. Recruiter can click "Live Demo" immediately. RAG + React + Node.js shows breadth.

**Pin 3: Ai-test-case-generator** — Clean utility tool that solves a real developer problem. Demonstrates you think about software quality.

**Pin 4: Mini_project (rename to: adaptive-proximal-gradient)** — Shows research/math depth. The optimizer comparison is genuinely impressive academically.

**Pin 5 & 6:** Reserve these for your next two projects (see Section 8: Suggested New Projects).

---

## 4. Repository Renames, Descriptions & Topics

### EvalForge ✅ (already named well)
- **Description:** `Production-grade LLM evaluation platform — hallucination detection, RAG benchmarking, multi-model comparison`
- **Topics:** `llm`, `hallucination-detection`, `rag`, `evaluation`, `fastapi`, `react`, `python`, `nlp`, `sentence-transformers`, `ai`
- **Website:** Point to the Swagger docs or a deployed demo if you deploy it

### Mini_project → Rename to: `adaptive-proximal-gradient`
- **Description:** `APG-DST optimizer vs. Ridge, LASSO, Elastic Net on high-dimensional regression — with interactive Flask dashboard`
- **Topics:** `optimization`, `machine-learning`, `lasso`, `ridge-regression`, `feature-selection`, `numerical-optimization`, `flask`, `python`, `research`
- **Website:** `https://mini-project-pied-nine.vercel.app`

### TourismCo. → Rename to: `tourismco-ai`
The period in the repo name causes issues with git clones and some tools. Rename it via Settings → Repository name.
- **Description:** `AI-powered travel OS for Uttar Pradesh — RAG pipeline with Gemini, multi-city itinerary planning, real-time collaboration`
- **Topics:** `rag`, `gemini`, `travel-ai`, `react`, `nodejs`, `socket-io`, `typescript`, `tailwindcss`
- **Website:** `https://tourism-co.vercel.app`

### Ai-test-case-generator → Rename to: `ai-test-case-generator`
- **Description:** `Auto-generate comprehensive pytest suites from Python source using Gemini — CLI-native, edge-case focused`
- **Topics:** `testing`, `pytest`, `gemini`, `code-generation`, `devtools`, `python`, `cli`
- **Website:** `https://ai-test-case-generator-six.vercel.app`

---

## 5. Repository-by-Repository Audit & Improvement Plan

---

### 5.1 EvalForge — Strength: ⭐⭐⭐⭐⭐

**What's already good:** Excellent README with architecture diagram, clear tech stack table, API endpoint table, project structure. This is your best repo.

**Missing / needs improvement:**

**a) No tests at all.** Add at least a basic test suite:
```
backend/tests/
  test_evaluation.py      # Unit tests for scoring engine
  test_hallucination.py   # Unit tests for claim extraction
  test_api.py             # FastAPI endpoint integration tests
```

**b) No CI/CD.** Add `.github/workflows/ci.yml`:
```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - name: Install dependencies
        run: |
          cd backend
          pip install -r requirements.txt
          pip install pytest httpx
      - name: Run tests
        run: |
          cd backend
          pytest tests/ -v
      - name: Lint
        run: |
          pip install ruff
          ruff check backend/app/
```

**c) No screenshots or demo GIF.** Add a `docs/` folder with:
- `dashboard_screenshot.png` — the main dashboard
- `hallucination_demo.gif` — 30-second screen recording of detecting a hallucination
- `benchmark_screenshot.png` — the model comparison view

Then embed in README under a "Screenshots" section:
```markdown
## Screenshots
![Dashboard](docs/dashboard_screenshot.png)
![Hallucination Detection](docs/hallucination_demo.gif)
```

**d) The "Resume Impact" section in your README is self-congratulatory and breaks the professional tone.** Delete it. Recruiters notice.

**e) Add a CONTRIBUTING.md:**
```markdown
# Contributing to EvalForge

## Development Setup
1. Fork the repo and clone locally
2. Follow the Quick Start guide in README.md
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Commit with descriptive messages
5. Open a pull request with a clear description

## Code Style
- Python: follow PEP 8, enforced by `ruff`
- TypeScript: ESLint config included, run `npm run lint`

## Reporting Issues
Use GitHub Issues. Include: environment, steps to reproduce, expected vs actual behavior.
```

**f) Add a LICENSE file.** The README says MIT but there's no `LICENSE` file in the repo.

**g) Remove `prdreport.docx` and `EvalForge_PRD.pdf` from the repo root.** These are planning documents, not source code. Move them to a `docs/` folder or a Google Drive link in the README.

---

### 5.2 TourismCo. — Strength: ⭐⭐⭐⭐

**What's already good:** Live deployment, glassmorphic UI, RAG architecture, real-world relevance, clean README.

**Missing / needs improvement:**

**a) The `.env.development` and `.env.production` files should never be in the repository.** Check their contents immediately. If they contain real API keys, rotate those keys now. Add proper `.env.example` files instead.

**b) `up_0.pdf` in the root.** This is an accidental commit — a planning document that shouldn't be in the repo. Remove it:
```bash
git rm up_0.pdf
git commit -m "remove accidental pdf artifact"
```

**c) No CI/CD.** Add `.github/workflows/ci.yml` for frontend linting:
```yaml
name: CI

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run lint
      - run: npm run build
```

**d) Add screenshots.** The repo has no images. Add:
- Hero screenshot of the itinerary generation UI
- Screenshot of the Travel Circles real-time feature
- Architecture diagram showing the RAG pipeline flow

**e) The repo name `TourismCo.` (with a period) is a git footgun.** Rename to `tourismco-ai`.

**f) Add a `CONTRIBUTING.md` and `LICENSE` file.**

---

### 5.3 AI Test Case Generator — Strength: ⭐⭐⭐

**What's already good:** Solves a real problem, clean CLI design, good quickstart.

**Missing / needs improvement:**

**a) No README screenshot or demo output.** Show what the generated test file actually looks like. Add a code block in the README showing a sample input function and the generated pytest output. This is the most important thing missing.

**b) The web/ folder is ambiguous.** The README only explains the CLI. Does the web UI work? If so, document it. If it's incomplete, either finish it or remove it and note it as a work in progress.

**c) No tests for the generator itself.** Add `tests/test_generator.py` that mocks the Gemini API response and verifies the output parsing logic.

**d) Add type hints throughout `ai_test_generator.py`.** This is a Python tool — type annotations demonstrate code quality.

**e) The ABOUT.md is redundant with README.md.** Merge them or delete ABOUT.md.

---

### 5.4 Mini_project (Adaptive Proximal Gradient) — Strength: ⭐⭐⭐⭐

**What's already good:** Well-structured, real mathematical depth, Flask dashboard, clean CLI arguments, good README.

**Missing / needs improvement:**

**a) The name `Mini_project` is completely non-descriptive.** This is your research project — it should be called `adaptive-proximal-gradient` or `apg-dst-optimizer`. Rename immediately.

**b) `extracted.txt` and `output.log` should be in `.gitignore`, not committed.** Remove them.

**c) Add a results visualization section to the README.** Embed 2–3 of the generated plots (convergence curve, sparsity vs. MSE trade-off) directly in the README. These show mathematical intuition at a glance.

**d) Add a "Why APG-DST?" section explaining the academic motivation.** Even 3–4 sentences connecting to the published literature (FISTA, proximal gradient methods) elevates this from a school project to a research artifact.

**e) Add a `.gitignore` for Python:**
```
__pycache__/
*.pyc
*.egg-info/
dist/
build/
results/plots/*.png
results/*.json
results/*.npy
output.log
extracted.txt
venv/
.env
```

---

## 6. GitHub Actions Workflows

Add these to each repository under `.github/workflows/`.

### Python CI (EvalForge, Mini_project, AI Test Case Generator)
```yaml
# .github/workflows/ci.yml
name: Python CI

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ['3.11']

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pip install ruff pytest

      - name: Lint with ruff
        run: ruff check .

      - name: Run tests
        run: pytest tests/ -v --tb=short
```

### React/TypeScript CI (TourismCo., EvalForge frontend)
```yaml
# .github/workflows/frontend-ci.yml
name: Frontend CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-lint:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./frontend

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: frontend/package-lock.json

      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

---

## 7. Issue Templates

Add `.github/ISSUE_TEMPLATE/` to your key repositories.

### Bug Report (`bug_report.md`)
```markdown
---
name: Bug report
about: Something isn't working as expected
labels: bug
---

**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. ...
2. ...

**Expected behavior**
What you expected to happen.

**Environment**
- OS:
- Python / Node version:
- Browser (if frontend):

**Screenshots or logs**
If applicable, paste relevant output or attach screenshots.
```

### Feature Request (`feature_request.md`)
```markdown
---
name: Feature request
about: Suggest an improvement or new capability
labels: enhancement
---

**Problem being solved**
A clear description of the problem or limitation.

**Proposed solution**
Describe what you'd like to happen.

**Alternatives considered**
Any alternative approaches you've thought about.
```

---

## 8. Suggested New Projects (Fill Portfolio Gaps)

You have strong LLM evaluation and a solid full-stack app. Here are two projects that would round out your portfolio perfectly for AI/ML internship applications:

---

### Project A: `pdf-rag-qa` — Document Q&A with RAG
**Why it matters:** Shows you can build end-to-end RAG pipelines with vector search — one of the most in-demand ML engineering skills right now.

**What to build:**
- Upload a PDF → extract text → chunk → embed → store in ChromaDB or FAISS
- Ask natural language questions → retrieve relevant chunks → answer with Gemini
- FastAPI backend, simple React frontend
- Compare answers with and without retrieval context (ties directly into your EvalForge work)

**Stack:** Python, FastAPI, ChromaDB or FAISS, Sentence Transformers, Gemini, React

**Time estimate:** 1–2 weekends

---

### Project B: `ml-internship-tracker` or a domain-specific classifier
**Why it matters:** You have a CodSoft ML internship but no repository that shows core ML work (classification, regression, feature engineering on a real dataset). Recruiters look for this.

**What to build:**
- Pick a Kaggle dataset in a domain you find interesting (medical imaging, finance, NLP)
- Full ML pipeline: EDA → feature engineering → model training (scikit-learn + XGBoost) → evaluation with proper metrics
- Clean Jupyter notebook + a trained model export
- A short write-up in the README explaining your methodology choices

**Stack:** Python, Pandas, NumPy, scikit-learn, XGBoost, Matplotlib/Seaborn

**Time estimate:** 3–5 days

---

## 9. Profile Optimization for Recruiters

### What recruiters look for in under 30 seconds:
1. **Can I understand what this person builds from their pinned repos?** → ✅ After implementing this guide: yes, immediately
2. **Is there a live demo I can click?** → ✅ TourismCo. is live, Ai-test-case-generator has a vercel URL
3. **Do they have recent commits?** → Aim for at least 3–4 commits per week to maintain a green contribution graph
4. **Is the README coherent?** → ✅ The provided README is clean and scannable

### Green contribution graph strategy:
- Commit iteratively rather than in large batches. Small, frequent commits look better than a single massive push.
- Work on documentation improvements, adding tests, and fixing issues — these all count as contributions.
- Don't use contribution padding repositories (fake commit scripts). Experienced recruiters notice.

### LinkedIn ↔ GitHub coherence:
- The project names, tech stacks, and dates on LinkedIn should match what's in your GitHub repos exactly.
- Add GitHub link to your LinkedIn profile (LinkedIn → Edit Profile → Contact Info → Add website → GitHub).
- When you share projects on LinkedIn, link directly to the GitHub repo, not just a screenshot.

---

## 10. Checklist — Execute in This Order

**Week 1: Foundations**
- [ ] Create `Ma-nas/Ma-nas` special repository with the provided `PROFILE_README.md`
- [ ] Update GitHub bio, location, website
- [ ] Rename `TourismCo.` to `tourismco-ai` and `Mini_project` to `adaptive-proximal-gradient`
- [ ] Remove `.env.development`, `.env.production`, `up_0.pdf` from TourismCo. repo
- [ ] Rotate any API keys that were accidentally committed
- [ ] Update all repository descriptions and add topics
- [ ] Set pinned repositories in the recommended order
- [ ] Add LICENSE file to EvalForge, TourismCo., and Ai-test-case-generator

**Week 2: Quality**
- [ ] Add CI/CD workflows to EvalForge and TourismCo.
- [ ] Add screenshots and demo GIFs to all four repos
- [ ] Add CONTRIBUTING.md to EvalForge and TourismCo.
- [ ] Delete the "Resume Impact" section from EvalForge README
- [ ] Fix Mini_project `.gitignore` (remove committed log/text files)
- [ ] Add type hints to `ai_test_generator.py`
- [ ] Merge or remove `ABOUT.md` from Ai-test-case-generator

**Week 3–4: Growth**
- [ ] Add at least basic unit tests to EvalForge backend
- [ ] Add sample output screenshots to Ai-test-case-generator README
- [ ] Start one of the two suggested new projects (pdf-rag-qa recommended first)
- [ ] Add issue templates to EvalForge and TourismCo.

---

## Summary Assessment

| Repository | Current Strength | After Improvements |
|---|---|---|
| EvalForge | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| TourismCo. | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Ai-test-case-generator | ⭐⭐ | ⭐⭐⭐⭐ |
| Mini_project | ⭐⭐ | ⭐⭐⭐⭐ |
| Profile README | ⭐ (none) | ⭐⭐⭐⭐⭐ |

Your fundamentals are solid — the projects are real, the tech stacks are current, and you already have deployed apps. The gap between where you are and a top-tier portfolio is almost entirely documentation, testing, and presentation — not code quality. Execute this guide and your profile will be in the top 5% of CS students applying to ML/AI internships.
