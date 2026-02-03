import React from 'react';
import { Github, Linkedin, Mail, BarChart2, ChevronDown } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';
import { scrollToSection } from '../../utils/scroll';

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <SectionReveal>
        <div className="inline-block px-4 py-1.5 mb-6 border border-cyan-500/30 rounded-full bg-cyan-900/10 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
          MERN Stack Developer
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
          Shubham <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Jhan</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Building scalable, user-friendly web applications with MongoDB, Express, React, and Node.js. 
          Passionate about clean code and modern UI design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all shadow-[0_0_20px_-5px_rgba(8,145,178,0.5)] hover:shadow-[0_0_30px_-5px_rgba(8,145,178,0.6)]"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 text-slate-300 transition-all"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-12 flex gap-6 justify-center">
          <a href="https://github.com/S0810jha" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200" title="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/shubhamjhan03/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200" title="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://codeforces.com/profile/shubham0310" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200" title="Codeforces">
            <BarChart2 className="w-6 h-6" />
          </a>
          <a href="mailto:shubhamjha03102003@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200" title="Email">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </SectionReveal>

      <div className="absolute bottom-10 animate-bounce text-slate-600">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}