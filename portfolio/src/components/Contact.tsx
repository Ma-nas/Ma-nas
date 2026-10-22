import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md glass-pill text-xs font-mono text-cyan-400 mb-3">
            <span>[ INITIATE CONNECTION ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Discuss AI Systems & Engineering
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            I am currently open to machine learning engineering, data science, and full-stack software development opportunities. Reach out via verified channels below.
          </p>
        </div>

        {/* Primary Contact Action Glass Card */}
        <div className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/20 text-center relative overflow-hidden mb-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="inline-flex p-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Direct Professional Inquiries
          </h3>
          <p className="mt-2 text-sm text-slate-300 font-mono">
            {PERSONAL_INFO.email}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-xs hover:bg-cyan-300 shadow-md shadow-cyan-400/20 transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-950" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-button text-xs font-mono text-slate-200 hover:text-white"
            >
              <span>Launch Mail Client</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
            Encrypted & Direct Communication • Zero Form Intermediaries
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">GitHub Profile</div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  github.com/Ma-nas
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-indigo-400 group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Manas Mishra
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-300 transition-colors" />
          </a>

          <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Location Base</div>
                <div className="text-sm font-bold text-white">
                  Bengaluru, India
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              IST (UTC+5:30)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
