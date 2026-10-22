import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EXPERIENCES, EDUCATION, ExperienceItem, EducationItem } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md glass-pill text-xs font-mono text-cyan-400 mb-3">
            <span>[ VERIFIED TIMELINE & ROLES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & Academic Foundation
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm leading-relaxed">
            Hands-on machine learning engineering in remote industry environments coupled with rigorous computer science coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </h3>

            {EXPERIENCES.map((exp: ExperienceItem, idx: number) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h4>
                    <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 mt-0.5 text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {exp.location} • {exp.type}
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {exp.highlights.map((item: string, hIdx: number) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Status: Completed Internship</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Verified via Resume & Drive Artifacts
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </h3>

            {EDUCATION.map((edu: EducationItem, idx: number) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {edu.degree}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-300">
                  {edu.institution}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                    Relevant Coursework & Studies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(edu.coursework || []).map((course: string, cIdx: number) => (
                      <span
                        key={cIdx}
                        className="px-2 py-1 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 text-xs text-slate-400">
                  Focus: Advancing reproducible machine learning benchmarks and enterprise software pipelines.
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
