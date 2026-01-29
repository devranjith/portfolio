'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users } from 'lucide-react';
import { Card } from '../ui/card';

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency across all devices.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating technical concepts clearly.',
    },
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Git', 'Docker', 'AWS'
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About{' '}
            
              <span className="bg-clip-text  bg-linear-to-r from-foreground to-foreground/60 text-[#2b9348]">
                 Me
              </span>
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to building exceptional digital experiences
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="p-8 bg-card/50 backdrop-blur">
              <p className="text-md leading-relaxed mb-6">
                I'm a full-stack web developer with over 2+ years of experience building modern web
                applications. I specialize in JavaScript technologies and love creating seamless
                user experiences that solve real-world problems.
              </p>
              <p className="text-md leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects,
                writing technical articles, or exploring new technologies. I believe in continuous
                learning and sharing knowledge with the developer community.
              </p>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:border-primary/50 transition-colors">
                    <Icon color='#2b9348' className="h-12 w-12 mb-4 text-primary " />
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
           
            
              <span className="bg-clip-text  bg-linear-to-r from-foreground to-foreground/60 text-[#2b9348]">
                 Technologies
              </span>   {' '}
               I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
