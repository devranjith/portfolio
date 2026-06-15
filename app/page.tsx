'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';

import IDCardGate from './components/section/IDCardGate';
import About from './components/section/About';
import Projects from './components/section/Projects';
import Pricing from './components/section/Pricing';
import FAQ from './components/section/FAQ';
import Contact from './components/section/Contact';

import TunnelSection from './components/TunnelSection';

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="min-h-screen bg-transparent relative">
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }} // Removed scale: 1.1 to fix horizontal scroll
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#f0f0f5] dark:bg-[#0d0d12] transition-colors duration-500"
          >
            <IDCardGate onEnter={() => {
              setEntered(true);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full relative"
          >
            {/* System Exit / Return to Gate Button */}
            <div className="fixed top-6 right-6 z-[100]">
              <button 
                onClick={() => setEntered(false)}
                className="group flex items-center gap-2 bg-[#16161b] hover:bg-[#ff3366] text-white px-4 py-2 rounded-full border border-white/10 transition-all duration-300 shadow-lg"
              >
                <span className="font-mono text-xs uppercase tracking-widest">Exit</span>
                <LogOut className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <TunnelSection><About /></TunnelSection>
            <TunnelSection><Projects /></TunnelSection>
            <TunnelSection><Pricing /></TunnelSection>
            <TunnelSection><FAQ /></TunnelSection>
            <TunnelSection><Contact /></TunnelSection>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
