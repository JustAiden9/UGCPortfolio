'use client';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight z-50 relative">
            Aiden Baker
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 text-sm font-medium">
              <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            </nav>
            <a href="#contact" className="btn btn-blue">
              Book a Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 p-2 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav - Must be outside header to break out of containing block */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: '-100%', pointerEvents: 'none' }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="md:hidden top-0 left-0 fixed w-screen h-screen z-40 glass-panel bg-white/95 flex flex-col justify-center items-center px-6"
      >
        <nav className="flex flex-col gap-8 text-2xl font-sans font-medium text-center w-full">
          <a href="#work" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-blue-600 transition-colors">Work</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-blue-600 transition-colors">About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-blue-600 transition-colors">Services</a>
          <div className="w-full h-px bg-black/10 my-4" />
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-blue w-full max-w-[200px] mx-auto text-lg">
            Book a Call
          </a>
        </nav>
      </motion.div>
    </>
  );
}
