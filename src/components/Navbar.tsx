import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Utensils className="h-8 w-8" />
          <span className="text-2xl font-bold">TastyTrack</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-pink-200 transition-colors">Home</Link>
          <Link to="/restaurants" className="hover:text-pink-200 transition-colors">Restaurants</Link>
          <a href="#" className="hover:text-pink-200 transition-colors">About</a>
          <a href="#" className="hover:text-pink-200 transition-colors">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;