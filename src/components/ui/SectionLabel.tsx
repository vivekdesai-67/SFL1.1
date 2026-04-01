import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  className?: string;
  center?: boolean;
}

export const SectionLabel = ({ text, className, center = false }: SectionLabelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "flex items-center gap-4 mb-6",
        center && "justify-center",
        className
      )}
    >
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
        className="h-[2px] bg-sfl-gold shrink-0" 
      />
      <span className="text-[10px] font-black tracking-[0.4em] uppercase text-sfl-gold whitespace-nowrap">
        {text}
      </span>
      {center && (
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
          className="h-[2px] bg-sfl-gold shrink-0" 
        />
      )}
    </motion.div>
  );
};
