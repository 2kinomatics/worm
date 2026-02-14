
import React, { useState } from 'react';
import { AlertCircle, Phone, Lock, User, Calendar, Info } from 'lucide-react';

interface AuthProps {
  onLogin: (user: any) => void;
  onGuestContinue?: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(true); // Default to Signup
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    password: ''
  });
  const [error, setError] = useState('');

  const MONGOLIAN_PREFIX = '+976'; 
  const PHONE_REGEX = /^\+976\d{8}$/; 

  const validatePhone = (phone: string) => {
    return PHONE_REGEX.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isSignUp) {
      setError("The Login service is currently undergoing migration. Please use the Sign Up option to create a new session.");
      return;
    }

    const formattedPhone = formData.phone.startsWith('+976') ? formData.phone : `+976${formData.phone}`;

    if (!validatePhone(formattedPhone)) {
      setError(`Valid Mongolian number required (${MONGOLIAN_PREFIX} followed by 8 digits).`);
      return;
    }

    if (isSignUp) {
      if (!formData.name || !formData.age) {
        setError("Please provide your name and age.");
        return;
      }

      const newUser = {
        id: `ANIR-${Math.floor(Math.random() * 10000)}`,
        name: formData.name,
        age: parseInt(formData.age),
        phoneNumber: formattedPhone,
        language: 'en',
        isTutor: false,
        gradeLevel: 'Grade 10'
      };
      
      const existing = JSON.parse(localStorage.getItem('eb_users') || '[]');
      localStorage.setItem('eb_users', JSON.stringify([...existing, newUser]));
      
      onLogin(newUser);
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-lg bg-white/5 p-10 md:p-14 rounded-[2rem] border border-slate-500/10 shadow-2xl space-y-10 backdrop-blur-md">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-serif text-primary tracking-tight">
            {isSignUp ? 'Create Account' : 'Scholar Login'}
          </h1>
          <p className="opacity-60 text-sm font-medium">
            {isSignUp 
              ? 'Join the Anir community with your Mongolian contact info.' 
              : 'Our login system is currently restricted.'}
          </p>
        </div>
        
        <form className="space-y-5" onSubmit={handleSubmit}>
          {error && (
            <div className="p-4 bg-primary/5 border-l-4 border-primary flex items-start gap-3 animate-in fade-in slide-in-from-top-1 rounded-r-xl">
              <AlertCircle className="text-primary shrink-0 mt-0.5" size={16} />
              <p className="text-xs font-semibold">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            {isSignUp && (
              <>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 bg-slate-500/5 border border-slate-500/10 outline-none focus:border-primary transition-all font-medium text-sm rounded-xl"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
                  <input
                    type="number"
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    placeholder="Age"
                    className="w-full pl-12 pr-4 py-4 bg-slate-500/5 border border-slate-500/10 outline-none focus:border-primary transition-all font-medium text-sm rounded-xl"
                  />
                </div>
              </>
            )}
            
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
              <div className="absolute left-12 top-1/2 -translate-y-1/2 text-[10px] font-bold opacity-30 border-r border-slate-500/10 pr-2">+976</div>
              <input
                type="tel"
                required
                value={formData.phone.replace('+976', '')}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="Phone Number"
                className="w-full pl-24 pr-4 py-4 bg-slate-500/5 border border-slate-500/10 outline-none focus:border-primary transition-all font-medium text-sm rounded-xl"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 bg-slate-500/5 border border-slate-500/10 outline-none focus:border-primary transition-all font-medium text-sm rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button
              type="submit"
              className={`w-full py-5 text-sm font-bold text-white rounded-full shadow-lg transition-all ${
                !isSignUp ? 'bg-slate-500/20 cursor-not-allowed opacity-50' : 'bg-primary hover:bg-secondary'
              }`}
            >
              {isSignUp ? 'Sign Up Now' : 'Sign In Disabled'}
            </button>
            {!isSignUp && (
              <div className="flex items-center gap-2 justify-center text-[10px] opacity-40 font-bold uppercase tracking-wider">
                <Info size={12} /> Maintenance Mode Active
              </div>
            )}
          </div>
        </form>

        <div className="pt-8 border-t border-slate-500/10 text-center">
          <button
            onClick={() => { setIsSignUp(!isSignUp); setError(''); }}
            className="text-xs font-bold text-primary hover:underline"
          >
            {isSignUp ? 'Already a member? Sign In' : 'New scholar? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
