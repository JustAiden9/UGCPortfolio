'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const features = [
  {
    id: "script",
    title: "Script-First Approach",
    description: "Every second counts. I write tight, hook-optimized scripts based on direct response marketing principles. It's not just a video; it's a funnel.",
    image: "https://picsum.photos/seed/script/800/1000",
  },
  {
    id: "delivery",
    title: "Natural Delivery",
    description: "Gen Z can smell an ad from a mile away. My delivery is authentic, fast-paced, and seamlessly native to the platform's organic feed.",
    image: "https://picsum.photos/seed/delivery/800/1000",
  },
  {
    id: "editing",
    title: "Hook-Optimized Editing",
    description: "Relentless pacing. Sound design. Dynamic punch-ins. The editing is deliberately crafted to reset audience attention every 3 seconds.",
    image: "https://picsum.photos/seed/editing/800/1000",
  },
  {
    id: "safe",
    title: "Brand-Safe Results",
    description: "Premium aesthetics combined with UGC authenticity. The final deliverables are polished, compliant, and ready to scale aggressively.",
    image: "https://picsum.photos/seed/safe/800/1000",
  }
];

export default function StickyTour() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto flex gap-12 lg:gap-24 items-start">
      {/* Left side scrolling text */}
      <div className="w-full md:w-1/2 pt-[10vh] pb-[40vh]">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-5xl md:text-6xl mb-6"
          >
            The Framework.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Good UGC isn&apos;t accidental. It&apos;s engineered. Here&apos;s how I consistently build creatives that break the baseline.
          </motion.p>
        </div>

        {features.map((feature, idx) => (
          <FeatureText 
            key={feature.id} 
            feature={feature} 
            index={idx} 
            setActiveFeature={setActiveFeature} 
          />
        ))}
      </div>

      {/* Right side sticky media */}
      <div className="hidden md:flex w-1/2 sticky top-24 h-[80vh] items-center justify-center">
        <div className="w-full max-w-[450px] aspect-[9/16] relative rounded-[2rem] overflow-hidden glass-panel shadow-2xl p-2 bg-white/40">
          <div className="w-full h-full relative rounded-3xl overflow-hidden bg-black">
             {features.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: activeFeature === idx ? 1 : 0,
                    scale: activeFeature === idx ? 1 : 0.95,
                    zIndex: activeFeature === idx ? 10 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill 
                    className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  {activeFeature === idx && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-white backdrop-blur-md">
                        <Play fill="currentColor" size={24} className="ml-1" />
                      </div>
                    </div>
                  )}
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureText({ feature, index, setActiveFeature }: { feature: any, index: number, setActiveFeature: (n: number) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveFeature(index);
    }
  }, [isInView, index, setActiveFeature]);

  return (
    <div ref={ref} className={`py-32 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-30'}`}>
      <h3 className="text-3xl font-bold mb-4 tracking-tight">{feature.title}</h3>
      <p className="text-lg text-gray-700 leading-relaxed max-w-md">{feature.description}</p>
      
      {/* Mobile media inline */}
      <div className="md:hidden mt-8 w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg border border-white/20">
        <Image 
          src={feature.image} 
          alt={feature.title} 
          fill 
          className="object-cover" 
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
