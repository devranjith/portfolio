'use client';

import Hero from './components/section/Hero';
import About from './components/section/About';
import Projects from './components/section/Projects';
import Pricing from './components/section/Pricing';
import FAQ from './components/section/FAQ';
import Contact from './components/section/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
