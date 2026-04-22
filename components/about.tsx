'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden"
        >
          {/* Subtle gradient backdrop for the card inside */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-[100px] rounded-full pointer-events-none" />

          {/* Image Side */}
          <div className="w-full lg:w-5/12 relative">
            <div className="aspect-[4/5] w-full relative rounded-2xl overflow-hidden glass shadow-2xl">
              <Image 
                src="/photos/aidenbaker.png"
                alt="Aiden Baker"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                unoptimized
              />
            </div>
            
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-8 -right-8 md:-right-12 glass-panel p-6 rounded-2xl transform rotate-3"
            >
              <div className="font-bold text-lg leading-tight mb-1">Content Manager @ Holdmate</div>
              <div className="text-sm text-gray-500 font-medium">MagSafe retainer cases.</div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center relative z-10">
            <h2 className="font-editorial text-4xl md:text-6xl mb-8">
              Creator. Founder.<br />Strategic Partner.
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
              <p>
                I’m not just a hired talent reading a script. I’m an 18-year-old entrepreneur and strategist who understands the mechanics of grabbing attention and converting it into revenue.
              </p>
              <p>
                Currently, I am the Co-Founder and Content Manager for <a href="https://holdmate.net" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 border-b-2 border-blue-500 hover:text-blue-600 transition-colors">Holdmate</a>, a MagSafe retainer case brand. We built it from nothing, generating millions of organic views and turning virality into a physical business.
              </p>
              <p>
                In my role, I don't just film a bunch of videos myself. I oversee the overarching content strategy, script the funnels, manage other creators, and build a pipeline designed to actually sell. I bring that exact strategic mentality to every project I take on.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-3xl font-bold">18</span>
                <span className="text-sm tracking-widest uppercase text-gray-500 font-bold mt-1">Years Old</span>
              </div>
              <div className="w-px bg-gray-300 mx-4" />
              <div className="flex flex-col">
                <span className="font-mono text-3xl font-bold">100+</span>
                <span className="text-sm tracking-widest uppercase text-gray-500 font-bold mt-1">Videos Made</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
