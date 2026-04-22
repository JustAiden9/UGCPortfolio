'use client';

import { motion, Variants } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const headlineWords = "Content that converts.".split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">
      {/* Background ambient blooms */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="font-editorial text-7xl sm:text-8xl md:text-[110px] leading-[0.95] tracking-tight flex flex-wrap justify-center gap-x-4 md:gap-x-8">
            {headlineWords.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-700/90 font-medium max-w-2xl mb-12"
        >
          I&apos;m Aiden Baker. I craft Gen-Z focused UGC that feels native, 
          holds attention, and drives measurable revenue for modern brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#work" className="btn btn-blue w-full sm:w-auto text-center">
            See My Work
          </a>
          <a href="#stats" className="btn btn-dark w-full sm:w-auto text-center">
            View Stats
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-sm font-medium tracking-wide uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
