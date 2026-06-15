'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function IDCardGate({ onEnter }) {
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-300, 300], [45, -45]);
  const rotateY = useTransform(x, [-300, 300], [-180, 180]);
  
  const springConfig = { damping: 20, stiffness: 100 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center perspective-[2000px] overflow-hidden bg-[#f0f0f5] dark:bg-[#0d0d12] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] before:absolute before:inset-0 before:bg-white/40 dark:before:bg-black/40 before:mix-blend-overlay transition-colors duration-500">
      
      <p className="absolute top-10 text-gray-500 text-sm tracking-widest uppercase pointer-events-none">Drag to rotate • Click Enter to access</p>

      {/* The Lanyard Ribbon */}
      <motion.div 
        className="absolute top-0 w-16 h-[30vh] bg-gradient-to-b from-[#1a15ff] to-[#3A36FF] origin-top z-0 shadow-[0_0_50px_rgba(58,54,255,0.3)]"
        style={{
          clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
        }}
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1.5 }}
      />

      {/* The Floating Wrapper */}
      <motion.div
        animate={{
          y: ["-10px", "10px", "-10px"],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="relative z-10 w-[90vw] max-w-[400px] h-[550px] mt-[10vh]"
      >
        {/* The 3D Draggable Card Wrapper */}
        <motion.div
          ref={cardRef}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={1}
          style={{
            x, y,
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full relative cursor-grab active:cursor-grabbing"
        >
        
        {/* Lanyard Clip */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#f0f0f5] dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-full z-20 flex items-center justify-center shadow-lg" style={{ transform: "translateZ(1px)" }}>
          <div className="w-12 h-2 bg-[#3A36FF] rounded-full" />
        </div>

        {/* --- FRONT OF CARD --- */}
        <div 
          className="absolute inset-0 bg-white/90 dark:bg-[#16161b] backdrop-blur-xl rounded-3xl border border-black/10 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 flex flex-col justify-between overflow-hidden transition-colors duration-500"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          {/* Top ambient highlight */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/[0.03] dark:from-white/[0.03] to-transparent pointer-events-none" />

          <div>
            <h2 className="text-[#111] dark:text-white text-2xl font-medium mb-2 transition-colors duration-500">Portfolio Access</h2>
            <p className="text-gray-500 dark:text-[#888] text-sm leading-relaxed mb-8 transition-colors duration-500">
              Welcome to my digital workspace. Gain access to view my latest projects, skills, and professional experience.
            </p>

            <div className="space-y-5" onPointerDownCapture={(e) => e.stopPropagation()}>
              <div>
                <label className="text-gray-500 dark:text-[#888] text-xs block mb-1.5 ml-1 transition-colors duration-500">Full Name</label>
                <div className="w-full bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/5 rounded-xl px-4 py-3.5 text-gray-800 dark:text-[#ccc] text-sm font-medium transition-colors duration-500">
                  Ranjith K
                </div>
              </div>

              <div>
                <label className="text-gray-500 dark:text-[#888] text-xs block mb-1.5 ml-1 transition-colors duration-500">Email Address</label>
                <div className="w-full bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/5 rounded-xl px-4 py-3.5 text-gray-800 dark:text-[#ccc] text-sm font-medium transition-colors duration-500">
                  webdevranjit@gmail.com
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer mt-6">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-white dark:bg-[#0a0a0c] border-black/10 dark:border-white/10 accent-[#3A36FF]" />
                <span className="text-gray-500 dark:text-[#666] text-xs transition-colors duration-500">Confirm identity to enter workspace</span>
              </label>
            </div>
          </div>

          <button 
            onClick={onEnter}
            onPointerDownCapture={(e) => e.stopPropagation()}
            className="w-full bg-[#3A36FF] hover:bg-[#4d49ff] text-white font-medium py-3.5 rounded-xl transition-colors shadow-[0_0_20px_rgba(58,54,255,0.4)] active:scale-[0.98]"
          >
            Enter
          </button>
          
          <div className="text-center mt-6">
             <p className="text-gray-400 dark:text-[#444] text-[10px] transition-colors duration-500">For inquiries, contact at: webdevranjit@gmail.com</p>
          </div>
        </div>

        {/* --- BACK OF CARD --- */}
        <div 
          className="absolute inset-0 bg-white/90 dark:bg-[#16161b] backdrop-blur-xl rounded-3xl border border-black/10 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transition-colors duration-500"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Same Lanyard Clip for the back */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#f0f0f5] dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-full z-20 flex items-center justify-center shadow-lg">
            <div className="w-12 h-2 bg-[#3A36FF] rounded-full" />
          </div>

          <div className="h-2/3 w-full relative">
            <img 
              src="/Images/appe1.png"
              alt="Portrait" 
              className="w-full h-full object-cover object-top pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#16161b] to-transparent transition-colors duration-500" />
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
             <h3 className="text-[#111] dark:text-white text-xl font-medium transition-colors duration-500">Ranjith K</h3>
             <p className="text-[#3A36FF] text-sm mt-1 mb-4">Full Stack Web Developer</p>
             <div className="flex gap-4">
                <div className="bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/5 px-4 py-2 rounded-lg transition-colors duration-500">
                  <p className="text-[#111] dark:text-white font-medium transition-colors duration-500">2+</p>
                  <p className="text-gray-500 dark:text-[#666] text-[10px] uppercase tracking-wider transition-colors duration-500">Years Exp</p>
                </div>
                <div className="bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/5 px-4 py-2 rounded-lg transition-colors duration-500">
                  <p className="text-[#111] dark:text-white font-medium transition-colors duration-500">100%</p>
                  <p className="text-gray-500 dark:text-[#666] text-[10px] uppercase tracking-wider transition-colors duration-500">On-Time</p>
                </div>
             </div>
          </div>
        </div>

        </motion.div>
      </motion.div>

    </div>
  );
}
