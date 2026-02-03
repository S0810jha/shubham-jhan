import React from 'react';
import SectionReveal from '../ui/SectionReveal';
import profileimg from '../../assets/shubham.jpg'
// import { Cpu } from 'lucide-react'; // Uncomment if using the icon fallback

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900/50 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-3xl">
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About <span className="text-purple-400">Me</span></h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                I am a self-driven <strong className="text-slate-200">MERN Stack Developer</strong> currently pursuing my BCA from Maharshi Dayanand University (2026).
                I specialize in building responsive, user-friendly web applications using the modern JavaScript ecosystem.
              </p>
              <p className="text-slate-400 leading-relaxed">
                With a strong foundation in <strong className="text-slate-200">REST APIs, Authentication, and MVC architecture</strong>, 
                I enjoy solving complex problems and optimizing code for performance. Whether it's designing a sleek UI with Tailwind 
                or structuring a scalable backend with Node.js, I am passionate about every layer of development.
              </p>
            </div>

            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-65 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-70"></div>
                  <img src={profileimg} className="absolute inset-0 bg-slate-800 border border-white/10 rounded-2xl flex items-center justify-center  group-hover:-rotate-6 transition-transform duration-500 z-10" alt="Shubham Jhan" />
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}