import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, centered, className, light }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("text-2xl md:text-3xl font-bold relative inline-block", light ? "text-white" : "text-navy")}
      >
        {title}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '60%' }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gold mt-2 rounded-full"
          style={{ margin: centered ? '8px auto 0' : '8px 0 0' }}
        />
      </motion.h2>
    </div>
  );
}
