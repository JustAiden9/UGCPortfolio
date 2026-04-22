'use client';

import { motion } from 'motion/react';
import { Smartphone, Coffee, Package, ShoppingBag } from 'lucide-react';

const niches = [
  {
    title: "Tech & Gadgets",
    icon: Smartphone,
    description: "Highly technical products explained simply, paired with crisp visuals and rapid pacing."
  },
  {
    title: "Lifestyle & Wellness",
    icon: Coffee,
    description: "Aesthetic, authentic delivery that focuses on the transformation and feeling of the product."
  },
  {
    title: "Physical Products",
    icon: Package,
    description: "Unboxings, B-roll, and demonstrations that tactilely convey quality through the screen."
  },
  {
    title: "Amazon & DTC",
    icon: ShoppingBag,
    description: "Direct response videos engineered from hook to CTA to drive immediate conversions on platform."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-5xl md:text-7xl mb-6"
        >
          Specialties.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Tailored content creation for the industries I know best.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {niches.map((niche, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
            className="group relative glass-panel p-8 rounded-[2rem] hover:bg-white/60 transition-colors duration-500 overflow-hidden"
          >
            {/* Hover flare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundSize: '200% 200%', backgroundPosition: 'left bottom' }} />
            
            <div className="w-14 h-14 rounded-full bg-blue-100/50 flex items-center justify-center mb-6 text-blue-600 border border-blue-200 group-hover:scale-110 transition-transform duration-500">
              <niche.icon size={28} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 tracking-tight">{niche.title}</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              {niche.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
