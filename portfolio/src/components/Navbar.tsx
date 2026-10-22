import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-pill border border-white/10 bg-[#05070a]/80 shadow-2xl backdrop-blur-xl py-3 px-5 sm:px-6'
            : 'bg-transparent py-4 px-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400/60">
              MM
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-100 flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wide uppercase">
                {PERSONAL_INFO.role}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg text-slate-300 border border-white/10 hover:border-cyan-400/40 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-200"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-xs font-mono font-medium rounded-lg text-slate-300 bg-white/5 border border-white/10"
              >
                <span>View Verified Resume</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
