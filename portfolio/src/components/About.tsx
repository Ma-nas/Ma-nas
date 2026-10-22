import React from 'react';
import { Shield, Cpu, Code2, Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md glass-pill text-xs font-mono text-cyan-400 mb-3">
            <span>[ SYSTEM ARCHITECTURE & BACKGROUND ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering principled software at the intersection of AI and systems.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            A methodical approach grounded in academic rigor at Jain University FET Bengaluru and real-world engineering across machine learning, backend pipelines, and modern web applications.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Background Panel */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 bg-cyan-400 rounded-full"></span>
              Engineering Philosophy
            </h3>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Modern AI systems fail not because models lack parameters, but because deployment environments lack validation, observability, and deterministic guards. My focus is on closing this reliability gap through principled benchmarking, synthetic testing harnesses, and privacy-preserving data architectures.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              During my Computer Science and Engineering (AI & ML) degree at Jain University and my internship at CodSoft, I developed practical pipelines spanning credit fraud detection, subscriber churn modeling, and automated NLP classification. Today, I build end-to-end applications that combine scalable backend architectures with deep model insight.
            </p>

            {/* Core Competencies Checklist */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Operational Highlights
              </div>
              {[
                'Benchmarking LLM hallucinations, factual consistency, and inference cost tradeoffs',
                'Designing Differential Privacy and cryptographic hashing for sensitive enterprise catalogs',
                'Architecting high-throughput REST APIs using FastAPI, Python, Java, and PostgreSQL',
                'Implementing production-grade React/TypeScript interfaces with strict accessibility standards'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <div className="mt-0.5 p-0.5 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars Matrix */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            <div className="glass-card rounded-2xl p-5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 flex items-center justify-center mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white tracking-tight">Systematic LLM Evaluation</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Building deterministic scoring engines (Faithfulness, Precision, ROUGE-L) to objectively evaluate model responses before user exposure.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white tracking-tight">Privacy & Security Guarantees</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Implementing differential privacy, SHA-256 k-anonymity verifiers, and secure RBAC access controls into enterprise pipelines.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white tracking-tight">Full-Stack Execution</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Deploying responsive frontends with React and Next.js backed by containerized, tested Python and Java microservices.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
