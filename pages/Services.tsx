import React from 'react';
import { Briefcase, TrendingUp, Users, Rocket, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { PageView } from '../types';

interface ServicesProps {
  onNavigate: (page: PageView) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'briefcase': return <Briefcase size={32} />;
      case 'trending-up': return <TrendingUp size={32} />;
      case 'users': return <Users size={32} />;
      case 'rocket': return <Rocket size={32} />;
      default: return <Briefcase size={32} />;
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="bg-corporate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Our Expertise</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Delivering tailored financial solutions for a complex world.</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image / Graphic Side */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg relative group">
                    <img 
                      src={`https://picsum.photos/id/${100 + index}/800/600`}
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-corporate-900/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center text-gold-600 mb-6">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-corporate-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description} We utilize a rigorous methodology to identify opportunities that others miss, ensuring optimal returns while managing downside risk.
                  </p>
                  <ul className="space-y-3 mb-8 text-gray-700">
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></div> Customized strategy implementation</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></div> Continuous performance monitoring</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></div> Access to global expertise</li>
                  </ul>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="group flex items-center text-corporate-900 font-bold hover:text-gold-600 transition-colors"
                  >
                    Discuss your needs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-corporate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Ready to elevate your financial strategy?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Connect with our advisors today to discover how Raharjo Capital can help you achieve your goals.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-gold-500 text-white px-10 py-4 rounded-full font-bold hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/20"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;