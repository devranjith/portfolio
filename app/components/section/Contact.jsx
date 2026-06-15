'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Initializing secure connection...' },
    { type: 'system', text: 'Connection established. Security Protocol: Level 5.' },
    { type: 'system', text: 'Execute command: ./book_call.sh' },
    { type: 'system', text: '----------------------------------------' },
    { type: 'prompt', text: 'Please enter your email address to verify identity:' }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState('email'); // email -> message -> processing -> complete
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Keep input focused
  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      const currentInput = input.trim();
      setInput('');

      // Add user input to history
      setHistory(prev => [...prev, { type: 'user', text: currentInput }]);

      // Process based on step
      if (step === 'email') {
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'prompt', text: 'Identity verified. Enter your project transmission (message):' }]);
          setStep('message');
        }, 500);
      } else if (step === 'message') {
        setStep('processing');
        
        // Simulated loading sequence
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'system', text: 'Encrypting payload...' }]);
        }, 500);
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'system', text: 'Routing through secure proxies...' }]);
        }, 1500);
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'system', text: 'Payload delivered successfully.' }]);
        }, 2500);
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'prompt', text: 'Awaiting manual override to initiate call protocol.' }]);
          setStep('complete');
        }, 3000);
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="relative w-full min-h-screen bg-[#f0f0f5] dark:bg-[#0d0d12] py-24 flex flex-col items-center justify-center overflow-hidden z-20 transition-colors duration-500"
    >
      <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-[#3A36FF] font-mono text-sm tracking-widest uppercase mb-4">Secure Channel</p>
          <h2 className="text-[#111] dark:text-white text-5xl md:text-6xl font-serif font-light transition-colors duration-500">Establish Contact.</h2>
        </div>

        {/* The Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#111116] border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col"
        >
          {/* Terminal Header (macOS style) */}
          <div className="h-10 bg-[#1a1a24] border-b border-white/5 flex items-center px-4 justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-[#666] font-mono text-xs">guest@portfolio: ~</div>
            <div className="w-12" /> {/* Spacer for centering */}
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base min-h-[400px] flex flex-col">
            
            {/* Output History */}
            {history.map((line, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-2"
              >
                {line.type === 'system' && (
                  <span className="text-[#888]">{line.text}</span>
                )}
                {line.type === 'prompt' && (
                  <span className="text-[#3A36FF]">{line.text}</span>
                )}
                {line.type === 'user' && (
                  <div className="flex">
                    <span className="text-[#27c93f] mr-2">guest@portfolio:~$</span>
                    <span className="text-white">{line.text}</span>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Active Input Line */}
            {step !== 'processing' && step !== 'complete' && (
              <div className="flex mt-2">
                <span className="text-[#27c93f] mr-2">guest@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white caret-white"
                  autoFocus
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            )}

            {/* Blinking Cursor during processing */}
            {step === 'processing' && (
              <div className="mt-2">
                <motion.div 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2.5 h-5 bg-white inline-block"
                />
              </div>
            )}

            {/* The Final Reveal Button */}
            <AnimatePresence>
              {step === 'complete' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  className="mt-12 flex justify-center pb-4"
                >
                  <a 
                    href="mailto:hello@example.com"
                    className="relative group overflow-hidden rounded-full p-[2px] bg-[#3A36FF] hover:shadow-[0_0_40px_rgba(58,54,255,0.6)] transition-all duration-300"
                  >
                    <div className="bg-[#111116] px-12 py-4 rounded-full flex items-center justify-center gap-3 transition-colors group-hover:bg-opacity-0">
                      <span className="text-white font-mono font-bold tracking-widest uppercase">Initiate Secure Call</span>
                      <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={bottomRef} />
          </div>
        </motion.div>
        
        {/* Subtle grid background specific to terminal section */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />

        {/* Minimal Footer */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#666] font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#ff3366] rounded-full animate-pulse" />
          © 2026 Developer // System Offline
        </div>
      </div>
    </section>
  );
}
