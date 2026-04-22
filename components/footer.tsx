'use client';

import { motion } from 'motion/react';
import { ArrowRight, Instagram, Twitter, Mail } from 'lucide-react';

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
          <a href="mailto:contact@aidenbaker.com" className="btn btn-blue text-lg px-8 py-4 rounded-2xl group">
            Book your campaign
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-300/30 pt-12">
          <div className="text-xl font-bold tracking-tight">aidenpicks</div>
          
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-sm font-medium text-gray-500">
            © {new Date().getFullYear()} Aiden Baker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
