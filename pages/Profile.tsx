
import React from 'react';
import { MOCK_RESOURCES, TEXT } from '../constants';
import { User, UserProgress } from '../types';
import { CheckCircle, Clock, Trophy, Flame, Lock, ArrowRight } from 'lucide-react';

interface ProfileProps {
  user: User | null;
  progress: UserProgress;
  onAuthClick: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, progress, onAuthClick }) => {
  const completedResources = MOCK_RESOURCES.filter(r => r.progress === 100);
  
  const stats = [
    { label: 'Дууссан хичээлүүд', value: user ? completedResources.length : '—', icon: <CheckCircle size={18} /> },
    { label: 'Өдрийн дараалал', value: user ? '5 өдөр' : '—', icon: <Flame size={18} /> },
    { label: 'Суралцах оноо', value: user ? '1,250' : '—', icon: <Trophy size={18} /> },
    { label: 'Суралцсан хугацаа', value: user ? '14.5ц' : '—', icon: <Clock size={18} /> },
  ];

  return (
    <div className="w-full space-y-16 animate-in fade-in duration-500 text-left pb-24 relative">
      <header className={`w-full flex flex-col xl:flex-row gap-12 items-start border-b border-slate-500/10 pb-12 transition-all ${!user ? 'blur-sm opacity-50' : ''}`}>
        <div className="w-44 h-44 rounded-[2rem] overflow-hidden border-4 border-slate-900 p-1 shadow-xl backdrop-blur-sm bg-slate-500/10">
          <img src={user ? `https://picsum.photos/seed/${user.id}/400` : `https://images.unsplash.com/photo-1544391682-1fa0d4638708?q=80&w=400&auto=format&fit=crop`} alt="Profile" className="w-full h-full object-cover rounded-[1.8rem] opacity-80" />
        </div>
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-serif tracking-tight">{user ? user.name : 'Ирээдүйн сурагч'}</h1>
            <p className="opacity-40 text-sm font-bold uppercase tracking-widest">{TEXT.profileSub}</p>
          </div>
        </div>
      </header>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full transition-all ${!user ? 'blur-sm grayscale opacity-30' : ''}`}>
        {stats.map((stat, idx) => (
          <div key={idx} className="p-10 bg-white/5 border border-slate-500/10 hover:border-primary transition-all flex flex-col justify-between h-44 rounded-[2.5rem] shadow-sm backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest">{stat.label}</span>
              <div className="text-primary">{stat.icon}</div>
            </div>
            <div className="text-5xl font-serif tracking-tight">{stat.value}</div>
          </div>
        ))}
      </div>

      {!user && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center pointer-events-none">
          <div className="bg-[var(--bg)]/95 backdrop-blur-md p-14 rounded-[4rem] shadow-2xl border border-primary/20 flex flex-col items-center space-y-8 pointer-events-auto animate-in fade-in zoom-in-95 duration-700 max-w-sm">
            <Lock size={36} className="text-primary" />
            <div className="space-y-4">
              <h3 className="text-4xl font-serif tracking-tight leading-none">{TEXT.profileTitle}</h3>
              <p className="text-muted font-medium text-[10px] leading-relaxed uppercase tracking-tight">Статистикийг харахын тулд нэвтрэх шаардлагатай.</p>
            </div>
            <button onClick={onAuthClick} className="px-14 py-6 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-xl flex items-center gap-4">
              {TEXT.joinButton} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
