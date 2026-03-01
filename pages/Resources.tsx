
import React, { useState, useEffect } from 'react';
import { MOCK_RESOURCES, TEXT } from '../constants';
import { SubjectCategory, User } from '../types';
import { Search, ArrowRight, HelpCircle, FileText, BookOpen, Lock, Tag, Sparkles } from 'lucide-react';
import AISparkGuide from '../components/AISparkGuide';

interface ResourcesProps {
  user: User | null;
  onAuthClick: () => void;
  initialCategory?: SubjectCategory | 'All';
  gradeLevel?: string;
}

const Resources: React.FC<ResourcesProps> = ({ user, onAuthClick, initialCategory = 'All' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleResourceClick = (resource: any) => {
    if (!user) {
      onAuthClick();
      return;
    }
    console.log("Opening resource", resource.title);
  };

  const filteredResources = MOCK_RESOURCES.filter(r => {
    const matchesCategory = selectedCategory === 'All' || r.subject === selectedCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.subTopic?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['Бүгд', 'Algebra 1', 'Geometry', 'Calculus', 'Inorganic Chemistry', 'Organic Chemistry', 'Biology', 'World History', 'Classical Literature'];
  
  return (
    <div className="space-y-12 animate-in fade-in duration-500 w-full text-left pb-32 relative">
      <AISparkGuide gradeLevel={user?.gradeLevel || 'Grade 10'} />

      <header className="space-y-6 border-b border-slate-500/10 pb-12 w-full">
        <div className="flex items-center gap-3 text-secondary">
          <BookOpen size={20} />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Нээлттэй мэдлэгийн сан</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-serif text-primary tracking-tighter leading-none">{TEXT.libraryTitle}</h1>
            <p className="text-muted font-medium max-w-4xl text-lg">{TEXT.librarySub}</p>
          </div>
          <div className="bg-primary/5 p-4 rounded-2xl flex items-center gap-4 border border-primary/10">
            <div className="p-2 bg-primary text-white rounded-lg shadow-md"><Sparkles size={16} /></div>
            <p className="text-[10px] font-bold uppercase tracking-widest pr-4">AI Spark хөтөч идэвхтэй байна</p>
          </div>
        </div>
        
        <div className="relative w-full pt-8">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-30 mt-4" size={20} />
          <input 
            type="text"
            placeholder={TEXT.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-16 pr-6 py-6 bg-slate-500/5 border border-slate-500/10 rounded-[2rem] outline-none focus:border-primary transition-all font-medium text-lg shadow-inner"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-16 w-full">
        <aside className="space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.5em] px-2">Анхаарах хэсэг</span>
            <div className="flex flex-wrap md:flex-col gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-5 text-xs font-bold text-left transition-all rounded-2xl border ${
                    selectedCategory === cat 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-2xl -translate-y-1' 
                      : 'bg-white/5 border border-slate-500/10 opacity-60 hover:opacity-100 hover:border-primary hover:bg-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 p-10 rounded-[3rem] border border-primary/10 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em]">Тусламж хэрэгтэй юу?</h4>
            <p className="text-xs font-medium opacity-60 leading-relaxed">
              Хэрэв та тодорхой эх сурвалж олж чадахгүй бол манай үе тэнгийн зөвлөгчид түүнийг олоход эсвэл шинэ хураангуй гаргахад туслах болно.
            </p>
            <button className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
              Үе тэнгийнхэнтэйгээ ярилцах <ArrowRight size={14} />
            </button>
          </div>
        </aside>

        <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {filteredResources.map(resource => (
            <div 
              key={resource.id} 
              onClick={() => handleResourceClick(resource)}
              className="bg-white/5 border border-slate-500/10 p-10 rounded-[3.5rem] transition-all group shadow-sm flex flex-col justify-between backdrop-blur-sm hover:border-primary cursor-pointer hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className={`px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest bg-slate-900 text-white group-hover:bg-primary transition-colors`}>
                    {resource.subject}
                  </div>
                  <div className="opacity-20 group-hover:opacity-100 transition-opacity p-2 bg-slate-500/10 rounded-xl">
                    {resource.type === 'Quiz' ? <HelpCircle size={18} /> : <FileText size={18} />}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-4xl font-serif group-hover:text-primary transition-colors leading-[1.1] tracking-tight">{resource.title}</h3>
                  {resource.subTopic && (
                    <div className="flex items-center gap-2 text-primary/60">
                      <Tag size={12} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{resource.subTopic}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold opacity-40 uppercase tracking-widest">
                   <span>{resource.level}</span>
                   <span className="w-1.5 h-1.5 bg-primary/20 rounded-full"></span>
                   <span>{resource.duration}</span>
                </div>
              </div>
              <div className="w-full mt-12 py-5 flex items-center justify-center gap-4 text-[10px] font-bold text-primary border-2 border-primary/10 uppercase tracking-[0.3em] group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all rounded-full shadow-lg">
                {!user && <Lock size={12} />} Модулийг нээх <ArrowRight size={16} />
              </div>
            </div>
          ))}
          {filteredResources.length === 0 && (
            <div className="col-span-full py-40 text-center space-y-8 border-2 border-dashed border-slate-500/10 rounded-[4rem]">
              <Search size={64} className="mx-auto opacity-10" />
              <div className="space-y-2">
                <p className="text-lg font-serif opacity-30">Таны хайлтад тохирох эх сурвалж олдсонгүй.</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Үүний оронд ерөнхий сэдэв хайж үзээрэй.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
