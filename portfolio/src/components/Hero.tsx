import React from 'react';
import { Terminal, ArrowRight, FileText, CheckCircle2, Cpu, Database, Network } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Verification & Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill mb-6 border border-cyan-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-300">
            Available for AI/ML & Software Engineering Roles
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-[11px] font-mono text-cyan-400">
            Jain University FET, Bengaluru
          </span>
        </div>

        {/* Primary Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            Engineering trustworthy <span className="text-gradient-cyan">AI architectures</span>, distributed backends, and high-performance software.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a computer science engineer specializing in Machine Learning, Large Language Model evaluation pipelines, and privacy-preserving data systems. I build reproducible systems that transition models from experimental scripts into resilient production services.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-200"
          >
            Explore Flagship Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-button text-slate-200 font-mono text-sm hover:text-white"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            Verified Resume (PDF)
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 font-mono text-xs hover:bg-white/5 transition-colors"
          >
            Direct Verification & Contact
          </a>
        </div>

        {/* Trust & Architecture Metrics Matrix */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wider uppercase text-slate-400">Primary Focus</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">AI & Machine Learning</div>
            <p className="mt-1 text-xs text-slate-400">LLM Benchmarks, RAG & NLP</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-indigo-400 mb-2">
              <Database className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wider uppercase text-slate-400">Engineering</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Full-Stack & APIs</div>
            <p className="mt-1 text-xs text-slate-400">FastAPI, Python, Java & Next.js</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wider uppercase text-slate-400">Credentials</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">NVIDIA Certified</div>
            <p className="mt-1 text-xs text-slate-400">Transformer-Based NLP Specialization</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Network className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wider uppercase text-slate-400">Prior Work</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">CodSoft ML Intern</div>
            <p className="mt-1 text-xs text-slate-400">Fraud Detection, Churn & SMS NLP</p>
          </div>
        </div>

        {/* Live Architectural Diagnostic Terminal Preview */}
        <div className="mt-10 glass-panel rounded-2xl p-5 border border-white/10 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="text-[11px] text-slate-400 ml-2">evalforge_orchestrator.py — runtime diagnostics</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Status: Active Pipeline</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-slate-300">
            <div>
              <span className="text-slate-500"># Model Evaluation Stack</span>
              <div className="text-cyan-400 mt-1">eval_engine = LLMBenchmarkEngine()</div>
              <div className="text-slate-400">metrics: [Faithfulness, ROUGE-L, Cosine]</div>
            </div>
            <div>
              <span className="text-slate-500"># Privacy Isolation</span>
              <div className="text-indigo-400 mt-1">differential_privacy = LaplaceEpsilon(0.5)</div>
              <div className="text-slate-400">sha256_k_anonymity_verifier: PASS</div>
            </div>
            <div>
              <span className="text-slate-500"># Verification Checksum</span>
              <div className="text-emerald-400 mt-1">github_integrity: 100% verified</div>
              <div className="text-slate-400">zero_hallucinations_enforced: TRUE</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
