import React from 'react';
import { Cpu, Terminal, Database, Layout, GitBranch, ShieldCheck } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Machine Learning, NLP & AI Systems':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 'Backend, APIs & Distributed Systems':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Frontend & Creative Interfaces':
        return <Layout className="w-5 h-5 text-purple-400" />;
      case 'Cloud, DevOps & Engineering Tooling':
        return <GitBranch className="w-5 h-5 text-amber-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md glass-pill text-xs font-mono text-cyan-400 mb-3">
            <span>[ SYSTEMATIC TECHNICAL TOOLING ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Stack & Core Disciplines
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm leading-relaxed">
            Technologies actively exercised across verified repositories, production builds, and academic coursework. Honest representation without artificial percentages.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        skill.highlight
                          ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/10'
                          : 'bg-white/5 text-slate-300 border border-white/5 hover:border-white/15'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified in active code</span>
                <span className="text-cyan-400">• Practical execution</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
