import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  words: string[];
  delay?: number;
}

export const TypeWriter = ({ words, delay = 2500 }: TypeWriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[currentWordIndex];
    // Slightly randomized speed for realistic human typing
    const baseSpeed = isDeleting ? 25 : 65;
    const typingSpeed = baseSpeed + (Math.random() * 20 - 10);

    if (!isDeleting && currentText === targetWord) {
      const timer = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timer);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) => 
        isDeleting ? targetWord.substring(0, prev.length - 1) : targetWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay]);

  return (
    <span className="inline-flex items-center min-h-[1.1em] pointer-events-none">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue to-white uppercase whitespace-pre">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="w-[4px] sm:w-[5px] md:w-[6px] h-[0.85em] bg-sfl-blue ml-1 md:ml-2 shadow-[0_0_12px_rgba(25,148,245,0.8)]"
      />
    </span>
  );
};
