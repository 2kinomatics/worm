
import React, { useState } from 'react';
import { ShieldCheck, Heart, User as UserIcon, Phone } from 'lucide-react';
import { GradeLevel, User } from '../types';
import { TEXT } from '../constants';

interface TutorMatchProps {
  user: User | null;
  onAuthClick: () => void;
}

const TutorMatch: React.FC<TutorMatchProps> = ({ user, onAuthClick }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestContact, setGuestContact] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="w-full py-24 text-left animate-in fade-in duration-500">
        <div className="max-w-3xl space-y-8 border-l-8 border-primary pl-12">
          <h1 className="text-5xl font-serif tracking-tight">
            Request Sent!
          </h1>
          <div className="bg-slate-900 p-10 text-white rounded-3xl space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Status: Seeking Verified Match</div>
            <p className="text-sm font-medium uppercase tracking-widest leading-relaxed">
              Hello {user?.name || guestName || 'Scholar'}, our coordinators are reviewing your session request.
            </p>
          </div>
          <button onClick={() => {setSubmitted(false); setGuestName(''); setGuestContact('');}} className="border-b-2 border-slate-900 font-bold text-xs uppercase tracking-widest hover:text-primary hover:border-primary transition-all">
            New Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-16 animate-in fade-in duration-500 text-left pb-24 relative">
      <header className="space-y-4 border-b border-slate-500/10 pb-10">
        <h1 className="text-6xl font-serif text-primary tracking-tight">{TEXT.matchTitle}</h1>
        <p className="text-muted text-sm font-medium max-w-2xl">{TEXT.matchSub}</p>
      </header>

      <div className="max-w-full space-y-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/5 border border-primary/10 p-10 flex gap-8 items-start rounded-[2.5rem] backdrop-blur-sm">
            <div className="p-4 bg-slate-900 text-white rounded-2xl shrink-0 shadow-lg"><ShieldCheck size={24} /></div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-widest opacity-80">Safe Network</h4>
              <p className="text-xs opacity-50 font-medium uppercase tracking-tight leading-relaxed">External Google Meet sessions ensure identity security.</p>
            </div>
          </div>
          <div className="bg-slate-500/5 border border-slate-500/10 p-10 flex gap-8 items-start rounded-[2.5rem] backdrop-blur-sm">
            <div className="p-4 bg-primary text-white rounded-2xl shrink-0 shadow-lg"><Heart size={24} /></div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-widest opacity-80">Kind Experts</h4>
              <p className="text-xs opacity-50 font-medium uppercase tracking-tight leading-relaxed">Our mentors are vetted for subject mastery and empathy.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 transition-all w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {!user && (
              <>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold opacity-30 uppercase tracking-widest pl-2">Name</label>
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20" size={18} />
                    <input type="text" required value={guestName} onChange={(e) => setGuestName(e.target.value)} className="w-full pl-12 pr-6 py-4 bg-white/5 border border-slate-500/10 outline-none focus:border-primary text-sm font-medium rounded-xl" placeholder="E.g. Bat-Erdene" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold opacity-30 uppercase tracking-widest pl-2">Contact</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20" size={18} />
                    <input type="text" required value={guestContact} onChange={(e) => setGuestContact(e.target.value)} className="w-full pl-12 pr-6 py-4 bg-white/5 border border-slate-500/10 outline-none focus:border-primary text-sm font-medium rounded-xl" placeholder="Phone or email..." />
                  </div>
                </div>
              </>
            )}
            <div className="space-y-2">
              <label className="text-[10px] font-bold opacity-30 uppercase tracking-widest pl-2">Subject</label>
              <input type="text" required className="w-full p-5 bg-white/5 border border-slate-500/10 outline-none focus:border-primary text-sm font-bold uppercase rounded-xl" placeholder="E.G. ALGEBRA 1, GEOMETRY..." />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold opacity-30 uppercase tracking-widest pl-2">Grade</label>
              <select required className="w-full p-5 bg-white/5 border border-slate-500/10 outline-none focus:border-primary text-sm font-bold uppercase appearance-none rounded-xl">
                {Object.values(GradeLevel).map(level => <option key={level} value={level}>{level}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold opacity-30 uppercase tracking-widest pl-2">Details</label>
            <textarea required className="w-full p-8 bg-white/5 border border-slate-500/10 outline-none focus:border-primary text-sm font-medium min-h-[150px] rounded-[2rem]" placeholder="What specifically do you need help with?"></textarea>
          </div>
          <button type="submit" disabled={loading} className={`px-12 py-6 font-bold text-xs uppercase tracking-widest text-white transition-all w-full md:w-auto rounded-full shadow-xl ${loading ? 'bg-slate-300 cursor-not-allowed' : 'bg-slate-900 hover:bg-primary'}`}>
            {loading ? 'Submitting...' : 'Find Study Partner'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorMatch;
