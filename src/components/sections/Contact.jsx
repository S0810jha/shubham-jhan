import React, { useState, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";
import SectionReveal from '../ui/SectionReveal';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'sending', 'success'
  const formRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC
      )
      .then(
        () => {
          setFormStatus("success");
          setTimeout(() => {
            setFormStatus("idle");
            e.target.reset();
          }, 3000);
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message");
          setFormStatus("idle");
        }
      );
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto max-w-4xl">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's <span className="text-cyan-400">Connect</span></h2>
            <p className="text-slate-400 text-lg">Looking for a dedicated MERN Stack developer? I'm open to opportunities.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 bg-slate-950/50 p-8 rounded-3xl border border-white/5 backdrop-blur-xl">
            {/* Contact Info */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full bg-slate-900 text-cyan-400 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-900/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-500 uppercase tracking-wider">Email</h4>
                  <a href="mailto:shubhamjha03102003@gmail.com" className="text-lg text-white hover:text-cyan-400 transition-colors break-all">
                    shubhamjha03102003@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full bg-slate-900 text-purple-400 group-hover:scale-110 transition-transform shadow-lg shadow-purple-900/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-500 uppercase tracking-wider">Phone</h4>
                  <p className="text-lg text-white">9027346760</p>
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <a href="https://github.com/S0810jha" target='_blank' rel="noreferrer" className="p-3 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/shubhamjhan03/" target='_blank' rel="noreferrer" className="p-3 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                  <Linkedin />
                </a>
              </div>
            </div>

            {/* Functional Contact Form */}
            <form ref={formRef} className="space-y-4" onSubmit={handleSendMessage}>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Name</label>
                <input required type="text" name='name' className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Email</label>
                <input required type="email" name='email' className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea required name='message' className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors h-32 resize-none" placeholder="Hello, I'd like to discuss a project..."></textarea>
              </div>
              
              <button 
                disabled={formStatus === 'sending' || formStatus === 'success'}
                className={`w-full py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                  formStatus === 'success' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white hover:opacity-90'
                }`}
              >
                {formStatus === 'idle' && (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
                {formStatus === 'sending' && (
                  <>
                    Sending... 
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    Message Sent! <CheckCircle className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}