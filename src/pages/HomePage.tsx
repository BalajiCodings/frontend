import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Utensils, Clock, MapPin } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import ChennaiMap from '../components/ChennaiMap';
import { featuredRestaurants } from '../data/restaurants';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (location: string) => {
    // In a real app, we would use the location to filter restaurants
    // For now, just navigate to the restaurants page
    navigate('/restaurants');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-violet-600 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Chennai's Best Restaurants</h1>
            <p className="text-xl mb-8">Find top-rated places to eat based on millions of reviews</p>
            <SearchBar 
              onSearch={handleSearch} 
              className="max-w-xl mx-auto"
            />
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#F9FAFB" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Featured Restaurants</h2>
            <button 
              onClick={() => navigate('/restaurants')}
              className="flex items-center text-violet-600 hover:text-pink-600 transition-colors"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRestaurants.map((restaurant) => (
              <div 
                key={restaurant.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold flex items-center shadow-md">
                    <Star size={16} className="text-yellow-500 mr-1" fill="#FBBF24" />
                    <span>{restaurant.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{restaurant.name}</h3>
                  <p className="text-sm text-pink-600 mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin size={14} className="mr-1" />
                    <span className="truncate">{restaurant.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Chennai's Culinary Map</h2>
              <p className="text-gray-600 mb-6">
                From the bustling streets of T. Nagar to the serene beaches of East Coast Road, 
                Chennai offers a diverse range of culinary experiences. Discover hidden gems and 
                popular hotspots across the city with our interactive map.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-violet-100 p-2 rounded-full mr-3">
                    <Utensils size={20} className="text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">500+ Restaurants</h3>
                    <p className="text-sm text-gray-600">Curated selection of the best places</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-100 p-2 rounded-full mr-3">
                    <Star size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Verified Reviews</h3>
                    <p className="text-sm text-gray-600">From real food enthusiasts</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigate('/restaurants')}
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-medium rounded-full hover:from-violet-700 hover:to-pink-600 transition-colors"
              >
                Find Restaurants Near You
              </button>
            </div>
            
            <ChennaiMap className="h-96" />
          </div>
        </div>
      </section>

      {/* Cuisine Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Explore By Cuisine</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'South Indian', image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f72e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
              { name: 'North Indian', image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
              { name: 'Chinese', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
              { name: 'Italian', image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
              { name: 'Continental', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
              { name: 'Street Food', image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
              { name: 'Seafood', image: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
              { name: 'Desserts', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
            ].map((cuisine, index) => (
              <div 
                key={index}
                className="relative rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => navigate('/restaurants')}
              >
                <div className="aspect-square">
                  <img 
                    src={cuisine.image} 
                    alt={cuisine.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold">{cuisine.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to discover your next favorite restaurant?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of food enthusiasts who have found their perfect dining spots with TastyTrack.
          </p>
          <button 
            onClick={() => navigate('/restaurants')}
            className="px-8 py-3 bg-white text-violet-600 font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Explore Restaurants
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;