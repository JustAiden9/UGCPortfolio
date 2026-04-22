'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const projects = [
  {
    brand: "View Instagram",
    category: "Reel",
    image: "/photos/TT1.jpg",
    link: "https://www.instagram.com/reel/DXXWzu3DSZd/?igsh=bzhmZ3dlaGdpcjFt",
  },
  {
    brand: "View TikTok",
    category: "Campaign",
    image: "/photos/TT2.jpg",
    link: "https://www.tiktok.com/t/ZP8g4dfNp/",
  },
  {
    brand: "View TikTok",
    category: "Native",
    image: "/photos/TT3.jpg",
    link: "https://www.tiktok.com/t/ZP8g4Rtc9/",
  },
  {
    brand: "View TikTok",
    category: "Viral",
    image: "/photos/TT4.jpg",
    link: "https://www.tiktok.com/t/ZP8g4JsFM/",
  },
  {
    brand: "View Instagram",
    category: "Campaign",
    image: "/photos/TT5.jpg",
    link: "https://www.instagram.com/reel/DXEuUDcDZU8/?igsh=ZWN6OGc1ZHo2NXY=",
  },
  {
    brand: "View Instagram",
    category: "Reel",
    image: "/photos/TT6.jpg",
    link: "https://www.instagram.com/reel/DXEeCNwDgHM/?igsh=bGpoenY0d3J5bzZm"
  }
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
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i} 
              className="relative w-[75vw] sm:w-[400px] h-[55vh] md:h-[600px] rounded-[2rem] overflow-hidden group shrink-0 glass-panel shadow-xl shadow-blue-500/10 block"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <Image 
                src={project.image} 
                alt={project.brand}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex justify-end items-end">
                {/* Play button hint */}
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white/30 transition-colors">
                  <Play fill="currentColor" strokeWidth={1.5} size={26} className="ml-1" />
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
