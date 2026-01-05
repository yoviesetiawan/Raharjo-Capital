import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="animate-in fade-in duration-500">
      
      <div className="bg-corporate-900 py-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-400">Let's discuss how we can build your future together.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-corporate-900 mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 flex-shrink-0 mt-1">
                  <MapPin size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-corporate-900">Headquarters</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Treasury Tower Lt. 28, District 8, SCBD Lot 28<br />
                    Jl. Jend. Sudirman Kav. 52-53<br />
                    Jakarta Selatan 12190, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 flex-shrink-0 mt-1">
                  <Mail size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-corporate-900">Email</h3>
                  <p className="text-gray-600 mt-2">
                    invest@raharjocapital.co.id<br />
                    press@raharjocapital.co.id
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 flex-shrink-0 mt-1">
                  <Phone size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-corporate-900">Phone</h3>
                  <p className="text-gray-600 mt-2">
                    +62 21 5555 8888 (Main)<br />
                    +62 21 5555 9999 (Fax)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 flex-shrink-0 mt-1">
                  <Clock size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-corporate-900">Office Hours</h3>
                  <p className="text-gray-600 mt-2">
                    Monday - Friday: 08:30 - 17:30<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-corporate-900 mb-6">Send a Message</h2>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl text-center">
                <p className="font-bold mb-2">Thank you for contacting us!</p>
                <p className="text-sm">Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-sm font-semibold underline hover:text-green-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a topic...</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="wealth">Wealth Management Inquiry</option>
                    <option value="advisory">Corporate Advisory</option>
                    <option value="media">Media/Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-corporate-900 text-white font-bold py-4 rounded-lg hover:bg-gold-600 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;