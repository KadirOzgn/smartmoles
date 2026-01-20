
import React from 'react';

const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Sol Kolon: Kusursuz Peyzaj ve Lüks Otel Mimari Uyumu */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-50 rounded-full -z-10"></div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&q=80&w=1200"
                alt="Kusursuz Otel Peyzajı ve Konaklama Alanı"
                className="rounded-2xl shadow-2xl w-full h-[650px] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 ring-inset bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Peyzaj Mimari Vurgusu Rozeti */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 border border-green-100">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-[10px] font-black text-gray-800 uppercase tracking-[0.2em]">Peyzaj Mimarisi & Mühendislik</span>
              </div>
            </div>

            <div className="absolute bottom-8 -right-8 bg-green-900 text-white p-8 rounded-xl shadow-xl max-w-xs lg:block border border-white/10 z-20">
              <p className="italic text-lg font-serif leading-relaxed">
                "Suyu yönetemeyen toprağını koruyamaz."
              </p>
            </div>
          </div>

          {/* Sağ Kolon: İçerik */}
          <div className="flex flex-col h-full justify-center">
            <span className="text-green-700 font-bold tracking-widest uppercase text-sm mb-4">Vizyonumuz</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight font-serif">
              Lüks ve Doğanın <br />Kusursuz Uyumu
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Lüksün ve konforun, doğadan ödün vermeden de mümkün olduğuna inanıyoruz. Bir otelin peyzajı sadece görsel bir şölen değil, o işletmenin doğaya ve misafirine duyduğu saygının aynasıdır.
              </p>

              <div className="bg-green-50 p-6 border-l-4 border-green-700 rounded-r-xl shadow-sm">
                <p className="font-semibold text-gray-800 italic">
                  "Green Key" hedeflerinizi şansa değil, bilime emanet ediyoruz.
                </p>
              </div>

              <p>
                Sürdürülebilir turizm bir tercih değil, geleceğin standardıdır. Markanızı korumak, toprağınızı ve suyunuzu doğru yönetmekten geçer. Akıllı otomasyon sistemlerimizle doğayı teknolojiyle dinliyoruz.
              </p>
            </div>

            {/* Prestij ve Ekoloji Kartları */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-center transition-all hover:bg-white hover:shadow-md group">
                <span className="text-3xl font-bold text-green-800 font-serif group-hover:text-green-600 transition-colors">Prestij</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest mt-1">Yüksek Standart</span>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-center transition-all hover:bg-white hover:shadow-md group">
                <span className="text-3xl font-bold text-green-800 font-serif group-hover:text-green-600 transition-colors">Ekoloji</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest mt-1">Sürdürülebilirlik</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
