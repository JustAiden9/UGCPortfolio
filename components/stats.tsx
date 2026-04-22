'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

// Basic counter component for numbers
function Counter({ from = 0, to, duration = 2, suffix = '', decimals = 0 }: { from?: number, to: number, duration?: number, suffix?: string, decimals?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing (easeOutExpo)
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setValue(ease * (to - from) + from);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}

export default function Stats() {
  const containerRef = useRef(null);
  
  const stats = [
    { value: 3.5, suffix: 'M+', label: 'Organic Views', decimals: 1 },
    { value: 5, suffix: '+', label: 'Brand Partners' },
    { value: 10, prefix: '$', suffix: 'k+', label: 'Tracked Revenue' },
    { value: 98, suffix: '%', label: 'Client Retention' },
  ];

  return (
    <section id="stats" className="py-24 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-4 overflow-hidden relative"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-2">
                {stat.prefix}
                <Counter to={stat.value} duration={2.5} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </div>
              <div className="text-sm uppercase tracking-wider font-semibold text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
          
          {/* Subtle dividing lines for desktop, handled differently maybe? Just relying on flex gaps for now is cleaner */}
        </motion.div>
      </div>
    </section>
  );
}
