
import React, { useState } from 'react';
import { NAV_ITEMS, TEXT } from '../constants';
import { AppView } from '../types';
import { Lock, ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  isGuest?: boolean;
  currentPageTitle?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, isGuest = false, currentPageTitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const currentItem = NAV_ITEMS.find(item => item.id === currentView);
  const displayTitle = currentPageTitle || TEXT[currentItem?.labelKey as keyof typeof TEXT] || 'Home';

  const isPublicView = (viewId: string) => {
    return ['home', 'about', 'auth'].includes(viewId);
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed left-0 top-0 h-screen bg-[var(--bg)] border-r border-slate-500/10 flex flex-col items-start z-50 transition-all duration-300 ease-in-out ${
        isHovered ? 'w-64 shadow-2xl' : 'w-14 md:w-16'
      }`}
    >
      <div className="h-full w-full flex flex-col p-4 relative overflow-hidden">
        {/* Collapsed State */}
        {!isHovered && (
          <div className="absolute inset-0 flex flex-col items-center py-10 justify-between">
            <div className="font-serif text-3xl text-secondary tracking-tighter cursor-pointer" onClick={() => setView('home')}>A</div>
            <div className="mb-24 flex items-center justify-center">
              <span className="vertical-script text-[10px] uppercase tracking-widest opacity-30">
                {displayTitle}
              </span>
            </div>
            <ChevronRight size={14} className="opacity-20" />
          </div>
        )}

        {/* Expanded State */}
        {isHovered && (
          <div className="flex flex-col space-y-12 animate-in fade-in duration-300 w-full px-2 pt-4">
            <div className="pb-6 border-b border-slate-500/10 flex items-center gap-3">
              <span className="text-4xl font-serif text-secondary tracking-tighter cursor-pointer" onClick={() => setView('home')}>Anir</span>
            </div>
            
            <nav className="flex flex-row space-x-2 items-start justify-center h-[55vh] overflow-x-auto no-scrollbar">
              {NAV_ITEMS.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => setView(item.id as AppView)}
                  className={`vertical-script text-[10px] uppercase tracking-widest px-2 py-4 transition-all cursor-pointer border-t-2 text-left group flex flex-col items-center justify-between rounded-b-xl h-full ${
                    currentView === item.id 
                      ? 'border-primary text-primary bg-slate-500/5 font-bold' 
                      : 'border-transparent opacity-30 hover:opacity-100'
                  }`}
                >
                  <span className="pb-4">{TEXT[item.labelKey as keyof typeof TEXT]}</span>
                  {isGuest && !isPublicView(item.id) && (
                    <Lock size={10} className="opacity-20 group-hover:opacity-100" />
                  )}
                </button>
              ))}
            </nav>

            <div className="pt-10 border-t border-slate-500/10 px-4">
              <div className="text-[10px] font-bold opacity-30 uppercase tracking-widest mb-4">Байршил</div>
              <div className="vertical-script text-[10px] font-bold uppercase tracking-widest opacity-80">
                Монгол
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
