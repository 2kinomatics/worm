
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TutorApplication from './pages/TutorApplication';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import WordOfTheDay from './components/FactPopUp';
import MotivationalHeart from './components/MotivationalPet';
import Footer from './components/Footer';
import OfflineNotice from './components/OfflineNotice';
import { AppView, User, UserProgress, SubjectCategory } from './types';
import { NAV_ITEMS, TEXT } from './constants';
import { UserCircle, Sun, Moon, Coffee } from 'lucide-react';

const THEMES = {
  default: { primary: '#ea580c', secondary: '#15803d', bg: '#fffcf5', text: '#1a1a1a' },
  sepia: { primary: '#92400e', secondary: '#166534', bg: '#fffaf0', text: '#451a03' },
  dark: { primary: '#fb923c', secondary: '#4ade80', bg: '#0f172a', text: '#f8fafc' }
};

const App: React.FC = () => {
  const [currentView, setView] = useState<AppView>('home');
  const [user, setUser] = useState<User | null>(null);
  const [resourceFilter, setResourceFilter] = useState<SubjectCategory | 'All'>('All');
  const [theme, setTheme] = useState<'default' | 'sepia' | 'dark'>('default');
  
  const [progress] = useState<UserProgress>({
    lastResource: '1',
    completedDates: [
      new Date().toISOString(),
      new Date(Date.now() - 86400000).toISOString(),
    ],
    subjectStats: { Literacy: 80, Mathematics: 40 }
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('eb_scholar_session');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const colors = THEMES[theme];
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--secondary', colors.secondary);
    root.style.setProperty('--bg', colors.bg);
    root.style.setProperty('--text', colors.text);
  }, [theme]);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('eb_scholar_session', JSON.stringify(u));
    setView('home');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('eb_scholar_session');
    setView('home');
  };

  const navigateToResource = (subject: SubjectCategory | 'All') => {
    setResourceFilter(subject);
    setView('resources');
  };

  const renderContent = () => {
    const currentUser = user || { name: 'Guest', id: 'GUEST', gradeLevel: 'Grade 10', phoneNumber: '', isTutor: false } as User;
    
    switch (currentView) {
      case 'home': 
        return <Home user={currentUser} progress={progress} onNavigateToSubject={navigateToResource} />;
      case 'tutor-apply': 
        return <TutorApplication user={user} onAuthClick={() => setView('auth')} />;
      case 'resources': 
        return <Resources user={user} onAuthClick={() => setView('auth')} initialCategory={resourceFilter} />;
      case 'profile': 
        return <Profile user={user} progress={progress} onAuthClick={() => setView('auth')} />;
      case 'auth': 
        return <Auth onLogin={handleLogin} />;
      case 'settings': 
        return (
          <div className="w-full space-y-10 text-left animate-in fade-in duration-500 px-6 md:px-12">
            <h1 className="text-6xl font-serif text-primary">Тохиргоо</h1>
            {user ? (
              <div className="bg-white/5 border border-slate-200/20 w-full max-w-xl space-y-8 rounded-[2rem] shadow-sm p-10 backdrop-blur-md">
                <div className="flex justify-between items-center py-6 border-b border-slate-500/10">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-50">Сурагчийн ID</span>
                  <span className="text-sm font-semibold">{user.id}</span>
                </div>
                <button onClick={handleLogout} className="w-full py-5 text-sm font-bold text-red-500 border border-red-500/20 hover:bg-red-500/10 rounded-full transition-colors mt-4">Гарах</button>
              </div>
            ) : (
               <div className="text-muted font-medium italic">Идэвхтэй сесс байхгүй байна. Тохиргоог удирдахын тулд бүртгүүлнэ үү.</div>
            )}
          </div>
        );
      default: 
        return <Home user={currentUser} progress={progress} onNavigateToSubject={navigateToResource} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen theme-transition w-full" style={{ color: 'var(--text)' }}>
      <OfflineNotice />
      
      <div className="flex flex-1 relative z-10 w-full">
        <Sidebar 
          currentView={currentView} 
          setView={setView} 
          isGuest={!user} 
          currentPageTitle={TEXT[NAV_ITEMS.find(n => n.id === currentView)?.labelKey as keyof typeof TEXT] || 'Тойм'}
        />
        
        <main className="flex-1 transition-all duration-300 w-full flex flex-col pl-14 md:pl-16">
          <header className="sticky top-0 z-40 bg-[var(--bg)]/90 backdrop-blur-md border-b border-slate-500/10 px-6 md:px-12 py-4 flex justify-between items-center w-full">
            <div className="flex items-center gap-10">
              <div className="text-3xl font-serif text-primary tracking-tight cursor-pointer flex items-center gap-2" onClick={() => setView('home')}>
                Anir
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              </div>
              <nav className="hidden lg:flex items-center gap-2 h-10">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setView(item.id as AppView)}
                    className={`vertical-script text-[10px] font-bold uppercase tracking-widest transition-all relative h-full flex items-center px-1.5 ${
                      currentView === item.id 
                        ? 'text-primary after:content-[""] after:absolute after:-right-0.5 after:top-0 after:h-full after:w-0.5 after:bg-secondary' 
                        : 'opacity-40 hover:opacity-100'
                    }`}
                  >
                    {TEXT[item.labelKey as keyof typeof TEXT]}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex items-center gap-1 bg-slate-500/5 p-1 rounded-full border border-slate-500/10">
                <button onClick={() => setTheme('default')} className={`p-2 rounded-full transition-all ${theme === 'default' ? 'bg-primary text-white shadow-md' : 'opacity-40 hover:opacity-70'}`} title="Өдрийн гэрэл"><Sun size={14} /></button>
                <button onClick={() => setTheme('sepia')} className={`p-2 rounded-full transition-all ${theme === 'sepia' ? 'bg-primary text-white shadow-md' : 'opacity-40 hover:opacity-70'}`} title="Тав тухтай / Сепиа"><Coffee size={14} /></button>
                <button onClick={() => setTheme('dark')} className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-primary text-white shadow-md' : 'opacity-40 hover:opacity-70'}`} title="Харанхуй шөнө"><Moon size={14} /></button>
              </div>

              {user ? (
                <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('profile')}>
                  <div className="text-right hidden sm:block">
                    <div className="text-xs font-semibold group-hover:text-primary transition-colors">{user.name}</div>
                    <div className="text-[8px] opacity-40 font-bold uppercase tracking-wider">Сурагч</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl border border-slate-500/10 overflow-hidden bg-slate-500/5">
                    <img src={`https://picsum.photos/seed/${user.id}/100`} alt="Аватар" />
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => setView('auth')} 
                  className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest px-6 py-3 bg-primary text-white hover:bg-secondary rounded-full transition-all shadow-lg"
                >
                  <UserCircle size={14} /> {TEXT.joinButton}
                </button>
              )}
            </div>
          </header>

          <div className="flex-1 w-full px-6 md:px-12 py-12 overflow-x-hidden">
            <div className="w-full">
              {renderContent()}
            </div>
          </div>
          
          <Footer />
          <WordOfTheDay />
          <MotivationalHeart />
        </main>
      </div>
    </div>
  );
};

export default App;
