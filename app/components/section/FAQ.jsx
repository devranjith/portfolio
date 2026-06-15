'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "What is your design and development process?",
    answer: "I start by understanding your goals and target audience. Then, I create a strategic design plan (like this bento grid layout), get your approval, and move into high-fidelity development using Next.js and Tailwind CSS. Finally, I add complex animations and ensure perfect responsive behavior before launch."
  },
  {
    question: "How long does it take to build a custom portfolio or web app?",
    answer: "A custom landing page or portfolio typically takes 1-2 weeks. Full web applications with databases and user authentication usually take 3-6 weeks depending on complexity. I always guarantee 100% on-time delivery as agreed upon."
  },
  {
    question: "Do you use templates?",
    answer: "No. Every project is built from scratch to match your unique brand identity and goals. I use modern frameworks like Next.js and Framer Motion to create bespoke experiences that standard templates cannot achieve."
  },
  {
    question: "Can you help with SEO and performance?",
    answer: "Absolutely. I build all websites with SEO best practices baked in—including semantic HTML, proper metadata, and lightning-fast load times using server-side rendering and optimized assets."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg md:text-xl font-medium text-black dark:text-white pr-8">{faq.question}</h3>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 text-[#3A36FF]"
        >
          <Plus className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#111]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-medium mb-4 text-black dark:text-white"
          >
            Frequently Asked Questions.
          </motion.h2>
          <p className="text-gray-500">Everything you need to know about working with me.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800"
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
