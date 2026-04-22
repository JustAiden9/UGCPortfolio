'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Aiden completely changed our ad account trajectory. The first video he made became our top performing creative for 3 months straight.",
    author: "Sarah L.",
    role: "CMO, TechStyle"
  },
  {
    quote: "He doesn't just read a script. He brought actual strategic insights to our hooks that we hadn't thought of. Incredible ROI.",
    author: "James M.",
    role: "Founder, Peak Performance Wellness"
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
      <div className="mb-24 flex justify-center items-center gap-12 md:gap-24 opacity-30 grayscale saturate-0 flex-wrap">
        <div className="text-2xl font-bold uppercase tracking-widest font-mono">Brand 1</div>
        <div className="text-2xl font-bold uppercase tracking-widest font-mono">Brand 2</div>
        <div className="text-2xl font-bold uppercase tracking-widest font-mono">Brand 3</div>
        <div className="text-2xl font-bold uppercase tracking-widest font-mono">Brand 4</div>
        <div className="text-2xl font-bold uppercase tracking-widest font-mono">Brand 5</div>
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
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-panel p-8 md:p-10 rounded-3xl relative"
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
        ))}
      </div>
    </section>
  );
}
