import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';
import { projects } from '../../data/content';

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <SectionReveal key={index} delay={index * 200}>
              <div className="group relative bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
                <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <a href={project.link} target='_blank' rel="noreferrer">
                      <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-semibold px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-500">
                        <span className="mr-2 text-cyan-500 mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <a href={project.git} target='_blank' rel="noreferrer">
                    <button className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors flex items-center justify-center gap-2 group-hover:bg-cyan-900/20 group-hover:text-cyan-300">
                        View Code <Github className="w-4 h-4" />
                    </button>
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}