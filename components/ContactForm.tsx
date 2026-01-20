
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 font-serif">Peyzajınızı Geleceğe Hazırlayalım.</h2>
          <p className="text-xl text-gray-600 mb-8">
            İşletmenize özel tasarruf analizi ve demo sunumu için uzman ekibimizle iletişime geçin.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">📞</div>
              <span className="font-semibold">+90 232 464 25 84</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">✉️</div>
              <span className="font-semibold">info@smartmoles.com</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl w-full max-w-md text-center">
            <div className="text-5xl mb-6">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Verimlilik Analizi</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Mevcut sisteminizin verimliliğini ölçmek ve tasarruf potansiyelinizi görmek için uzmanlarımıza başvurun.
            </p>
            <a 
              href="https://smartmoles.com/iletisim" 
              className="inline-block w-full bg-green-800 text-white py-5 rounded-xl font-bold text-xl hover:bg-green-900 transition shadow-lg shadow-green-900/20 active:scale-95"
            >
              <span className="text-white">
              Tasarruf Analizi İstiyorum
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
