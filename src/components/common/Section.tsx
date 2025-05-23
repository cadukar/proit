import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
  dark?: boolean;
}

const Section = ({ 
  children, 
  className = "", 
  title, 
  subtitle, 
  fullWidth = false, 
  dark = false 
}: SectionProps) => {
  return (
    <section className={`py-16 md:py-24 ${dark ? 'bg-neutral-900 text-white' : 'bg-white'} ${className}`}>
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8'}>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-neutral-900'}`}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-lg max-w-3xl mx-auto ${dark ? 'text-neutral-300' : 'text-neutral-600'}`}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;