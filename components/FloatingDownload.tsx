
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ICONS } from '../constants';
import { Language } from '../App';

interface FloatingDownloadProps {
  lang: Language;
  label: string;
}

const FloatingDownload: React.FC<FloatingDownloadProps> = ({ lang, label }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleDownload = () => {
    const element = document.getElementById('cv-download-root');
    if (!element) {
      window.print();
      return;
    }

    if (typeof (window as any).html2pdf !== 'undefined') {
      const opt = {
        margin: 0,
        filename: `CV_Fabio_Festa_${lang.toUpperCase()}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      (window as any).html2pdf().from(element).set(opt).save();
    } else {
      window.print();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-10 right-10 z-[60] print:hidden"
        >
          <button
            onClick={handleDownload}
            className="group flex items-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl shadow-blue-500/30 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-300"
            title={label}
          >
            <ICONS.FileDown size={20} className="group-hover:animate-bounce" />
            <span className="font-bold text-sm tracking-wide hidden md:block">{label}</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingDownload;
