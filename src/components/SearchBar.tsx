import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Enter your location (e.g., 'T. Nagar, Chennai')",
  className = ""
}) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder={placeholder}
        className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent shadow-sm"
      />
      <button 
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-pink-500 text-white p-2 rounded-full hover:from-violet-700 hover:to-pink-600 transition-all"
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;