
import React, { useState, useEffect } from 'react';
import ProgressCalendar from '../components/ProgressCalendar';
import { MOCK_RESOURCES, TEXT } from '../constants';
import { User, UserProgress, Resource, SubjectCategory } from '../types';
import { ArrowRight, BookOpen, Users, Globe, Award, MapPin } from 'lucide-react';

interface HomeProps {
  user: User;
  progress: UserProgress;
  onNavigateToSubject: (subject: SubjectCategory) => void;
}

const Home: React.FC<HomeProps> = ({ user, progress, onNavigateToSubject }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
      title: TEXT.heroSubtitle,
      tag: TEXT.heroTag1
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop",
      title: "Mongolian Academic Excellence",
      tag: TEXT.heroTag2
    },
    {
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2000&auto=format&fit=crop",
      title: "Bridging the Knowledge Gap",
      tag: TEXT.heroTag3
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const groupedResources = MOCK_RESOURCES.filter(r => r.progress > 0).reduce((acc, resource) => {
    if (!acc[resource.subject]) acc[resource.subject] = [];
    acc[resource.subject].push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full pb-20">
      
      <section className="relative h-[450px] md:h-[600px] w-full rounded-[3.5rem] overflow-hidden group shadow-2xl">
        {slides.map((slide, i) => (
          <div 
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === slideIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} className="w-full h-full object-cover slideshow-zoom" alt="Classroom" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-12 left-8 md:left-16 space-y-4">
              <span className="bg-primary text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">{slide.tag}</span>
              <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tight leading-none">{TEXT.heroTitle}</h2>
              <p className="text-white/80 text-lg md:text-2xl font-medium max-w-2xl">{slide.title}</p>
            </div>
          </div>
        ))}
        <div className="absolute bottom-10 right-16 flex gap-3">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 transition-all duration-300 rounded-full ${i === slideIndex ? 'w-10 bg-primary' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      <section className="w-full text-center space-y-6 py-10">
        <h3 className="text-4xl md:text-5xl font-serif italic opacity-90">"{TEXT.missionTitle}"</h3>
        <p className="text-muted text-xl font-medium leading-relaxed uppercase tracking-tight max-w-6xl mx-auto">
          {TEXT.missionDesc}
        </p>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center bg-slate-500/5 p-10 md:p-20 rounded-[4.5rem] border border-slate-500/10 w-full">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-6xl font-serif text-secondary tracking-tight">{TEXT.impactTitle}</h2>
            <p className="text-muted text-xl font-medium">{TEXT.impactSub}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-2 group">
              <div className="p-5 bg-[var(--bg)] w-fit rounded-2xl shadow-sm text-primary group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <div className="text-5xl font-serif">12,400+</div>
              <div className="text-xs font-bold text-muted uppercase tracking-widest">Active Scholars</div>
            </div>
            <div className="space-y-2 group">
              <div className="p-5 bg-[var(--bg)] w-fit rounded-2xl shadow-sm text-secondary group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <div className="text-5xl font-serif">21 Aimags</div>
              <div className="text-xs font-bold text-muted uppercase tracking-widest">Region Coverage</div>
            </div>
            <div className="space-y-2 group">
              <div className="p-5 bg-[var(--bg)] w-fit rounded-2xl shadow-sm text-primary group-hover:scale-110 transition-transform">
                <BookOpen size={32} />
              </div>
              <div className="text-5xl font-serif">450+</div>
              <div className="text-xs font-bold text-muted uppercase tracking-widest">Resource Modules</div>
            </div>
            <div className="space-y-2 group">
              <div className="p-5 bg-[var(--bg)] w-fit rounded-2xl shadow-sm text-secondary group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <div className="text-5xl font-serif">89%</div>
              <div className="text-xs font-bold text-muted uppercase tracking-widest">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="relative bg-[var(--bg)] p-12 rounded-[4rem] shadow-xl border border-slate-500/5 flex items-center justify-center min-h-[450px]">
          <div className="absolute top-10 left-10 flex items-center gap-2">
            <MapPin size={20} className="text-primary" />
            <span className="text-xs font-bold text-muted uppercase tracking-widest">National Coverage</span>
          </div>
          <svg viewBox="0 0 800 450" className="w-full h-auto drop-shadow-lg opacity-80">
            <path 
              d="M50,150 L100,100 L250,80 L400,100 L600,80 L750,120 L750,300 L600,350 L400,320 L250,380 L100,350 L50,300 Z" 
              fill="currentColor" 
              className="text-slate-500/10"
              stroke="currentColor" 
              strokeWidth="2"
            />
            <circle cx="450" cy="200" r="12" fill="var(--secondary)" opacity="0.4" className="animate-pulse" />
            <circle cx="450" cy="200" r="5" fill="var(--secondary)" />
            <circle cx="200" cy="150" r="10" fill="var(--primary)" opacity="0.3" />
            <circle cx="200" cy="150" r="4" fill="var(--primary)" />
            <circle cx="650" cy="250" r="8" fill="var(--secondary)" opacity="0.3" />
            <circle cx="650" cy="250" r="4" fill="var(--secondary)" />
            <circle cx="150" cy="300" r="8" fill="var(--primary)" opacity="0.3" />
            <circle cx="150" cy="300" r="4" fill="var(--primary)" />
          </svg>
        </div>
      </section>

      <div className="flex flex-col xl:flex-row gap-16 items-start w-full">
        <div className="flex-1 space-y-20 w-full">
          <section className="space-y-10">
            <div className="flex justify-between items-end border-b border-slate-500/10 pb-6">
              <h2 className="text-5xl font-serif text-secondary tracking-tight">Study Center</h2>
              <button 
                onClick={() => onNavigateToSubject('All' as any)}
                className="text-primary text-sm font-bold uppercase tracking-widest hover:underline mb-2"
              >
                View Library
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {Object.entries(groupedResources).map(([subject, resources]) => (
                <div key={subject} className="space-y-8">
                  <h4 className="text-[11px] font-bold text-muted uppercase tracking-widest pl-3 border-l-4 border-primary">
                    {subject}
                  </h4>
                  <div className="space-y-4">
                    {resources.map(resource => (
                      <div 
                        key={resource.id} 
                        onClick={() => onNavigateToSubject(resource.subject)}
                        className="bg-white/5 border border-slate-500/10 p-8 rounded-3xl flex items-center justify-between hover:border-primary transition-all cursor-pointer group shadow-sm backdrop-blur-sm"
                      >
                        <div>
                          <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{resource.title}</h4>
                          <div className="flex items-center gap-4 text-xs opacity-50 mt-2 font-medium">
                            <span>{resource.type}</span>
                            <span className="w-1.5 h-1.5 bg-slate-500/20 rounded-full"></span>
                            <span>{resource.duration}</span>
                          </div>
                        </div>
                        <ArrowRight size={20} className="opacity-20 group-hover:text-primary group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="w-full xl:w-[420px] shrink-0 space-y-12 xl:sticky xl:top-32">
          <ProgressCalendar completedDates={progress.completedDates} />
          
          
        </aside>
      </div>
    </div>
  );
};

export default Home;
