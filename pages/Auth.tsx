
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

    const rawPhone = formData.phone.replace('+976', '').replace(/\s/g, '');
    const isMongolianNumber = /^[897]\d{7}$/.test(rawPhone);

    if (!isMongolianNumber) {
      setError("Зөвхөн Монгол улсын гар утасны дугаар оруулна уу (8 оронтой тоо).");
      return;
    }

    // Always show verification message as requested
    setError("Баталгаажуулах код дугаарт илгээгдлээ");
  };

  return (
    <div className="w-full flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-lg bg-white/5 p-10 md:p-14 rounded-[2rem] border border-slate-500/10 shadow-2xl space-y-10 backdrop-blur-md">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-serif text-primary tracking-tight">
            {isSignUp ? 'Бүртгэл үүсгэх' : 'Сурагчийн нэвтрэх'}
          </h1>
          <p className="opacity-60 text-sm font-medium">
            {isSignUp 
              ? 'Монгол холбоо барих мэдээллээрээ Анир нийгэмлэгт нэгдээрэй.' 
              : 'Манай нэвтрэх систем одоогоор хязгаарлагдмал байна.'}
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
                    placeholder="Бүтэн нэр"
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
                    placeholder="Нас"
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
                placeholder="Утасны дугаар"
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
                placeholder="Нууц үг"
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
              {isSignUp ? 'Одоо бүртгүүлэх' : 'Нэвтрэх боломжгүй'}
            </button>
            {!isSignUp && (
              <div className="flex items-center gap-2 justify-center text-[10px] opacity-40 font-bold uppercase tracking-wider">
                <Info size={12} /> Засвар үйлчилгээний горим идэвхтэй байна
              </div>
            )}
          </div>
        </form>

        <div className="pt-8 border-t border-slate-500/10 text-center">
          <button
            onClick={() => { setIsSignUp(!isSignUp); setError(''); }}
            className="text-xs font-bold text-primary hover:underline"
          >
            {isSignUp ? 'Аль хэдийн гишүүн болсон уу? Нэвтрэх' : 'Шинэ сурагч уу? Бүртгүүлэх'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
