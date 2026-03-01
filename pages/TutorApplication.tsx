
import React from 'react';
import { Users, ExternalLink, Code, Shield, Star, Sparkles } from 'lucide-react';
import { User } from '../types';
import { TEXT } from '../constants';

interface TutorApplicationProps {
  user: User | null;
  onAuthClick: () => void;
}

const TutorApplication: React.FC<TutorApplicationProps> = ({ user, onAuthClick }) => {
  const servicePaths = [
    {
      id: 'mentor',
      title: 'Үе тэнгийн багш',
      icon: <Users size={32} />,
      description: '7-12-р ангийн сурагчдад сурлагын бэрхшээлийг даван туулахад нь тусална уу. Мэдлэг дамжуулах замаар нийгэмлэгийг байгуулна.',
      requirements: [
        'Subject Mastery',
        '2hr Weekly Commit',
        'Google Meet Sessions',
        'External Verification Interview'
      ],
      link: 'https://google.com'
    },
    {
      id: 'dev',
      title: 'Вэб хөгжүүлэгч дадлагажигч',
      icon: <Code size={32} />,
      description: 'Гүүрийг өргөжүүл. Бидэнд UI/UX дизайнер, хөгжүүлэгч, сургалтын хөтөлбөрийн зохицуулагч хэрэгтэй байна.',
      requirements: [
        'Technical Proficiency',
        'Project-Based Support',
        'External Coordination',
        'Ethical Tech Passion'
      ],
      link: 'https://google.com'
    }
  ];

  const handleExternalRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full space-y-24 animate-in fade-in duration-500 text-left pb-40 relative">
      <header className="space-y-8 border-b border-slate-500/10 pb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Sparkles size={20} />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Бидэнд хувь нэмрээ оруулна уу</span>
          </div>
          <h1 className="text-7xl font-serif text-primary tracking-tighter leading-none">{TEXT.volunteerTitle}</h1>
          <h2 className="text-5xl font-serif opacity-50 tracking-tight leading-none">{TEXT.volunteerSub}</h2>
        </div>
        <p className="text-muted text-sm font-bold uppercase tracking-[0.5em] leading-relaxed max-w-4xl">
          Анир бол оюутнуудын санаачилга юм. Монголын боловсролын ирээдүйг тодорхойлоход манай үндсэн ажилтнуудтай нэгдээрэй.
        </p>
      </header>

      <section className="bg-primary/5 p-12 md:p-20 rounded-[4rem] border border-primary/20 flex flex-col items-center text-center space-y-8 shadow-inner overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
        
        <div className="w-20 h-20 bg-primary text-white flex items-center justify-center rounded-[2rem] shadow-xl relative z-10">
          <Star size={36} fill="white" />
        </div>
        <div className="space-y-4 relative z-10">
          <h3 className="text-4xl md:text-6xl font-serif tracking-tight leading-none">
            Зуу зуугаараа нэгдээрэй.
          </h3>
          <p className="text-muted text-lg font-medium max-w-2xl mx-auto">
            Манай сүлжээ 21 аймгийн 200 гаруй идэвхтэй үе тэнгийн багш нараас бүрддэг. Гэрлээ хуваалцах дараагийн сурагч болоорой.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 relative">
        {servicePaths.map((path) => (
          <div key={path.id} className="group bg-white/5 border border-slate-500/10 p-12 md:p-16 space-y-12 flex flex-col justify-between hover:border-primary transition-all rounded-[4rem] shadow-xl relative overflow-hidden backdrop-blur-sm">
            <div className="space-y-10 relative z-10">
              <div className="w-20 h-20 bg-slate-900 text-primary flex items-center justify-center rounded-[2rem] transition-all group-hover:bg-primary group-hover:text-white">
                {path.icon}
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-serif tracking-tight leading-none">{path.title}</h2>
                <p className="text-muted text-lg font-medium tracking-tight leading-relaxed max-w-sm">{path.description}</p>
              </div>
            </div>
            <button onClick={() => handleExternalRedirect(path.link)} className="w-full py-6 mt-12 text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-6 rounded-full shadow-2xl transition-all relative z-10 bg-slate-900 text-white hover:bg-primary">
              Өргөдөл гаргах
              <ExternalLink size={16} />
            </button>
          </div>
        ))}
      </div>

      <section className="bg-slate-500/5 p-12 md:p-16 border border-slate-500/10 rounded-[5rem] flex flex-col md:flex-row items-center gap-16">
        <div className="w-24 h-24 bg-[var(--bg)] border-8 border-secondary rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-lg">
          <Shield size={40} className="text-secondary" />
        </div>
        <div className="space-y-6">
          <h4 className="text-3xl font-serif tracking-tight">Олон нийтийн хамгаалалт</h4>
          <p className="text-lg text-muted font-medium tracking-tight leading-relaxed max-w-4xl italic">
            Шударга байдал хамгийн чухал. Бүх зөвлөхүүд хэн болох, ур чадварын баталгаажуулалтад хамрагддаг.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TutorApplication;
