
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-20 relative overflow-hidden">
      {/* Terrain Graphic */}
      <div className="w-full h-32 relative -mb-1">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Subtle Sun */}
          <g transform="translate(1300, 40)">
            <circle cx="0" cy="0" r="25" fill="#ea580c" opacity="0.3" />
          </g>

          <path 
            d="M0,120 L1440,120 L1440,60 C1200,80 1100,20 900,100 C700,40 500,90 300,60 L0,80 Z" 
            fill="#064e3b"
          ></path>
        </svg>
      </div>

      <div className="bg-[#064e3b] text-slate-300 py-24 px-6 md:px-12 lg:px-20 w-full text-left">
        <div className="w-full space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            
            <div className="space-y-8">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] border-l-2 border-[#ea580c] pl-4">
                About Anir
              </h3>
              <p className="text-sm leading-relaxed font-medium text-slate-300/80 mb-4">
                A community-driven bridge ensuring every Mongolian scholar has the resources and mentorship required to thrive.
              </p>
              <div className="space-y-1">
                <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Architects:</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">The Anir Collective</div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] border-l-2 border-[#ea580c] pl-4">
                Core Values
              </h3>
              <ul className="text-xs space-y-4 font-black uppercase tracking-[0.2em]">
                <li className="hover:text-white transition-colors cursor-default">01. Peer Wisdom</li>
                <li className="hover:text-white transition-colors cursor-default">02. Verified Virtue</li>
                <li className="hover:text-white transition-colors cursor-default">03. Steppe Access</li>
                <li className="hover:text-white transition-colors cursor-default">04. Open Curiosity</li>
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] border-l-2 border-[#ea580c] pl-4">
                Connectivity
              </h3>
              <div className="text-xs space-y-4 font-bold uppercase tracking-widest">
                <div className="text-slate-500 text-[10px]">Headquarters:</div>
                <div>Ulaanbaatar, MN</div>
                <div className="pt-4 text-slate-500 text-[10px]">Registry Status:</div>
                <div className="text-[#ea580c] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></div>
                  Operational
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] border-l-2 border-[#ea580c] pl-4">
                Legal
              </h3>
              <div className="text-[10px] space-y-4 font-black uppercase tracking-[0.3em] text-slate-400">
                <div className="hover:text-white cursor-pointer transition-colors underline decoration-slate-700 underline-offset-8">Data Privacy</div>
                <div className="hover:text-white cursor-pointer transition-colors underline decoration-slate-700 underline-offset-8">Mentor Standards</div>
                <div className="hover:text-white cursor-pointer transition-colors underline decoration-slate-700 underline-offset-8">Open License</div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="flex items-center gap-6">
              <span className="text-5xl font-header text-white tracking-tighter uppercase">Anir</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">© 2025 Scholar Bridge MN</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500">
              [ Knowledge is Peer to Peer ]
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
