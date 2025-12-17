
import React from 'react';
import { PROFILE, I18N } from '../constants';
import { Language } from '../App';

interface PrintableCVProps {
  lang: Language;
}

const PrintableCV: React.FC<PrintableCVProps> = ({ lang }) => {
  const t = I18N[lang];
  if (!t || !t.cv || !t.skills || !t.skills.categories) return null;

  const categories = t.skills.categories;

  return (
    <div 
      id="cv-download-wrapper"
      style={{ 
        position: 'fixed', 
        left: 0, 
        top: 0,
        width: '210mm',
        height: '295.5mm',
        zIndex: -50, // Dietro tutto, anche dietro lo sfondo del sito
        pointerEvents: 'none',
        backgroundColor: 'white',
        overflow: 'hidden'
      }}
    >
      <div 
        id="cv-download-root" 
        style={{ 
          width: '210mm', 
          height: '295.5mm',
          backgroundColor: 'white',
          margin: 0,
          padding: 0,
          display: 'flex',
          boxSizing: 'border-box'
        }}
        className="text-slate-800 font-sans"
      >
        {/* Sidebar - Dark Navy */}
        <div style={{ width: '33%', backgroundColor: '#1a2b4b' }} className="text-white p-10 flex flex-col gap-8 h-full">
          
          {/* Nome e Titolo nella sidebar */}
          <div className="mt-8">
            <h2 className="text-lg font-bold tracking-tighter border-b border-white/20 pb-4 mb-4 uppercase">Profile</h2>
            <p className="text-[10px] leading-relaxed text-slate-100 font-light text-left">
              {t.cv.objective}
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.2em] mb-4 border-b border-white/20 pb-2 uppercase">{t.cv.contactTitle}</h3>
            <div className="flex flex-col gap-3 text-[9px] font-light">
              <div className="flex items-center gap-2"><span>📱</span> {PROFILE.phone}</div>
              <div className="flex items-center gap-2"><span>✉️</span> {PROFILE.email}</div>
              <div className="flex items-center gap-2 text-[8px]"><span>🔗</span> {PROFILE.linkedin}</div>
              <div className="flex items-center gap-2"><span>📍</span> {PROFILE.location}</div>
              <div className="flex items-center gap-2"><span>📅</span> {PROFILE.birthDate}</div>
            </div>
          </div>

          {/* Competenze Tech */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.2em] mb-4 border-b border-white/20 pb-2 uppercase">{t.cv.skillsTitle}</h3>
            <ul className="text-[9px] space-y-2 font-light list-none p-0">
              {categories[0]?.skills.map((s: string) => <li key={s}>• {s}</li>)}
              {categories[1]?.skills.slice(0, 3).map((s: string) => <li key={s}>• {s}</li>)}
              {categories[2]?.skills.slice(0, 2).map((s: string) => <li key={s}>• {s}</li>)}
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.2em] mb-4 border-b border-white/20 pb-2 uppercase">{t.cv.softSkillsTitle}</h3>
            <ul className="text-[9px] space-y-2 font-light list-none p-0">
              {categories[4]?.skills.map((s: string) => <li key={s}>• {s}</li>)}
            </ul>
          </div>

          {/* Lingue */}
          <div className="mt-auto pb-6">
            <h3 className="text-[11px] font-bold tracking-[0.2em] mb-4 border-b border-white/20 pb-2 uppercase">{t.cv.languagesTitle}</h3>
            <ul className="text-[9px] space-y-2 font-light list-none p-0">
               {t.cv.languagesList.map((s: string) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ width: '67%' }} className="p-14 bg-white flex flex-col h-full">
          <header className="mb-10 mt-4">
            <h1 className="text-[44px] font-bold text-slate-900 tracking-tighter leading-none mb-2">{PROFILE.name}</h1>
            <h2 className="text-[20px] text-slate-500 font-light tracking-wide uppercase">{t.hero.badge}</h2>
          </header>

          {/* Esperienze */}
          <section className="mb-10">
            <h3 className="text-[12px] font-black tracking-[0.2em] uppercase text-slate-900 mb-6 border-b-2 border-slate-900 pb-2">{t.cv.expTitle}</h3>
            <div className="space-y-6">
              {t.experience.items.slice(0, 4).map((exp: any) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-[10px] font-bold text-slate-900 uppercase">{exp.company} — {exp.role}</h4>
                    <span className="text-[8px] text-slate-400 font-bold uppercase ml-4">{exp.period}</span>
                  </div>
                  <p className="text-[9px] leading-relaxed text-slate-600 font-light text-justify">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Formazione */}
          <section className="mb-10">
            <h3 className="text-[12px] font-black tracking-[0.2em] uppercase text-slate-900 mb-6 border-b-2 border-slate-900 pb-2">{t.cv.eduTitle}</h3>
            <div className="space-y-4">
              {t.education.items.map((edu: any) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="text-[10px] font-bold text-slate-900 uppercase">{edu.degree}</h4>
                    <span className="text-[8px] text-slate-400 font-bold ml-4">{edu.period}</span>
                  </div>
                  <h5 className="text-[8.5px] text-blue-700 font-bold mb-1 uppercase">{edu.school}</h5>
                  {edu.description && (
                    <p className="text-[8px] leading-relaxed text-slate-500 font-light">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Certificazioni */}
          <section className="mt-auto pb-4">
            <h3 className="text-[12px] font-black tracking-[0.2em] uppercase text-slate-900 mb-6 border-b-2 border-slate-900 pb-2">{t.cv.certTitle}</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {categories[5]?.skills.map((cert: string) => (
                <div key={cert} className="text-[8.5px] text-slate-700 border-b border-slate-50 pb-1 font-medium italic">
                  {cert}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrintableCV;
