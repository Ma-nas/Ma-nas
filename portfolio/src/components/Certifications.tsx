import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md glass-pill text-xs font-mono text-cyan-400 mb-3">
            <span>[ ACCREDITED VERIFICATIONS ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications & Industry Credentials
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm leading-relaxed">
            Verified credentials from NVIDIA, Coursera, and technical institutions. Official cryptographic certificate links included where available.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 border flex flex-col justify-between ${
                cert.highlight
                  ? 'border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 via-white/[0.02] to-transparent'
                  : 'border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-cyan-400 font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-slate-400">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {cert.description || `Specialization in ${cert.category} with verified curriculum completion.`}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Verify ID</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400">Verified on Resume</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
