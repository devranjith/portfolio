'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronRight, Activity, Command } from 'lucide-react';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-24 pb-16 flex items-center noise-bg">
      {/* Soft Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-indigo-400/10 dark:bg-indigo-600/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16">
        
        {/* Left Side: Typography & CTA */}
        <div className="flex-1 w-full z-10 flex flex-col items-start justify-center pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.05] tracking-tight text-[#111] dark:text-white font-medium mb-6">
              Crafting digital <br className="hidden md:block" /> experiences <br className="hidden md:block" /> that <span className="italic text-gray-500 dark:text-gray-400">convert.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mb-10 font-sans font-light leading-relaxed"
          >
            Award-winning portfolio website design. High-contrast typography, premium aesthetics, and meticulous attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button 
              size="lg" 
              className="group bg-[#1a1a1a] hover:bg-black dark:bg-white dark:hover:bg-gray-200 dark:text-black text-white rounded-full px-8 py-7 text-base font-medium transition-all duration-300"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Bento Grid */}
        <div className="flex-1 w-full lg:h-[600px] xl:h-[700px] relative z-10 grid grid-cols-2 grid-rows-3 gap-4 xl:gap-6 mt-8 lg:mt-0">
          
          {/* Card 1: SaaS UI Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card col-span-2 row-span-2 p-6 flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                  <Activity className="w-4 h-4 text-white dark:text-black" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-black dark:text-white">Analytics Pro</h3>
                  <p className="text-xs text-gray-500">Live Dashboard</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Mock Chart Area */}
            <div className="flex-1 w-full bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent rounded-xl border border-gray-200/50 dark:border-gray-800/50 flex items-end p-4 gap-2 h-40">
               {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${height}%` }}
                   transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                   className="flex-1 bg-black/10 dark:bg-white/10 rounded-t-sm relative hover:bg-blue-500/50 dark:hover:bg-blue-400/50 transition-colors cursor-pointer"
                 />
               ))}
            </div>
          </motion.div>

          {/* Card 2: Chrome Sculpture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card col-span-1 row-span-1 overflow-hidden group"
          >
            <img 
              src="/chrome_sculpture.png" 
              alt="Chrome Geometric Sculpture" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
            />
          </motion.div>

          {/* Card 3: Micro-UI Calendar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card col-span-1 row-span-1 p-5 flex flex-col justify-between hover:bg-white/60 dark:hover:bg-black/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <Calendar className="w-5 h-5 text-gray-500" />
              <Command className="w-4 h-4 text-gray-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Upcoming Meeting</p>
              <h4 className="text-lg font-serif font-medium text-black dark:text-white leading-tight">Design Sync</h4>
              <p className="text-xs text-blue-500 mt-2 font-medium">Today, 2:00 PM</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
