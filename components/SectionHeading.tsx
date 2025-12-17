import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-lg text-gray-500 dark:text-apple-subtext font-light max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;