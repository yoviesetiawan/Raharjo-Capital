import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page: PageView) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNav('home')}
          >
            <div className="bg-corporate-900 p-2 rounded-lg group-hover:bg-gold-500 transition-colors duration-300">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-2xl font-serif font-bold text-corporate-900 tracking-tight">
              Raharjo<span className="text-gold-500">Capital</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold-600 ${
                  currentPage === item.id 
                    ? 'text-corporate-900 border-b-2 border-gold-500' 
                    : 'text-gray-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNav('contact')}
              className="bg-corporate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gold-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-corporate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  currentPage === item.id 
                    ? 'bg-gray-50 text-gold-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-corporate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;