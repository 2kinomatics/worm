
import React, { useState, useEffect } from 'react';
import { DAILY_WORDS } from '../constants';

interface WordData {
  word: string;
  translation: string;
  language: string;
  pronunciation: string;
  sentence: string;
}

const WordOfTheDay: React.FC = () => {
  const [data, setData] = useState<WordData | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const getDayWord = () => {
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    const index = dayOfYear % DAILY_WORDS.length;
    setData(DAILY_WORDS[index]);
  };

  useEffect(() => {
    getDayWord();
  }, []);

  if (!isVisible) return (
    <button 
      onClick={() => setIsVisible(true)}
      className="fixed bottom-10 right-10 px-8 py-4 bg-secondary text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-primary transition-all z-50 shadow-2xl rounded-full"
    >
      Discovery
    </button>
  );

  return (
    <div className="fixed bottom-10 right-10 w-96 bg-[var(--bg)] border border-slate-500/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-50 animate-in slide-in-from-bottom-6 duration-500 rounded-[3rem] overflow-hidden backdrop-blur-xl">
      <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Scholar Daily Word</span>
        <button onClick={() => setIsVisible(false)} className="text-[10px] font-bold uppercase opacity-60 hover:opacity-100 transition-opacity">
          Dismiss
        </button>
      </div>
      <div className="p-12 flex gap-10 text-left items-stretch">
        <div className="shrink-0 flex items-center justify-center border-r border-slate-500/10 pr-8">
          <h4 className="vertical-script text-5xl font-bold tracking-tighter uppercase leading-none opacity-80">
            {data?.word || '...'}
          </h4>
        </div>
        <div className="flex-1 flex flex-col justify-between py-2">
          <div className="space-y-8">
            <div>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em]">{data?.language} Origin</span>
              <p className="text-[10px] font-bold opacity-30 italic mt-2 uppercase tracking-widest">Pronunciation: {data?.pronunciation}</p>
            </div>
            <div className="space-y-6">
              <div className="text-xl font-serif uppercase tracking-tight leading-tight">
                Meaning: <span className="text-primary">{data?.translation}</span>
              </div>
              <p className="text-[11px] opacity-60 leading-relaxed font-medium uppercase tracking-tight border-l-4 border-primary/20 pl-4 italic">
                "{data?.sentence}"
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-500/10">
             <div className="text-[8px] font-bold opacity-30 uppercase tracking-[0.4em]">Daily insight for Anir scholars</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOfTheDay;
