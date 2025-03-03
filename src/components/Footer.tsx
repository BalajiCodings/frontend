import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">TastyTrack</h3>
            <p className="text-gray-300 mb-4">
              Discover the best restaurants in Chennai with TastyTrack. Find top-rated places to eat based on genuine reviews.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Restaurants</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Popular Cuisines</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">South Indian</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">North Indian</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Chinese</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Italian</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Continental</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Anna Salai, Chennai, Tamil Nadu 600002</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">info@tastytrack.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TastyTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;