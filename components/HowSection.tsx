
import React from 'react';

const HowSection: React.FC = () => {
  return (
    <section id="how" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-700 font-bold tracking-widest uppercase text-sm"></span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">Doğru Bilinen Yanlışları Değiştiriyoruz</h2>
          <p className="text-xl text-gray-600">Standart sulama sistemleri yüzeyi ıslatırken, biz SmartRoot teknolojimizle derinlere odaklanıyoruz.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Peyzaj Sensörü",
              desc: "SmartRoot teknolojimizle toprağın derinliklerine iner, suyun bitkinin köküne ulaştığı 'o anı' 32 farklı noktadan ölçümle yakalarız.",
              icon: "🌱",
              img: "https://smartmoles.com/assets/images/product/smartmoles-com-smartmoles-sensoru-peyzaj-urun-gorseli-01.webp",
              link: "https://smartmoles.com/urunlerimiz/smartmoles-peyzaj-sensoru/"
            },
            {
              title: "SmartValves",
              desc: "Yapay zeka destekli vana yönetimimiz sayesinde, her damla suyu en verimli şekilde bitkiyle buluşturan akıllı istasyon.",
              icon: "🤖",
              img: "https://smartmoles.com/assets/images/product/smartmoles-com-smart-valves-urun-gorseli-02.webp",
              link: "https://smartmoles.com/urunlerimiz/smartvalves/"
            },
            {
              title: "GW POMPA KONTROL ÜNİTESİ",
              desc: "Kaynak israfını önlemek için; pompalarınızı her mesafeden, kablosuz kontrol altına alıyoruz.",
              icon: "📊",
              img: "https://smartmoles.com/uploads/1767945384902_smartmoles-com-gateway-modbus-lora-control-unit.webp",
              link: "https://smartmoles.com/urunlerimiz/gateway-modbus-lora-basn-lm"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group">
              <div className="h-64 flex items-center justify-center mb-8 w-full bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 overflow-hidden border border-gray-50">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x300?text=${item.title}`;
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-8 px-2">{item.desc}</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-6 py-2 border-2 border-green-700 text-green-700 font-bold rounded-full hover:bg-green-700 hover:text-white transition-all duration-300"
              >
                Ürünü İncele
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-500 italic mb-8">Ürünlerimiz hakkında daha fazla teknik dökümana ulaşmak için kataloğumuzu inceleyebilirsiniz.</p>
          <div className="inline-flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
               <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
               <span className="text-sm font-medium text-gray-700">Canlı Veri Takibi</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
               <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
               <span className="text-sm font-medium text-gray-700">Mobil Uygulama Kontrolü</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
               <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
               <span className="text-sm font-medium text-gray-700">AI Vana Yönetimi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
