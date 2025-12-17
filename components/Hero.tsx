
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE, ICONS } from '../constants';
import { Language } from '../App';

interface HeroProps {
  lang: Language;
  translations: any;
}

const Hero: React.FC<HeroProps> = ({ lang, translations }) => {
  const [index, setIndex] = useState(0);
  const words = translations.words;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    const element = document.getElementById('cv-download-root');
    if (!element) {
      console.error("Elemento CV non trovato");
      window.print();
      return;
    }

    if (typeof (window as any).html2pdf !== 'undefined') {
      const opt = {
        margin: 0,
        filename: `CV_Fabio_Festa_${lang.toUpperCase()}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          letterRendering: true,
          scrollY: 0,
          scrollX: 0,
          x: 0,
          y: 0,
          windowWidth: 794,
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      
      const worker = (window as any).html2pdf();
      worker.from(element).set(opt).save().catch((err: any) => {
        console.error("Errore download:", err);
        window.print();
      });
    } else {
      window.print();
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-6 print:hidden">
      <div className="container mx-auto z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px]">
              {translations.badge}
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-8xl lg:text-[11rem] font-bold tracking-tighter text-gray-900 dark:text-white leading-[0.8] mb-12">
            {PROFILE.name}
          </h1>

          <div className="flex flex-col items-center">
            <div className="h-16 md:h-24 overflow-hidden relative w-full flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${lang}-${index}`}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="text-2xl md:text-5xl lg:text-6xl font-medium text-blue-600 dark:text-blue-400 tracking-tight"
                >
                  {words[index]}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="max-w-2xl text-xl md:text-2xl font-medium text-gray-700 dark:text-apple-text leading-relaxed mt-10 mb-14"
            >
              {translations.tagline}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, "#contact")}
                className="group relative px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 text-lg">{translations.cta_primary}</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              
              <a 
                href="#experience" 
                onClick={(e) => handleScroll(e, "#experience")}
                className="px-10 py-5 bg-white/50 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white font-bold rounded-2xl border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg">{translations.cta_secondary}</span>
              </a>

              <button 
                type="button"
                onClick={handleDownload}
                className="flex items-center gap-3 px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:scale-105 transition-all duration-300 group shadow-lg"
              >
                <ICONS.FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
                <span className="text-lg">{translations.cta_cv}</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Posizione aggiornata */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-3"
          onClick={(e) => handleScroll(e as any, "#experience")}
        >
          <motion.span 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400 dark:text-blue-400/60"
          >
            Discover More
          </motion.span>
          <motion.div 
            animate={{ scaleY: [1, 1.5, 1], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
