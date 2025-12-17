import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Language } from '../App';
import { ICONS } from '../constants';

interface SkillsProps {
  lang: Language;
  translations: any;
}

const Skills: React.FC<SkillsProps> = ({ lang, translations }) => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title={translations.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.categories.map((category: any, catIndex: number) => {
            const IconComponent = (ICONS as any)[category.icon] || ICONS.Cpu;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="group relative flex flex-col bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl p-8 rounded-[2.5rem] border border-black/5 dark:border-white/10 hover:border-blue-500/30 transition-all duration-500"
              >
                {/* Header Categoria con Icona */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                    <IconComponent size={24} className="text-blue-500" />
                  </div>
                  <h3 className="text-sm font-black tracking-[0.2em] uppercase text-gray-500 dark:text-apple-subtext group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                {/* Lista Skill */}
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                      className="group/item flex items-center justify-between bg-black/5 dark:bg-white/[0.03] hover:bg-blue-500/5 px-5 py-3 rounded-2xl border border-transparent hover:border-blue-500/20 transition-all cursor-default"
                    >
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/item:text-blue-500 transition-colors">
                        {skill}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20 group-hover/item:bg-blue-500 group-hover/item:scale-150 transition-all" />
                    </motion.div>
                  ))}
                </div>

                {/* Decorative radial gradient */}
                <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;