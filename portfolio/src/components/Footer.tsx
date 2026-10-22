import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative text-slate-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-slate-200 font-sans font-semibold text-sm">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-slate-600">|</span>
              <span className="font-mono text-xs text-cyan-400">{PERSONAL_INFO.title}</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Jain University FET, Bengaluru • Computer Science Engineering (AI & ML)
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#projects" className="hover:text-slate-200 transition-colors">Projects</a>
            <a href="#about" className="hover:text-slate-200 transition-colors">Architecture</a>
            <a href="#skills" className="hover:text-slate-200 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-slate-200 transition-colors">Timeline</a>
            <a href="#certifications" className="hover:text-slate-200 transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-slate-200 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} Manas Mishra
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg glass-button text-slate-400 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-600">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-cyan-500/80" />
            <span>100% Verified Footprint • Zero Fabricated Stats • Liquid Glass UI System</span>
          </div>
          <span>Production Build • Optimized for Vercel</span>
        </div>
      </div>
    </footer>
  );
};
