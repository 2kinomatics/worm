
import React from 'react';
import { Star, Users } from 'lucide-react';
import { TEXT } from '../constants';

const About: React.FC = () => {
  const timeline = [
    { year: "Late 2023", milestone: "The Vision", detail: "A collective of educators aimed to bridge educational gaps through peer connection." },
    { year: "Today", milestone: "Evolution", detail: "Refining the bridge with AI diagnostics and community verification." },
  ];

  return (
    <div className="w-full space-y-32 animate-in fade-in duration-500 text-left pb-40">
      <header className="space-y-6 border-b border-slate-100 pb-16">
        <h1 className="text-8xl font-serif text-secondary tracking-tighter leading-none">{TEXT.aboutStory}</h1>
        <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.5em] leading-relaxed max-w-4xl">{TEXT.aboutSub}</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-24 w-full">
        <div className="xl:col-span-7 space-y-20 w-full">
          <section className="space-y-10">
            <h2 className="text-4xl font-serif tracking-tight flex items-center gap-4">Mission <Star size={24} className="text-primary" /></h2>
            <div className="p-16 bg-slate-900 text-white relative rounded-[4rem] shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent"></div>
              <p className="text-3xl font-serif leading-relaxed tracking-tight relative z-10">{TEXT.missionTitle}</p>
            </div>
          </section>
        </div>
        <aside className="xl:col-span-5 space-y-16 w-full">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif tracking-tight flex items-center gap-4">Timeline <Users size={24} className="text-primary" /></h2>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="group p-10 bg-white border border-slate-50 hover:border-secondary transition-all rounded-[2.5rem] shadow-sm">
                  <div className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-2">{item.year}</div>
                  <h3 className="text-3xl font-serif tracking-tight leading-none">{item.milestone}</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4 italic">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default About;
