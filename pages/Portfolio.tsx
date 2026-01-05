import React from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-corporate-900 mb-4">Investment Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A curated selection of our high-impact investments across diverse sectors.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((item) => (
              <div key={item.id} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.client} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-corporate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-corporate-900">{item.client}</h3>
                    <span className="text-gray-400 text-sm font-mono">{item.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed min-h-[60px]">
                    {item.description}
                  </p>
                  <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Investment Value</p>
                      <p className="text-gold-600 font-bold text-lg">{item.value}</p>
                    </div>
                    <button className="text-corporate-900 text-sm font-medium hover:text-gold-600 transition-colors">
                      View Case Study &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-corporate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div className="p-4 border border-gray-800 rounded-lg">
               <div className="text-3xl font-bold text-gold-500 mb-2">28%</div>
               <div className="text-gray-400 text-sm">Avg. IRR</div>
             </div>
             <div className="p-4 border border-gray-800 rounded-lg">
               <div className="text-3xl font-bold text-gold-500 mb-2">12</div>
               <div className="text-gray-400 text-sm">IPO Exits</div>
             </div>
             <div className="p-4 border border-gray-800 rounded-lg">
               <div className="text-3xl font-bold text-gold-500 mb-2">50+</div>
               <div className="text-gray-400 text-sm">Active Investments</div>
             </div>
             <div className="p-4 border border-gray-800 rounded-lg">
               <div className="text-3xl font-bold text-gold-500 mb-2">4</div>
               <div className="text-gray-400 text-sm">Continents</div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;