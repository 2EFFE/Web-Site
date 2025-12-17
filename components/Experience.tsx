import React from 'react';
import { motion } from 'framer-motion';
import { ICONS } from '../constants';
import SectionHeading from './SectionHeading';
import { Language } from '../App';

interface ExperienceProps {
  lang: Language;
  translations: any;
}

const Experience: React.FC<ExperienceProps> = ({ lang, translations }) => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title={translations.title} 
          subtitle={translations.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {translations.items.map((exp: any, index: number) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
              }}
              className="group relative bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl rounded-[2.5rem] p-8 border border-black/5 dark:border-white/10 shadow-sm hover:border-blue-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_40px_rgba(0,113,227,0.1)] transition-all duration-500 cursor-default"
            >
              {/* Overlay gradiente che si intensifica al passaggio */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 bg-gray-100/50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-300">
                    {exp.role.includes("Analista") || exp.role.includes("Analyst") ? <ICONS.BrainCircuit size={24} className="text-purple-500" /> : 
                     exp.role.includes("Controllo") || exp.role.includes("Control") ? <ICONS.Cpu size={24} className="text-green-500" /> :
                     <ICONS.Briefcase size={24} className="text-blue-500" />}
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-apple-subtext bg-black/5 dark:bg-white/5 px-4 py-1.5 rounded-full border border-black/5 dark:border-white/5 group-hover:text-blue-400 transition-colors duration-300">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors duration-300">
                  {exp.company}
                </h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-5 font-light">{exp.role}</h4>
                
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mb-8 font-light">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags?.map((tag: string) => (
                    <span key={tag} className="text-[10px] font-bold tracking-wider uppercase text-gray-500 dark:text-white/50 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/5 transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;