
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img 
              src="https://smartmoles.com/assets/logo/smartmoles-logo.png" 
              alt="SmartMole's Logo" 
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          
          <div className="text-gray-400 text-sm text-center">
            © 2026 SmartMoles Akıllı Sulama Sistemleri. Tüm Hakları Saklıdır. <br />
            Sürdürülebilirlik Raporu | Gizlilik Politikası | KVKK
          </div>

          <div className="flex gap-6">
            <a href="https://tr.linkedin.com/company/smartmoles" target="_blank" className="hover:text-green-500 transition">LinkedIn</a>
            <a href="#" className="hover:text-green-500 transition">Instagram</a>
            <a href="#" className="hover:text-green-500 transition">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
