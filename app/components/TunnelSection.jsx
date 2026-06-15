'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

export default function TunnelSection({ children }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.7, 1], [1, 1.1]);
  const blurRadius = useTransform(scrollYProgress, [0.7, 1], [0, 20]);
  const filter = useMotionTemplate`blur(${blurRadius}px)`;

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale, filter }}
      className="relative w-full z-10 origin-center"
    >
      {children}
    </motion.div>
  );
}
