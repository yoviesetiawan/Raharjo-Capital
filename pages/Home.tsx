import React from 'react';
import { ArrowRight, BarChart3, ShieldCheck, Globe2 } from 'lucide-react';
import { PageView } from '../types';
import { SERVICES } from '../constants';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative h-[600px] sm:h-[700px] flex items-center bg-corporate-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
             <img 
                src="https://picsum.photos/id/1031/1920/1080" 
                alt="Background" 
                className="w-full h-full object-cover grayscale"
             />
             <div className="absolute inset-0 bg-corporate-900/50 mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Strategic Capital for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Sustainable Growth
              </span>
            </h1>
            <p 
              className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Raharjo Capital is a premier investment firm dedicated to unlocking value and driving innovation across Southeast Asia's dynamic markets.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-gold-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
              >
                Partner With Us <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all flex items-center justify-center"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="text-center p-4">
            <div className="text-4xl font-bold text-corporate-900 mb-2">$2.5B+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Assets Under Management</div>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl font-bold text-corporate-900 mb-2">150+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Portfolio Companies</div>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl font-bold text-corporate-900 mb-2">25 Years</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Proven Track Record</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-4">Why Raharjo Capital?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine deep local expertise with global standards to deliver exceptional value to our stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-corporate-900 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-corporate-900 mb-3">Data-Driven Insight</h3>
              <p className="text-gray-600 leading-relaxed">
                Our proprietary market analysis tools and AI-driven models ensure we stay ahead of market trends.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="text-corporate-900 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-corporate-900 mb-3">Risk Management</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize capital preservation through rigorous due diligence and diversified allocation strategies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Globe2 className="text-corporate-900 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-corporate-900 mb-3">Global Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to exclusive investment opportunities through our extensive network of global partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <img 
                src="https://picsum.photos/id/3/800/600" 
                alt="Meeting" 
                className="rounded-2xl shadow-2xl object-cover h-[400px] w-full"
             />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-6">Comprehensive Financial Solutions</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From venture capital for early-stage startups to complex restructuring for established conglomerates, Raharjo Capital provides a full spectrum of financial services tailored to your unique needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {SERVICES.slice(0, 4).map(service => (
                <div key={service.id} className="flex items-center space-x-2 text-corporate-800 font-medium">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => onNavigate('services')}
              className="text-corporate-900 font-bold border-b-2 border-gold-500 pb-1 hover:text-gold-600 transition-colors"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;