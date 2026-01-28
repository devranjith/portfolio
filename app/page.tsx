'use client';

import Hero from './components/section/Hero';
import About from './components/section/About';
import Projects from './components/section/Projects';
import Contact from './components/section/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
