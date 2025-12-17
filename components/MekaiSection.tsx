
import React from 'react';
import { motion } from 'framer-motion';
import { ICONS } from '../constants';
import SectionHeading from './SectionHeading';
import { Language } from '../App';
import { ExternalLink } from 'lucide-react';

interface MekaiSectionProps {
  lang: Language;
  translations: any;
}

const MekaiSection: React.FC<MekaiSectionProps> = ({ lang, translations }) => {
  return (
    <section id="mekai" className="py-24 relative overflow-hidden">
      {/* Sfondo Leggero - Griglia CSS (molto performante) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title={translations.title} 
          subtitle={translations.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Side - Card Semplice e Reattiva */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2.5rem] border border-white/10 flex flex-col items-center justify-center p-8 shadow-2xl overflow-hidden group">
              {/* Pattern decorativo interno */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mb-6"
              >
                <ICONS.Box size={80} className="text-white drop-shadow-lg" />
              </motion.div>
              
              <h3 className="text-4xl font-black text-white tracking-tighter italic mb-2 relative z-10">MEKAI</h3>
              <div className="w-16 h-1 bg-blue-400 rounded-full relative z-10" />
            </div>

            {/* Badge flottante semplice */}
            <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-white dark:bg-apple-gray rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
                <ICONS.Cpu size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">Additive Mfg.</span>
            </div>
          </motion.div>

          {/* Text Side - Contenuti chiari */}
          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed"
            >
              {translations.description}
            </motion.p>

            <div className="space-y-4">
              {translations.features.map((feature: any, i: number) => {
                const Icon = (ICONS as any)[feature.icon] || ICONS.Settings;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 bg-white/5 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-2xl hover:border-blue-500/20 transition-all"
                  >
                    <div className="shrink-0 text-blue-500">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-light">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Pulita e ad alto contrasto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="https://mekai.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>{translations.cta}</span>
                <ExternalLink size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MekaiSection;
