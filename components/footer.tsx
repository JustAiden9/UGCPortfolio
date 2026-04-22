'use client';

import { motion } from 'motion/react';
import { ArrowRight, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-12 px-6 md:px-12 mt-24 overflow-hidden">
      {/* Decorative large glow bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12 max-w-5xl"
        >
          Let&apos;s make something people actually watch.
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mb-32"
        >
          <a href="mailto:ugcbyaidenb@gmail.com" className="btn btn-blue text-lg px-8 py-4 rounded-2xl group">
            Book your campaign
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-t border-gray-300/30 pt-12">
          <div className="text-xl font-bold tracking-tight text-center md:text-left">Aiden Baker</div>
          
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/aiden.rn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@aidenpicks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.34 6.34 0 0 0 6.25-6.36V7.98a8.1 8.1 0 0 0 4.8 1.53V6.09a5 5 0 0 1-2.73-.93Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aidenbaker9/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="text-sm font-medium text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} Aiden Baker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
