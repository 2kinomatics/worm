
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const MOTIVATIONAL_MESSAGES = [
  "Өнөөдөр чи гайхалтай байх болно! ❤️",
  "Хичээл зүтгэл хэзээ ч талаар өнгөрөхгүй. ✨",
  "Чиний чадахгүй зүйл гэж үгүй. 💪",
  "Бага багаар урагшилсаар бай, чи чадна! 🐾",
  "Мэдлэг бол хүч. 📚",
  "Өөртөө итгэ, чи бол ирээдүйн эзэн. 🌟",
  "Амжилт бол өдөр бүрийн жижиг алхмуудын нийлбэр юм. 📈",
  "Шинэ зүйл сурах бүрт чиний ертөнц томордог. 🌍",
  "Танд тусламж хэрэгтэй юу? 😊",
  "Амрахаа бүү мартаарай, эрүүл мэнд хамгийн чухал! 🍵",
  "Чи маш сайн ажиллаж байна! ❤️",
  "Түр завсарлаад гүнзгий амьсгаа аваарай. 🧘",
];

const MotivationalHeart: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const showRandomMessage = () => {
      const randomMsg = MOTIVATIONAL_MESSAGES[Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)];
      setMessage(randomMsg);
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    };

    const initialTimeout = setTimeout(showRandomMessage, 3000);
    const interval = setInterval(showRandomMessage, 45000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className="fixed bottom-24 left-8 z-50 flex flex-col items-start pointer-events-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-4 p-4 bg-white border-2 border-pink-200 rounded-2xl shadow-xl max-w-[220px] pointer-events-auto relative"
          >
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-r-2 border-b-2 border-pink-200 rotate-45"></div>
            <p className="text-[12px] font-bold text-slate-700 leading-tight">
              {message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative pointer-events-auto">
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.2 }
          }}
          className="w-16 h-16 cursor-pointer group"
          onClick={() => {
            const randomMsg = MOTIVATIONAL_MESSAGES[Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)];
            setMessage(randomMsg);
            setIsVisible(true);
          }}
        >
          {/* Pixel Heart SVG */}
          <svg viewBox="0 0 16 16" className="w-full h-full drop-shadow-lg" shapeRendering="crispEdges">
            {/* Heart Shape */}
            <rect x="2" y="4" width="2" height="2" fill="#F472B6" />
            <rect x="4" y="2" width="3" height="2" fill="#F472B6" />
            <rect x="7" y="4" width="2" height="2" fill="#F472B6" />
            <rect x="9" y="2" width="3" height="2" fill="#F472B6" />
            <rect x="12" y="4" width="2" height="2" fill="#F472B6" />
            
            <rect x="2" y="6" width="12" height="2" fill="#F472B6" />
            <rect x="3" y="8" width="10" height="2" fill="#F472B6" />
            <rect x="5" y="10" width="6" height="2" fill="#F472B6" />
            <rect x="7" y="12" width="2" height="2" fill="#F472B6" />
            
            {/* Highlights */}
            <rect x="4" y="4" width="1" height="1" fill="#FDF2F8" opacity="0.6" />
            <rect x="5" y="3" width="1" height="1" fill="#FDF2F8" opacity="0.6" />
          </svg>
          
          <div className="absolute top-0 right-0 bg-pink-400 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <MessageCircle size={10} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MotivationalHeart;
