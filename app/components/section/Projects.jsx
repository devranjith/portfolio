'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '../ui/badge';

const projects = [
  {
    title: 'Gym Management App',
    description: 'A collaborative gym management application with real-time updates, members features, and analytics. Inspired by modern productivity tools.',
    image: '/Images/app.png',
    tags: ['React.js', 'TypeScript', 'Supabase', 'Tailwindcss'],
    github: 'https://github.com/devranjith',
    demo: 'https://gravity-gym-krishnagiri.vercel.app/',
    color: 'bg-zinc-100 dark:bg-zinc-900',
  },
  {
    title: 'Fintech Dashboard',
    description: 'A highly interactive financial dashboard with complex chart visualizations, real-time data integration, and a premium glassmorphic UI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'Framer Motion', 'Tailwind', 'Recharts'],
    github: 'https://github.com/devranjith',
    demo: '#',
    color: 'bg-slate-100 dark:bg-slate-900',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution featuring a custom cart, Stripe payment gateway, and a headless CMS integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    github: 'https://github.com/devranjith',
    demo: '#',
    color: 'bg-neutral-100 dark:bg-neutral-900',
  }
];

const Card = ({ project, i, progress, range, targetScale }) => {
  const container = useRef(null);
  
  // Scale down the card as we scroll past it
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Parallax effect for the image inside the card
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className={`relative flex flex-col md:flex-row w-full max-w-5xl mx-auto h-[500px] rounded-3xl overflow-hidden shadow-2xl origin-top ${project.color} border border-black/5 dark:border-white/10`}
      >
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-medium mb-4 text-black dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-black dark:text-white border-none">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-blue-500 transition-colors">
              <Github className="w-4 h-4" /> Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-blue-500 transition-colors">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 h-full overflow-hidden relative">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="bg-[#fcfcfc] dark:bg-[#0a0a0a] relative z-10" ref={container}>
      <div className="sticky top-0 h-[30vh] flex items-center justify-center z-0">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-medium mb-4 text-black dark:text-white">Selected Works.</h2>
          <p className="text-gray-500 max-w-md mx-auto">Scroll down to explore some of my recent projects featuring complex integrations and premium designs.</p>
        </div>
      </div>

      <div className="relative z-10 pb-[10vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}
