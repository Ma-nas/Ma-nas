import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 relative selection:bg-cyan-500/20 selection:text-white">
      {/* Ambient background mesh & subtle grid */}
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0"></div>

      {/* Primary Application Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
