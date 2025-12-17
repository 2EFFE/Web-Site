import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ICONS } from '../constants';
import SectionHeading from './SectionHeading';
import { Language } from '../App';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectsProps {
  lang: Language;
  translations: any;
}

const Projects: React.FC<ProjectsProps> = ({ lang, translations }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title={translations.title} 
          subtitle={translations.subtitle}
        />

        <div className="grid grid-cols-1 gap-10">
          {translations.items.map((project: any, index: number) => {
            const IconComponent = (ICONS as any)[project.icon] || ICONS.Settings;
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative bg-white/5 dark:bg-white/[0.02] backdrop-blur-2xl rounded-[3rem] border border-black/5 dark:border-white/10 overflow-hidden transition-all duration-500 ${isExpanded ? 'ring-2 ring-blue-500/50' : 'hover:border-blue-500/30'}`}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Icon Section */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/20 group-hover:scale-105 transition-transform duration-500">
                        <IconComponent size={32} className="text-blue-500 md:size-[48px]" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                          <span className="text-[10px] font-black tracking-widest uppercase text-blue-500 mb-2 block">
                            {project.category}
                          </span>
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t: string) => (
                            <span key={t} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-[10px] font-bold text-gray-500 dark:text-gray-400 border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-sm hover:underline group/btn"
                      >
                        {isExpanded ? translations.close : translations.viewMore}
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} className="group-hover/btn:translate-y-0.5 transition-transform" />}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 mt-8">
                              <div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">{translations.problemLabel}</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">{translations.solutionLabel}</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">{translations.resultsLabel}</h4>
                                <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium leading-relaxed">{project.results}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Decorative background shape */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;