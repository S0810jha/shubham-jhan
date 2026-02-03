import React from 'react';
import SectionReveal from '../ui/SectionReveal';
import { skills } from '../../data/content';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
            Technical <span className="text-cyan-400">Arsenal</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SectionReveal key={index} delay={index * 150}>
              <div className="h-full bg-slate-900/60 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300 group">
                <div className="mb-6 p-4 bg-slate-800/50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}