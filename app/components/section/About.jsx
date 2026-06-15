'use client';

import { motion } from 'framer-motion';
import { Clock, Briefcase, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#fcfcfc] dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Floating Image */}
          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ y: -15 }}
              animate={{ y: 15 }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut"
              }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              <img 
                src="/about_me.png" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-3xl z-20 pointer-events-none"></div>
            </motion.div>

            {/* Decorative blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 dark:bg-blue-400/10 blur-[80px] rounded-full -z-10" />
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-black dark:text-white">
                About Me.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light mb-8 max-w-lg leading-relaxed">
                I am a passionate web developer dedicated to building premium digital experiences. I believe in clean code, perfect pixel design, and seamless user interactions.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-medium text-black dark:text-white">2+</h4>
                    <p className="text-sm text-gray-500 mt-1">Years Experience</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-500/10 rounded-xl">
                    <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-medium text-black dark:text-white">100%</h4>
                    <p className="text-sm text-gray-500 mt-1">On-Time Delivery</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium">
                <Award className="w-4 h-4" />
                Available for new projects
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
