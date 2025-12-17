import React from 'react';
import { motion } from 'framer-motion';
import { ICONS } from '../constants';
import SectionHeading from './SectionHeading';
import { Language } from '../App';

interface EducationProps {
  lang: Language;
  translations: any;
}

const Education: React.FC<EducationProps> = ({ lang, translations }) => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title={translations.title} 
          subtitle={translations.subtitle}
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {translations.items.map((edu: any, index: number) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl p-8 rounded-[2.5rem] border border-black/5 dark:border-white/10 flex flex-col sm:flex-row gap-8 items-start sm:items-center hover:border-blue-500/30 transition-all duration-500"
            >
               <div className="flex-shrink-0 p-4 rounded-2xl bg-white/10 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                 {edu.id === 'apple' ? <ICONS.Code2 className="text-blue-500 w-8 h-8" /> : 
                  edu.id === 'unina' ? <ICONS.GraduationCap className="text-blue-500 w-8 h-8" /> :
                  <ICONS.Award className="text-blue-500 w-8 h-8" />}
               </div>

               <div className="flex-grow">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.school}</h3>
                    <span className="text-[10px] font-black tracking-widest uppercase text-gray-400 dark:text-apple-subtext">{edu.period}</span>
                 </div>
                 <h4 className="text-md font-medium text-blue-600 dark:text-blue-400 mb-3">{edu.degree}</h4>
                 {edu.description && (
                   <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">{edu.description}</p>
                 )}
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;