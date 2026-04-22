'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Aiden completely changed our ad account trajectory. The first video he made became our top performing creative for 3 months straight.",
    author: "Sarah L.",
    role: "CMO, TechStyle"
  },
  {
    quote: "He doesn't just read a script. He brought actual strategic insights to our hooks that we hadn't thought of. Incredible ROI.",
    author: "Sai Shah",
    role: "Co-Founder @ Holdmate"
  },
  {
    quote: "Fast turnaround, extremely professional, and the video quality was indistinguishable from a high-end production house.",
    author: "Elena R.",
    role: "Growth Lead, DTC Brands Inc."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Logos Strip */}
      <div className="mb-24 flex justify-center items-center gap-8 md:gap-12 flex-wrap">
        <div className="relative h-16 md:h-20 w-40 md:w-56">
          <Image 
            src="/photos/brand1.png" 
            alt="Brand 1" 
            fill 
            className="object-contain" 
            unoptimized 
          />
        </div>
        <div className="relative h-16 md:h-20 w-40 md:w-56">
          <Image 
            src="/photos/brand2.png" 
            alt="Brand 2" 
            fill 
            className="object-contain" 
            unoptimized 
          />
        </div>
        <div className="relative h-16 md:h-20 w-40 md:w-56">
          <Image 
            src="/photos/brand3.png" 
            alt="Brand 3" 
            fill 
            className="object-contain" 
            unoptimized 
          />
        </div>
      </div>

      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-5xl md:text-7xl mb-6"
        >
          What They Say.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => {
          const isBlurred = idx === 0 || idx === 2;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`glass-panel p-8 md:p-10 rounded-3xl relative select-none ${isBlurred ? 'blur-[4px] opacity-40 bg-blue-500/5 pointer-events-none' : ''}`}
            >
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" className="text-yellow-400" />)}
              </div>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium mb-8">
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-auto">
                <div className="font-bold text-gray-900">{t.author}</div>
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider mt-1">{t.role}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
