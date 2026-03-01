
import React, { useState, useEffect } from 'react';
import ProgressCalendar from '../components/ProgressCalendar';
import { MOCK_RESOURCES, TEXT } from '../constants';
import { User, UserProgress, Resource, SubjectCategory } from '../types';
import { ArrowRight, BookOpen, Users, Globe, Award, MapPin, Sparkles, Shield, Heart, CheckCircle } from 'lucide-react';

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
      title: "Монголын эрдэм шинжилгээний шилдэг",
      tag: TEXT.heroTag2
    },
    {
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2000&auto=format&fit=crop",
      title: "Мэдлэгийн зөрүүг арилгах",
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

      {/* Mini About Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <div className="lg:col-span-2 bg-white/5 border border-slate-500/10 p-12 md:p-16 rounded-[4rem] shadow-xl backdrop-blur-sm space-y-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3 text-primary">
              <Sparkles size={20} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Бидний тухай</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-slate-800 tracking-tighter leading-none">Анир гэж юу вэ?</h2>
            <p className="text-muted text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              Анир бол Монгол сурагчдын санаачилсан, сурагчдад зориулсан нээлттэй боловсролын гүүр юм. Бид мэдлэгийн зөрүүг арилгах, үе тэнгийнхний суралцах боломжийг тэгш хүртээмжтэй болгох зорилготой ажилладаг.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Үе тэнгийн зөвлөх</h4>
                <p className="text-sm text-muted font-medium">Ахлах ангийн сурагчид дүү нартаа хичээл зааж, туршлагаа хуваалцдаг.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Чанарын баталгаа</h4>
                <p className="text-sm text-muted font-medium">Бүх сургалтын материал болон зөвлөхүүд нарийн шалгуураар баталгааждаг.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 p-12 rounded-[4rem] shadow-xl flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
          <div className="space-y-6 relative z-10">
            <Heart size={40} className="text-primary" />
            <h3 className="text-4xl font-serif tracking-tight">Нийгэмлэгийн хүч</h3>
            <p className="text-sm opacity-60 font-medium leading-relaxed">
              Бид зөвхөн хичээл заадаггүй, бид бие биенээ дэмждэг ирээдүйн удирдагчдын нийгэмлэгийг цогцлоож байна.
            </p>
          </div>
          <button className="w-full py-5 bg-white text-slate-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all relative z-10">
            Бидэнтэй нэгдэх
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full space-y-12 py-10">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-serif text-slate-800 tracking-tight">Төслийн баг</h2>
          <p className="text-muted text-lg font-medium">Анир төслийг хэрэгжүүлж буй залуус</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Б. Тэмүүлэн", role: "Үүсгэн байгуулагч & Төслийн удирдагч" },
            { name: "А. Намуун", role: "Боловсролын хөтөлбөрийн менежер" },
            { name: "Г. Золбоо", role: "Технологи хариуцсан захирал" },
            { name: "Э. Мишээл", role: "Нийгэмлэгийн зохицуулагч" }
          ].map((member, i) => (
            <div key={i} className="bg-white border border-slate-500/10 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center space-y-4 group">
              <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <Users size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-800">{member.name}</h4>
                <p className="text-xs font-bold text-muted uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Rate Section - Part 1: Numbers and Words */}
      <section className="w-full space-y-12 py-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-secondary">
            <CheckCircle size={24} />
            <span className="text-[12px] font-bold uppercase tracking-[0.5em]">Бидний амжилт</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-slate-800 tracking-tighter leading-none">Боловсролын тэгш хүртээмжийг хамтдаа</h2>
          <p className="text-muted text-xl font-medium leading-relaxed">
            Анир төсөл нь Монгол орны өнцөг булан бүрт буй сурагчдад чанартай боловсрол, үе тэнгийнхний дэмжлэгийг хүргэхээр зорин ажиллаж байна. Бидний хамтын зүтгэл дараах үр дүнд хүрлээ.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Users size={32} />, value: "12,400+", label: "Идэвхтэй сурагчид", color: "text-primary" },
            { icon: <Globe size={32} />, value: "21 Аймаг", label: "Бүс нутгийн хамрах хүрээ", color: "text-secondary" },
            { icon: <BookOpen size={32} />, value: "450+", label: "Сургалтын модулиуд", color: "text-primary" },
            { icon: <Award size={32} />, value: "89%", label: "Амжилтын хувь", color: "text-secondary" }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-slate-500/10 p-10 rounded-[3rem] shadow-sm hover:shadow-md transition-all text-center space-y-4">
              <div className={`p-5 bg-slate-50 w-fit rounded-2xl mx-auto ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-5xl font-serif text-slate-800">{stat.value}</div>
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Rate Section - Part 2: Dual Maps */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full items-stretch">
        <div className="bg-white p-8 rounded-[3rem] border border-slate-500/10 shadow-sm space-y-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Монгол улс</span>
            <h4 className="text-2xl font-serif text-slate-800 tracking-tight">21 Аймаг</h4>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden border border-slate-100">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mongolia_provinces_map.png/800px-Mongolia_provinces_map.png" 
              alt="Mongolia Map" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="bg-white p-8 rounded-[3rem] border border-slate-500/10 shadow-sm space-y-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Улаанбаатар хот</span>
            <h4 className="text-2xl font-serif text-slate-800 tracking-tight">9 Дүүрэг</h4>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden border border-slate-100">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ulaanbaatar_districts.png/800px-Ulaanbaatar_districts.png" 
              alt="Ulaanbaatar Map" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col xl:flex-row gap-16 items-start w-full">
        <div className="flex-1 space-y-20 w-full">
          <section className="space-y-10">
            <div className="flex justify-between items-end border-b border-slate-500/10 pb-6">
              <h2 className="text-5xl font-serif text-secondary tracking-tight">Сургалтын төв</h2>
              <button 
                onClick={() => onNavigateToSubject('All' as any)}
                className="text-primary text-sm font-bold uppercase tracking-widest hover:underline mb-2"
              >
                Номын сан үзэх
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
          
          <div className="bg-slate-900 p-12 space-y-10 rounded-[4rem] shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent"></div>
            <div className="space-y-4 relative z-10">
              <h3 className="text-4xl font-serif text-white">Үе тэнгийн сүлжээ</h3>
              <p className="text-sm text-white/60 font-medium leading-relaxed">
                Баталгаажсан сурагчидтай Google Meet-ээр холбогдоорой.
              </p>
            </div>
            <button className="w-full py-6 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-secondary transition-all relative z-10 shadow-2xl">
              Зөвлөгөө авах хүсэлт
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
