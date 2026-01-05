import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-corporate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-serif font-bold text-white tracking-tight mb-4 block">
              Raharjo<span className="text-gold-500">Capital</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering financial growth through strategic investments, integrity, and visionary leadership since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-500">Quick Links</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Our Services</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-500">Services</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>Private Equity</li>
              <li>Wealth Management</li>
              <li>Corporate Advisory</li>
              <li>Venture Capital</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-500">Contact Us</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-gold-500" />
                <span>Sudirman Central Business District (SCBD), Treasury Tower Lt. 28, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-gold-500" />
                <span>+62 21 5555 8888</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-gold-500" />
                <span>invest@raharjocapital.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Raharjo Capital. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;