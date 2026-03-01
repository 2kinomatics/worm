
import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

const OfflineNotice: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOffline(false);
    const goOffline = () => setIsOffline(true);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-orange-500 text-white p-3 flex justify-center items-center gap-4 animate-in slide-in-from-top duration-300">
      <WifiOff size={16} />
      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Та одоогоор офлайн байна. Зарим функцууд ажиллахгүй байж магадгүй!</span>
    </div>
  );
};

export default OfflineNotice;
