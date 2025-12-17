
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, GraduationCap, Mail, Languages, FolderKanban, Box } from 'lucide-react';
import { Language } from '../App';

interface NavbarProps {
  lang: Language;
  toggleLanguage: () => void;
  translations: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLanguage, translations }) => {
  const links = [
    { icon: Home, href: "#home", label: translations.home },
    { icon: Briefcase, href: "#experience", label: translations.experience },
    { icon: GraduationCap, href: "#education", label: translations.education },
    { icon: User, href: "#skills", label: translations.skills },
    { icon: Box, href: "#mekai", label: translations.mekai },
    { icon: FolderKanban, href: "#projects", label: translations.projects },
    { icon: Mail, href: "#contact", label: translations.contact },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <nav className="pointer-events-auto flex items-center gap-2 px-3 py-2 bg-white/70 dark:bg-apple-gray/60 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300">
        
        {/* Logo Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-[10px] shadow-lg shadow-blue-500/20 shrink-0">
          FF
        </div>

        {/* Links */}
        <div className="flex items-center bg-gray-200/50 dark:bg-white/5 rounded-full px-1 py-1">
          {links.map((link, i) => (
            <a 
              key={i}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="group relative p-2.5 text-gray-500 dark:text-apple-subtext hover:text-blue-600 dark:hover:text-white rounded-full transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-2.5 py-1.5 text-[10px] font-bold tracking-widest uppercase text-white bg-black dark:bg-white dark:text-black rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        
        {/* Separatore */}
        <div className="w-[1px] h-4 bg-gray-300 dark:bg-white/10 mx-1" />

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-apple-subtext hover:text-blue-600 dark:hover:text-white transition-all duration-300 bg-gray-100 dark:bg-white/5 rounded-full"
          aria-label="Toggle Language"
        >
          <Languages size={16} />
          <span>{lang === 'it' ? 'EN' : 'IT'}</span>
        </button>

      </nav>
    </motion.div>
  );
};

export default Navbar;
