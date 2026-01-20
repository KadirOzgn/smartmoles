
import React from 'react';

const WhatSection: React.FC = () => {
  return (
    <section id="what" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-700 font-bold tracking-widest uppercase text-sm"></span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-900">SmartMole's Akıllı Yönetim Sistemi</h2>
          <p className="text-lg text-gray-500">İşletmenize kazandıracağımız somut değerler.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Proven Savings */}
          <div className="flex flex-col group bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Proven Savings" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                <span className="text-white font-bold text-2xl drop-shadow-lg">%50'ye Varan</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-gray-900">
              <span className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-base font-bold shadow-sm">✓</span> 
              <span>Kanıtlanmış Tasarruf</span>
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              İşletme giderlerinizi ve su tüketiminizi <span className="text-green-700 font-bold">%50'ye varan oranlarda düşürür.</span> Verimlilik odaklı amortisman planıyla yatırımınız hızla geri döner.
            </p>
          </div>

          {/* Flawless Appearance */}
          <div className="flex flex-col group bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Premium Lush Golf Course Landscape" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                <span className="text-white font-bold text-lg drop-shadow-lg">Mükemmel Peyzaj</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-gray-900">
              <span className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-base font-bold shadow-sm">✓</span> 
              <span>Premium Peyzaj Kalitesi</span>
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Sararan çimlere son verir. Golf sahalarınızda ve otel bahçenizde peyzaj kalitesini <span className="text-green-700 font-semibold">standardize eder</span>, misafir deneyimini mükemmelleştirir.
            </p>
          </div>

          {/* Sustainability Report */}
          <div className="flex flex-col group bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sustainability Report" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                <div className="flex gap-2">
                  <span className="bg-white/25 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md border border-white/40 font-bold shadow-md">LEED</span>
                  <span className="bg-white/25 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md border border-white/40 font-bold shadow-md">GREEN KEY</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-gray-900">
              <span className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-base font-bold shadow-sm">✓</span> 
              <span>Sürdürülebilirlik Raporu</span>
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Karbon ayak izinizi düşürerek <span className="italic text-green-700 font-semibold">LEED, BREEAM</span> ve <span className="italic text-green-700 font-semibold">Green Key</span> gibi sertifikasyon süreçlerinizi verilerle destekler.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
