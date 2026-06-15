'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Landscape SPA',
    category: 'Frontend Architecture',
    image: '/Images/land.png',
  },
  {
    id: '02',
    title: 'Gym SPA',
    category: 'Web Application',
    image: '/Images/gym.png',
  },
  {
    id: '03',
    title: 'Art Gallery SPA',
    category: 'Visual Design & UI',
    image: '/Images/art.png',
  },
  {
    id: '04',
    title: 'Finflow',
    category: 'Fintech Platform',
    image: '/Images/fin.png',
  },
  {
    id: '05',
    title: 'Finance Dashboard',
    category: 'Data Visualization',
    image: '/Images/dash.png',
  },
  {
    id: '06',
    title: 'AI Code Assistant',
    category: 'Machine Learning UI',
    image: '/Images/app.png',
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="relative w-full min-h-screen bg-[#f0f0f5] dark:bg-[#0d0d12] py-32 flex flex-col items-center justify-center overflow-hidden z-20 transition-colors duration-500"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <p className="text-[#ff3366] font-mono text-sm tracking-widest uppercase mb-4 animate-pulse">Classified Files</p>
          <h2 className="text-[#111] dark:text-white text-5xl md:text-7xl font-serif font-light transition-colors duration-500">Featured Work.</h2>
        </div>

        {/* The Wall of Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.map((project, i) => {
            const swayDuration = 3.5 + Math.random();
            
            return (
              <motion.div
                key={project.id}
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring", 
                  damping: 12, 
                  stiffness: 100, 
                  delay: i * 0.15 
                }}
                className="relative flex flex-col items-center origin-top pt-6"
              >
                <motion.div
                  animate={{ rotateZ: [1.5, -1.5, 1.5] }}
                  transition={{ 
                    duration: swayDuration, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                  }}
                  whileHover={{ 
                    rotateZ: 0, 
                    y: -15, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformOrigin: "top center" }}
                  className="w-full max-w-[300px] h-[480px] bg-white/90 dark:bg-[#16161b] backdrop-blur-xl border border-black/10 dark:border-white/5 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group flex flex-col justify-between relative transition-colors duration-500"
                >
                  
                  {/* Top ambient highlight matching Hero card */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/[0.03] dark:from-white/[0.03] to-transparent pointer-events-none rounded-t-3xl" />

                  {/* The Hanging Pin / Lanyard Clip exactly like Hero but red */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#f0f0f5] dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-full z-30 flex items-center justify-center shadow-lg transition-colors duration-500">
                    <div className="w-12 h-2 bg-[#ff3366] rounded-full shadow-[0_0_10px_rgba(255,51,102,0.6)]" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Project Image */}
                    <div className="w-full h-[180px] rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/5 bg-white dark:bg-[#0a0a0c] mb-6 mt-2 shrink-0 transition-colors duration-500">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#ff3366]/0 group-hover:bg-[#ff3366]/20 transition-colors duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0 w-12 h-12 bg-[#ff3366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,51,102,0.8)]">
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Form-style details matching Hero card */}
                    <div className="space-y-4 flex-1">
                      <div>
                        <label className="text-gray-500 dark:text-[#888] text-[10px] uppercase tracking-wider block mb-1.5 ml-1 transition-colors duration-500">Project Title</label>
                        <div className="w-full bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/5 rounded-xl px-3 py-3 text-[#111] dark:text-white text-sm font-medium group-hover:border-[#ff3366]/30 transition-colors duration-300">
                          {project.title}
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-500 dark:text-[#888] text-[10px] uppercase tracking-wider block mb-1.5 ml-1 transition-colors duration-500">Category / Tech</label>
                        <div className="w-full bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/5 rounded-xl px-3 py-3 text-gray-800 dark:text-[#ccc] text-xs font-medium transition-colors duration-500">
                          {project.category}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <span className="text-[#ff3366] font-mono text-xl font-bold tracking-widest">{project.id}</span>
                      <span className="text-gray-500 dark:text-[#666] font-mono text-[9px] tracking-widest uppercase flex items-center gap-2 transition-colors duration-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff3366] animate-pulse" />
                        Clearance L5
                      </span>
                    </div>
                  </div>

                  {/* Ambient Glow */}
                  <div className="absolute inset-0 bg-[#ff3366]/0 group-hover:bg-[#ff3366]/[0.02] rounded-3xl transition-colors duration-500 pointer-events-none" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
