
import React, { useState } from 'react';
import { Sparkles, X, Loader2, BookOpen, Target, ArrowRight } from 'lucide-react';
import { generateAILesson } from '../services/geminiService';

interface AISparkGuideProps {
  gradeLevel: string;
}

const AISparkGuide: React.FC<AISparkGuideProps> = ({ gradeLevel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    setLoading(true);
    const data = await generateAILesson(topic, gradeLevel);
    setResult(data);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-32 right-10 flex items-center gap-3 px-8 py-5 bg-primary text-white rounded-full shadow-2xl hover:scale-105 transition-all z-50 group"
      >
        <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">AI Сурагч</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
          
          <div className="bg-[var(--bg)] w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-[3.5rem] shadow-2xl relative flex flex-col animate-in fade-in zoom-in-95 duration-500 border border-slate-500/10">
            <header className="p-8 border-b border-slate-500/10 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-serif">Анир AI Сурагч</h2>
                  <p className="text-[8px] font-bold uppercase tracking-widest opacity-40">Хувийн сургалтын гүүр</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-3 hover:bg-slate-500/5 rounded-full transition-all">
                <X size={20} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-10 custom-scrollbar space-y-12">
              {!result && !loading && (
                <div className="max-w-xl mx-auto space-y-10 py-10">
                  <div className="text-center space-y-4">
                    <h3 className="text-4xl font-serif tracking-tight">Өнөөдөр та юу судалж байна вэ?</h3>
                    <p className="text-muted font-medium uppercase text-[10px] tracking-widest">Оношилгооны гарын авлага авахын тулд дурын сэдвийг бичнэ үү.</p>
                  </div>
                  <form onSubmit={handleGenerate} className="space-y-6">
                    <input 
                      type="text"
                      autoFocus
                      placeholder="ж.нь: Математик анализын уламжлал, фотосинтез, эсвэл Монголын эзэнт гүрэн..."
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full p-8 bg-slate-500/5 border border-slate-500/10 rounded-3xl outline-none focus:border-primary text-lg font-medium transition-all"
                    />
                    <button 
                      type="submit"
                      className="w-full py-6 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-xl"
                    >
                      Spark гарын авлага үүсгэх
                    </button>
                  </form>
                </div>
              )}

              {loading && (
                <div className="flex flex-col items-center justify-center py-32 space-y-8 animate-pulse">
                  <Loader2 size={48} className="text-primary animate-spin" />
                  <div className="text-center space-y-2">
                    <p className="text-xl font-serif">AI сурагчтай зөвлөлдөж байна...</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-30">Мэдлэгийн зөрүүг арилгах</p>
                  </div>
                </div>
              )}

              {result && !loading && (
                <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-primary">
                      <BookOpen size={18} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Үндсэн санаа</span>
                    </div>
                    <h3 className="text-5xl font-serif tracking-tighter text-primary">{result.title}</h3>
                    <p className="text-xl font-medium leading-relaxed opacity-70 italic">{result.summary}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div className="flex items-center gap-3 text-secondary">
                        <Target size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Суурь дутагдал</span>
                      </div>
                      <div className="space-y-4">
                        {result.gaps.map((gap: any, i: number) => (
                          <div key={i} className="bg-secondary/5 border border-secondary/10 p-6 rounded-2xl space-y-2">
                            <h4 className="font-bold text-secondary text-sm uppercase tracking-tight">{gap.concept}</h4>
                            <p className="text-xs opacity-60 font-medium leading-relaxed">{gap.why}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-center gap-3 text-primary">
                        <ArrowRight size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Гол алхмууд</span>
                      </div>
                      <div className="space-y-4">
                        {result.steps.map((step: string, i: number) => (
                          <div key={i} className="flex gap-4 items-start p-4 bg-slate-500/5 rounded-2xl">
                            <span className="text-primary font-bold text-sm">0{i+1}</span>
                            <p className="text-xs font-medium opacity-80 leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white p-12 rounded-[3rem] space-y-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-[100px]" />
                    <div className="space-y-4 relative z-10">
                      <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Хэрэгтэй арга</span>
                      <p className="text-2xl font-serif italic">{result.proTip}</p>
                    </div>
                    <div className="pt-8 border-t border-white/10 space-y-4 relative z-10">
                      <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">Үүнийг туршаад үзээрэй</span>
                      <p className="text-sm font-medium opacity-70 leading-relaxed">{result.practice}</p>
                    </div>
                  </div>

                  <div className="flex justify-center pt-8">
                    <button 
                      onClick={() => {setResult(null); setTopic('');}}
                      className="px-10 py-5 border border-slate-500/20 text-[10px] font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all rounded-full"
                    >
                      Өөр сэдэв судлах
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AISparkGuide;
