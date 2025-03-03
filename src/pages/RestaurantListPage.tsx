import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import RestaurantCard from '../components/RestaurantCard';
import { Restaurant } from '../types';

const RestaurantListPage = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [activeFilters, setActiveFilters] = useState({
    sort: 'rating',
    cuisine: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  // ✅ Fetch restaurants from backend API
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/restaurants"); // API Call
        const data = await response.json();
        setRestaurants(data); // Store data in state
        setFilteredRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  // ✅ Apply filters and search
  useEffect(() => {
    let result = [...restaurants];

    if (activeFilters.cuisine) {
      result = result.filter(restaurant =>
        restaurant.cuisine.toLowerCase().includes(activeFilters.cuisine.toLowerCase())
      );
    }

    if (searchQuery) {
      result = result.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    result.sort((a, b) => {
      if (activeFilters.sort === 'rating') {
        return b.rating - a.rating;
      } else if (activeFilters.sort === 'reviews') {
        return b.reviewCount - a.reviewCount;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

    setFilteredRestaurants(result);
  }, [restaurants, activeFilters, searchQuery]);

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Restaurants in Chennai</h1>
          <SearchBar 
            onSearch={handleSearch} 
            placeholder="Search by name, location, or cuisine..."
          />
        </div>
        
        <FilterBar 
          onFilterChange={handleFilterChange}
          activeFilters={activeFilters}
        />
        
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No restaurants found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantListPage;
