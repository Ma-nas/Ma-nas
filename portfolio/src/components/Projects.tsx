import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  X, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ml-ai' | 'cloud-systems' | 'full-stack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const featuredProject = PROJECTS.find(p => p.id === 'evalforge') || PROJECTS[0];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md glass-pill text-xs font-mono text-cyan-400 mb-3">
              <span>[ VERIFIED PRODUCTION & RESEARCH REPOSITORIES ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Engineering Work
            </h2>
            <p className="mt-2 text-slate-400 max-w-xl text-sm leading-relaxed">
              Real code, real repositories, and verified architectures. No placeholders or inflated statistics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl glass-pill bg-slate-900/60 border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('ml-ai')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                filter === 'ml-ai'
                  ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              AI & ML
            </button>
            <button
              onClick={() => setFilter('cloud-systems')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                filter === 'cloud-systems'
                  ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Privacy & Systems
            </button>
            <button
              onClick={() => setFilter('full-stack')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                filter === 'full-stack'
                  ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Full-Stack
            </button>
          </div>
        </div>

        {/* Featured Project Showcase (EvalForge) */}
        {filter === 'all' && (
          <div className="mb-12 glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-cyan-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FLAGSHIP SYSTEM • LLM BENCHMARK PLATFORM</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Status: {featuredProject.status}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="mt-1 text-sm font-mono text-cyan-300">
                  {featuredProject.tagline}
                </p>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Metrics Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.metrics.map((m, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {featuredProject.tags.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-xs hover:bg-cyan-300 transition-colors"
                  >
                    Architecture Deep Dive
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-button text-xs font-mono text-slate-300 hover:text-white"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    GitHub Repository
                  </a>
                </div>
              </div>

              {/* Terminal Architecture Box */}
              <div className="lg:col-span-5 glass-card rounded-2xl p-5 border border-white/10 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-slate-400">
                  <span>eval_pipeline_graph.ts</span>
                  <span className="text-cyan-400">FAITHFULNESS ENGINE</span>
                </div>
                <div className="space-y-2 text-[12px] leading-relaxed">
                  <div className="text-slate-500">// Quantitative Evaluation Engine</div>
                  <div>
                    <span className="text-purple-400">const</span> promptHarness = <span className="text-blue-400">new</span> PromptHarness({'{'}
                  </div>
                  <div className="pl-4 text-slate-400">
                    dataset: <span className="text-emerald-300">"adversarial_synthetic"</span>,
                  </div>
                  <div className="pl-4 text-slate-400">
                    metricEngines: [<span className="text-cyan-300">"ROUGE-L"</span>, <span className="text-cyan-300">"FactualConsistency"</span>],
                  </div>
                  <div className="pl-4 text-slate-400">
                    thresholdCutoff: <span className="text-amber-300">0.85</span>
                  </div>
                  <div>{'}'});</div>
                  <div className="mt-3 text-slate-500">// Multi-Model Parallel Evaluator</div>
                  <div className="text-cyan-400">
                    await promptHarness.runEvaluationMatrix();
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group border border-white/10 hover:border-cyan-500/30"
            >
              <div>
                {/* Header with status */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {project.category.toUpperCase()}
                  </span>
                  <span className="text-emerald-400 font-medium">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-cyan-400 line-clamp-1">
                  {project.tagline}
                </p>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key features pill list */}
                <div className="mt-4 space-y-1.5 border-t border-white/5 pt-3">
                  {project.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
                        title="Live Production Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl text-slate-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Case Study • {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {selectedProject.tagline}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-6 text-sm">
              
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-rose-400 rounded-full"></span>
                  The Problem
                </h4>
                <p className="text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-cyan-400 rounded-full"></span>
                  The Engineering Solution
                </h4>
                <p className="text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                  {selectedProject.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-emerald-400 rounded-full"></span>
                  Implemented Technical Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-indigo-400 rounded-full"></span>
                  Architecture & Engineering Challenges
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 font-mono">
                  {selectedProject.architectureNotes}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Verified Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs border border-white/10 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  View Source on GitHub
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-xs hover:bg-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open Live Deployment
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
