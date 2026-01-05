import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="bg-corporate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">About Raharjo Capital</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Building a legacy of wealth, integrity, and trust for generations.</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-6">Our History</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998 by Budi Raharjo amidst the Asian Financial Crisis, Raharjo Capital began with a singular mission: to rebuild and strengthen the economic fabric of Indonesia through prudent investment and strategic guidance.
                </p>
                <p>
                  Over the past two decades, we have evolved from a boutique advisory firm into a multi-asset class investment powerhouse. We have weathered market cycles, technological disruptions, and global shifts, emerging stronger and more adaptable each time.
                </p>
                <p>
                  Today, we manage over $2.5 billion in assets, serving institutions, family offices, and high-net-worth individuals who share our vision of long-term value creation.
                </p>
              </div>
            </div>
             <div className="md:w-1/2 relative">
               <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500 rounded-2xl z-0"></div>
               <img 
                  src="https://picsum.photos/id/103/800/600" 
                  alt="Office History" 
                  className="rounded-2xl shadow-xl relative z-10 w-full"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600">Guided by experience, driven by innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-corporate-900">{member.name}</h3>
                  <p className="text-gold-600 font-medium text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;