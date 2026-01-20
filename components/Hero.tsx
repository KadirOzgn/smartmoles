

import React from 'react';

const Hero: React.FC = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* PDF Header - Only visible in print */}
      <div className="pdf-header absolute top-0 left-0 right-0 z-50 hidden justify-between items-center px-6 py-4">
        <img 
          src="https://smartmoles.com/assets/logo/smartmoles-logo.png" 
          alt="SmartMoles Logo" 
          className="h-10 w-auto brightness-0 invert"
        />
        <a
          href="https://smartmoles.com/iletisim"
          className="bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg text-white/80"
        >
          <span className="text-white">
          Demo İsteyin
          </span>
        </a>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-block mb-4 px-4 py-1 border border-white/30 rounded-full text-white/80 text-sm tracking-widest uppercase bg-white/10 backdrop-blur-sm">
          Prestij & Sürdürülebilirlik
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Sadece Çimlerinizi Değil, <br />
          <span className="italic">Geleceğin Turizmini</span> Yeşertiyoruz.
        </h1>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
          SmartMoles ile suyun her damlasını bir yatırıma dönüştürün. Otelinizin prestijini teknolojiyle koruyun.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://smartmoles.com/"
            className="bg-white text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl"
          >
            Detayları Keşfedin
          </a>
          <button
            onClick={handleDownloadPDF}
            className="pdf-download-btn border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition backdrop-blur-sm flex items-center justify-center gap-2 no-print"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            PDF / Katalog İndir
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce scroll-indicator no-print">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
