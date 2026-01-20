
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import HowSection from './components/HowSection';
import WhatSection from './components/WhatSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a href="https://smartmoles.com/" className="flex items-center gap-3">
              <img 
                src="https://smartmoles.com/assets/logo/smartmoles-logo.png" 
                alt="SmartMoles Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
             
            </a>
          </div>
          <div className={`hidden md:flex gap-8 font-medium ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
            <a href="#why" className="hover:text-green-600 transition">Vizyon</a>
            <a href="#how" className="hover:text-green-600 transition">Teknoloji</a>
            <a href="#what" className="hover:text-green-600 transition">Sistem</a>
            <a href="https://smartmoles.com/iletisim" className="hover:text-green-600 transition">İletişim</a>
          </div>
          <a
            href="https://smartmoles.com/iletisim"
            className="bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-800 transition shadow-lg"
          >
            Demo İsteyin
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <WhySection />
        <HowSection />
        <WhatSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
