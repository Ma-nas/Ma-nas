# Manas Mishra — Liquid Glass Engineering Portfolio

A high-performance personal portfolio built with React 18, TypeScript, Vite, and Tailwind CSS. Designed under Apple-inspired liquid-glass specifications with strict adherence to verified technical credentials, zero artificial statistics, and production-grade accessibility.

---

## Technical Stack & Architecture

- **Core Framework**: React 18 with TypeScript (strict typing)
- **Bundler & Tooling**: Vite 6 (ESM production bundling)
- **Styling & Design System**: Tailwind CSS with custom liquid-glass utilities (`backdrop-filter`, specular highlights, ambient mesh gradients)
- **Icons**: Lucide React
- **Target Deployment**: Vercel (static edge deployment via `dist/`)

---

## Design System Principles

1. **Obsidian Surface**: Deep graphite/obsidian background (`#05070a`) preventing visual fatigue and maximizing contrast.
2. **Liquid Glass Aesthetics**: Subtle translucent panels (`rgba(15, 23, 42, 0.45)` with `backdrop-filter: blur(20px)`), 1px specular borders (`rgba(255, 255, 255, 0.08)`), and soft radial ambient lighting.
3. **Accent Hierarchy**: High-contrast electric cyan (`#00f0ff`) for primary technical focus, indigo (`#6366f1`) for systems/coursework, and emerald (`#10b981`) for verified status.
4. **Authenticity Guarantee**: 100% verified projects, coursework at Jain University FET Bengaluru, CodSoft internship, and official NVIDIA credentials. Zero emojis, zero fake metrics.

---

## Project Structure

```
portfolio/
├── index.html                   # HTML5 entry with metadata, Open Graph, and fonts
├── package.json                 # Dependency configuration & scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite bundler configuration
├── tailwind.config.js           # Design tokens, color system, and blur extensions
├── vercel.json                  # Vercel deployment directives & security headers
├── public/
│   └── resume.pdf               # Verified resume artifact
└── src/
    ├── main.tsx                 # Application entry point
    ├── App.tsx                  # Layout orchestrator
    ├── data/
    │   └── portfolioData.ts     # Verified technical dataset & case studies
    ├── styles/
    │   └── index.css            # Liquid glass CSS utilities & gradient meshes
    └── components/
        ├── Navbar.tsx           # Floating glass pill navigation
        ├── Hero.tsx             # Positioning, live status, and terminal preview
        ├── Projects.tsx         # Flagship showcase, filter tabs & case study modal
        ├── About.tsx            # Engineering philosophy & core competencies
        ├── Skills.tsx           # Systematic tech stack matrix
        ├── Experience.tsx       # CodSoft internship & academic timeline
        ├── Certifications.tsx   # NVIDIA and institutional credential verification
        ├── Contact.tsx          # Direct communication, copy-email toast & links
        └── Footer.tsx           # Minimalist system footer
```

---

## Local Development & Validation

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
This runs TypeScript type-checking (`tsc -b`) followed by Vite's production tree-shaking and minification, producing an optimized static bundle in `dist/`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## Vercel Deployment Guide

### Option 1: Instant Deployment via Vercel CLI
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy directly from the portfolio directory
cd portfolio
vercel
```
When prompted:
- Set framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

### Option 2: Git-Integrated Deployment via Vercel Dashboard
1. Push the `portfolio` folder to your GitHub repository (`github.com/Ma-nas/...`).
2. Log in to [vercel.com](https://vercel.com).
3. Click **Add New Project** and select your repository.
4. Set the **Root Directory** to `portfolio` (or the repository root if you place it in a dedicated repo).
5. Ensure the framework preset is detected as **Vite**.
6. Click **Deploy**. Vercel will build and serve your site globally via their edge CDN.
