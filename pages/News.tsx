
import React, { useState } from 'react';
import { MOCK_JOURNALS, TEXT } from '../constants';
import { JournalEntry, User } from '../types';
import { Heart, PenTool, Lock } from 'lucide-react';

interface NewsProps {
  user: User | null;
  onAuthClick: () => void;
}

const News: React.FC<NewsProps> = ({ user, onAuthClick }) => {
  const [journals, setJournals] = useState<JournalEntry[]>(MOCK_JOURNALS);

  const handleLike = (id: string) => {
    if (!user) { onAuthClick(); return; }
    setJournals(prev => prev.map(j => j.id === id ? { ...j, likes: j.likes + 1 } : j));
  };

  return (
    <div className="w-full space-y-16 animate-in fade-in duration-500 text-left pb-24 relative">
      <header className="space-y-4 border-b border-slate-500/10 pb-12">
        <h1 className="text-6xl font-serif text-primary tracking-tight">{TEXT.newsTitle}</h1>
        <p className="text-muted font-medium max-w-4xl">{TEXT.newsSub}</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-start w-full">
        <div className="xl:col-span-7 space-y-12 w-full">
          {journals.map((item) => (
            <article key={item.id} className="bg-white/5 p-10 md:p-14 border border-slate-500/10 hover:border-primary transition-all rounded-[3rem] shadow-sm group backdrop-blur-sm cursor-pointer">
              <h3 className="text-4xl font-serif leading-tight mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="opacity-70 font-medium leading-relaxed text-lg mb-10 line-clamp-3">{item.content}</p>
              <div className="flex items-center gap-8 pt-8 border-t border-slate-500/10">
                <button onClick={() => handleLike(item.id)} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:text-red-500">
                  <Heart size={18} /> <span>{item.likes} Likes</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="xl:col-span-5 space-y-8 bg-white/5 border border-slate-500/10 p-10 xl:sticky xl:top-32 rounded-[3rem] shadow-sm backdrop-blur-md w-full">
          <div className="flex items-center gap-4 border-b border-slate-500/10 pb-6"><PenTool size={24} className="text-primary" /><h2 className="text-3xl font-serif">Publish</h2></div>
          {!user ? (
            <div className="p-10 bg-slate-500/5 rounded-[2rem] border border-dashed border-slate-500/20 text-center space-y-4">
              <Lock size={24} className="mx-auto opacity-20" />
              <button onClick={onAuthClick} className="w-full py-3 bg-primary text-white rounded-xl text-[10px] font-bold uppercase tracking-widest">{TEXT.joinButton}</button>
            </div>
          ) : (
            <p className="text-sm opacity-60 font-medium leading-relaxed">Publishing is open for verified scholars.</p>
          )}
        </aside>
      </div>
    </div>
  );
};

export default News;
