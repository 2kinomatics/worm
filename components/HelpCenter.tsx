
import React from 'react';
import { X, Shield, MessageCircle, Book, LifeBuoy } from 'lucide-react';

interface HelpCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpCenter: React.FC<HelpCenterProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className={`fixed right-0 top-0 h-screen w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} p-12 flex flex-col`}>
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <LifeBuoy className="text-[#7c9473]" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Support Center</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
            <X size={24} className="text-slate-400" />
          </button>
        </div>

        <div className="flex-1 space-y-12 overflow-y-auto no-scrollbar">
          <section className="space-y-6">
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">How can we help?</h3>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
              We want to make sure your learning journey is smooth and safe.
            </p>
          </section>

          <nav className="space-y-4">
            {[
              { icon: <Book size={18} />, title: "How to use EduGap", desc: "A quick guide for new students." },
              { icon: <Shield size={18} />, title: "Safety Rules", desc: "Our community guidelines." },
              { icon: <MessageCircle size={18} />, title: "Report a Problem", desc: "Is something not working?" },
            ].map((item, i) => (
              <button key={i} className="w-full p-8 border border-slate-50 hover:border-[#7c9473] transition-all text-left group rounded-2xl flex items-start gap-6">
                <div className="p-3 bg-slate-50 text-slate-400 group-hover:bg-[#7c9473] group-hover:text-white transition-colors rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-xs uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{item.desc}</p>
                </div>
              </button>
            ))}
          </nav>

          <div className="p-8 bg-[#f0f7f0] rounded-3xl border border-[#7c9473]/10">
            <div className="text-[9px] font-black text-[#7c9473] uppercase tracking-widest mb-2">Emergency?</div>
            <p className="text-[11px] font-bold text-slate-600 uppercase leading-relaxed">
              If you feel unsafe or need urgent help, please email us directly at <span className="text-[#7c9473] underline">safety@edugap.org</span>.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50">
          <button 
            onClick={onClose}
            className="w-full py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-[#7c9473] transition-all"
          >
            Back to Learning
          </button>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
