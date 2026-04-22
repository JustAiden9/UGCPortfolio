'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

const projects = [
  {
    brand: "Apple",
    category: "Tech",
    image: "https://picsum.photos/seed/apple/800/1200", // Placeholder
  },
  {
    brand: "Nike",
    category: "Lifestyle",
    image: "https://picsum.photos/seed/nike/800/1200",
  },
  {
    brand: "Olipop",
    category: "CPG",
    image: "https://picsum.photos/seed/olipop/800/1200",
  },
  {
    brand: "Dyson",
    category: "Home Tech",
    image: "https://picsum.photos/seed/dyson/800/1200",
  },
  {
    brand: "Ridge",
    category: "Accessories",
    image: "https://picsum.photos/seed/ridge/800/1200",
  },
];

export default function WorkReel() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Scroll mapping
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section id="work" ref={targetRef} className="relative h-[300vh] bg-transparent">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
        
        <div className="px-6 md:px-12 mb-8 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2"
          >
            Selected Work
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-5xl md:text-7xl"
          >
            Proof in the pixels.
          </motion.h3>
        </div>

        {/* The scrolling track */}
        <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-6 md:px-12 w-max">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="relative w-[75vw] sm:w-[400px] h-[55vh] md:h-[600px] rounded-[2rem] overflow-hidden group shrink-0 glass-panel shadow-xl shadow-blue-500/10"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <Image 
                src={project.image} 
                alt={project.brand}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex justify-between items-end">
                <div>
                  <div className="text-white/80 text-xs font-bold tracking-widest uppercase mb-1 drop-shadow-md">
                    {project.category}
                  </div>
                  <div className="text-white text-3xl font-editorial drop-shadow-md">
                    {project.brand}
                  </div>
                </div>
                {/* Play button hint */}
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white backdrop-blur-md hover:bg-white/30 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
