import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Phone, Globe, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';
import { allRestaurants } from '../data/restaurants';
import { Restaurant, Review } from '../types';

const RestaurantDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    // Find the restaurant by id
    const foundRestaurant = allRestaurants.find(r => r.id === id);
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
      // In a real app, we would fetch reviews from an API
      setReviews(foundRestaurant.reviews || []);
    }
  }, [id]);

  const handleReviewSubmit = (newReview: { rating: number; comment: string }) => {
    const review: Review = {
      id: `review-${Date.now()}`,
      userName: 'You',
      rating: newReview.rating,
      date: new Date().toLocaleDateString(),
      comment: newReview.comment,
    };
    
    setReviews(prev => [review, ...prev]);
    // In a real app, we would send this to an API
    alert('Thank you for your review!');
  };

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-xl">Loading restaurant details...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Restaurant Header */}
      <div className="relative h-80 bg-gray-900">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <Link to="/restaurants" className="inline-flex items-center text-white mb-4 hover:text-pink-300 transition-colors">
              <ArrowLeft size={16} className="mr-1" />
              Back to Restaurants
            </Link>
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{restaurant.name}</h1>
                <div className="flex items-center text-white mb-1">
                  <Star size={18} className="text-yellow-500 mr-1" fill="#FBBF24" />
                  <span className="font-semibold mr-2">{restaurant.rating}</span>
                  <span className="text-gray-300">({restaurant.reviewCount} reviews)</span>
                </div>
                <p className="text-pink-300">{restaurant.cuisine}</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
                  <Share2 size={20} />
                </button>
                <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
                  <Heart size={20} />
                </button>
                <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="bg-white rounded-t-xl shadow-md">
          {/* Tabs */}
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium text-sm ${
                activeTab === 'overview' 
                  ? 'text-violet-600 border-b-2 border-violet-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-4 font-medium text-sm ${
                activeTab === 'reviews' 
                  ? 'text-violet-600 border-b-2 border-violet-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Reviews ({reviews.length})
            </button>
            <button 
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-4 font-medium text-sm ${
                activeTab === 'photos' 
                  ? 'text-violet-600 border-b-2 border-violet-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Photos
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-violet-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                      <p className="text-gray-600">{restaurant.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock size={20} className="text-violet-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Opening Hours</h3>
                      <p className="text-gray-600">11:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={20} className="text-violet-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Contact</h3>
                      <p className="text-gray-600">+91 {Math.floor(Math.random() * 9000000000) + 1000000000}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">About {restaurant.name}</h2>
                  <p className="text-gray-600 mb-4">
                    {restaurant.description || `${restaurant.name} is one of Chennai's most beloved ${restaurant.cuisine} restaurants, known for its authentic flavors and warm hospitality. Located in the heart of ${restaurant.address.split(',')[0]}, it offers a perfect dining experience for both locals and tourists.`}
                  </p>
                  <p className="text-gray-600">
                    With a rating of {restaurant.rating}/5 from over {restaurant.reviewCount} reviews, it's clear that diners love what they offer. The restaurant prides itself on using fresh, locally-sourced ingredients and traditional cooking methods to create memorable dishes.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Dishes</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="rounded-lg overflow-hidden">
                        <img 
                          src={`https://source.unsplash.com/random/300x200?food,${restaurant.cuisine},${item}`} 
                          alt="Popular dish" 
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Location & Hours</h2>
                  <div className="rounded-lg overflow-hidden h-64 mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                      alt="Map" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                      <p className="text-gray-600 mb-4">{restaurant.address}</p>
                      <button className="text-violet-600 font-medium hover:text-pink-600 transition-colors">Get Directions</button>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Hours</h3>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monday - Thursday</span>
                          <span className="text-gray-800">11:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Friday - Saturday</span>
                          <span className="text-gray-800">11:00 AM - 11:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sunday</span>
                          <span className="text-gray-800">12:00 PM - 9:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                          <span className="text-4xl font-bold text-gray-800 mr-2">{restaurant.rating}</span>
                          <div>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star}
                                  size={20} 
                                  className={star <= restaurant.rating ? "text-yellow-500" : "text-gray-300"} 
                                  fill={star <= restaurant.rating ? "#FBBF24" : "none"} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{restaurant.reviewCount} reviews</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <button 
                          onClick={() => document.getElementById('write-review')?.scrollIntoView({ behavior: 'smooth' })}
                          className="px-4 py-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-medium rounded-md hover:from-violet-700 hover:to-pink-600 transition-colors"
                        >
                          Write a Review
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </div>
                
                <div id="write-review">
                  <ReviewForm onSubmit={handleReviewSubmit} />
                </div>
              </div>
            )}
            
            {activeTab === 'photos' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">Photos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="rounded-lg overflow-hidden">
                      <img 
                        src={`https://source.unsplash.com/random/300x300?restaurant,food,${restaurant.cuisine},${item}`} 
                        alt="Restaurant" 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;