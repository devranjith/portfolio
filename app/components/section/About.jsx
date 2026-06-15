'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.35], [0.2, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.5], [0.2, 1]);
  
  const bodyOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const statsY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);
  const statsOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="relative h-[120vh] bg-[#f0f0f5] dark:bg-[#0d0d12] z-20 transition-colors duration-500"
    >
      <div className="sticky top-0 min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-12">
        
        {/* Full Screen Content Wrapper */}
        <div className="relative w-full h-full flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden pt-12">
          
          {/* Lanyard Clip (Theme consistency) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-b-3xl z-20 flex items-center justify-center shadow-lg transition-colors duration-500">
            <div className="w-16 h-2 bg-[#3A36FF] rounded-full" />
          </div>

          <div className="w-full max-w-4xl mx-auto z-10 flex flex-col items-center text-center mt-4 md:mt-8">
            
            {/* Scroll Revealed Headline */}
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-black dark:text-white font-medium mb-6 tracking-tight transition-colors duration-500">
              <motion.span style={{ opacity: opacity1 }}>Stop losing customers </motion.span>
              <br className="hidden md:block" />
              <motion.span style={{ opacity: opacity2 }}>to <span className="italic text-gray-400 dark:text-gray-500">slow, outdated</span> </motion.span>
              <br className="hidden md:block" />
              <motion.span style={{ opacity: opacity3 }}>websites.</motion.span>
            </h2>

            {/* Scroll Revealed Body */}
            <motion.p 
              style={{ opacity: bodyOpacity }}
              className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-[#888] font-sans font-light leading-relaxed max-w-3xl mx-auto mb-6 transition-colors duration-500"
            >
              Your digital presence should be an asset, not a liability. Whether you need a high-converting landing page, a complex web application, or a scalable e-commerce platform—I engineer fast, premium solutions that turn your visitors into loyal clients.
            </motion.p>

            {/* Stats / Guarantees Grid */}
            <motion.div 
              style={{ opacity: statsOpacity, y: statsY }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full max-w-4xl"
            >
              <div className="bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/5 p-5 md:p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors duration-500 shadow-sm dark:shadow-none">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-3 md:mb-4 text-[#3A36FF] group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-black dark:text-white font-medium mb-2 transition-colors duration-500">Lightning Fast</h4>
                <p className="text-sm text-gray-500 dark:text-[#666] transition-colors duration-500">Optimized architectures that load instantly and perform flawlessly.</p>
              </div>

              <div className="bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/5 p-5 md:p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors duration-500 shadow-sm dark:shadow-none">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-3 md:mb-4 text-[#3A36FF] group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-black dark:text-white font-medium mb-2 transition-colors duration-500">Built to Convert</h4>
                <p className="text-sm text-gray-500 dark:text-[#666] transition-colors duration-500">Strategic UI/UX design focused on maximizing your business goals.</p>
              </div>

              <div className="bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/5 p-5 md:p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors duration-500 shadow-sm dark:shadow-none">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-3 md:mb-4 text-[#3A36FF] group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-black dark:text-white font-medium mb-2 transition-colors duration-500">Scalable Systems</h4>
                <p className="text-sm text-gray-500 dark:text-[#666] transition-colors duration-500">Robust e-commerce and full-stack solutions ready for massive traffic.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
