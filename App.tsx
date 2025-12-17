
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Background from './components/Background';
import BackToTop from './components/BackToTop';
import PrintableCV from './components/PrintableCV';
import { I18N } from './constants';

export type Language = 'it' | 'en';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('it');

  useEffect(() => {
    // Forziamo il tema scuro per l'estetica premium richiesta
    document.documentElement.classList.add('dark');
  }, []);

  const toggleLanguage = () => setLang(prev => prev === 'it' ? 'en' : 'it');
  const t = I18N[lang];

  return (
    <div className="min-h-screen relative bg-apple-dark text-apple-text">
      {/* Elementi UI del sito (nascosti durante la stampa) */}
      <div className="print:hidden">
        <Background />
        <ScrollProgress />
        <Navbar lang={lang} toggleLanguage={toggleLanguage} translations={t.nav} />
        
        <main className="relative z-10">
          <Hero lang={lang} translations={t.hero} />
          <Experience lang={lang} translations={t.experience} />
          <Education lang={lang} translations={t.education} />
          <Skills lang={lang} translations={t.skills} />
          
          <Projects lang={lang} translations={t.projects} />
          <Contact lang={lang} translations={t.contact} />
        </main>

        <BackToTop />
      </div>

      {/* Versione stampabile del CV (visibile solo durante la stampa o cattura PDF) */}
      <PrintableCV lang={lang} />
    </div>
  );
};

export default App;
