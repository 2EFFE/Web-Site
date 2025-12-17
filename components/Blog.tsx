import React from 'react';
import { motion } from 'framer-motion';
import { ICONS } from '../constants';
import SectionHeading from './SectionHeading';
import { Language } from '../App';
import { ArrowUpRight, Clock } from 'lucide-react';

interface BlogProps {
  lang: Language;
  translations: any;
}

const Blog: React.FC<BlogProps> = ({ lang, translations }) => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title={translations.title} 
          subtitle={translations.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.items.map((post: any, index: number) => {
            const IconComponent = (ICONS as any)[post.icon] || ICONS.BookOpen;
            
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col bg-white/5 dark:bg-white/[0.01] backdrop-blur-md rounded-[2.5rem] border border-black/5 dark:border-white/5 p-8 hover:border-blue-500/20 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-blue-500/5"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-gray-100/50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                    <IconComponent size={24} className="text-blue-500" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-gray-400 dark:text-apple-subtext bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full">
                    <Clock size={12} className="text-blue-500" />
                    <span>{post.readTime} {translations.readTime}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-blue-500">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 group-hover:text-blue-500 transition-colors">
                    {post.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-10 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5">
                  <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                  <button className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
                    {translations.viewAll}
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Hover decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;