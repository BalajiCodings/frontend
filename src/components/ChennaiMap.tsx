import React from 'react';

interface ChennaiMapProps {
  className?: string;
}

const ChennaiMap: React.FC<ChennaiMapProps> = ({ className = "" }) => {
  // Using a static map image of Chennai
  const mapImageUrl = "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  
  return (
    <div className={`relative rounded-xl overflow-hidden shadow-lg ${className}`}>
      <img 
        src={mapImageUrl} 
        alt="Chennai Map" 
        className="w-full h-full object-cover"
      />
      
      {/* Restaurant markers - these would be positioned based on actual coordinates */}
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-pink-500 w-4 h-4 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-violet-600 w-4 h-4 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-pink-500 w-4 h-4 rounded-full animate-pulse"></div>
      </div>
      
      {/* Map overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      
      {/* Map caption */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-bold">Explore Chennai's Best Restaurants</h3>
        <p className="text-sm">Discover top-rated dining spots across the city</p>
      </div>
    </div>
  );
};

export default ChennaiMap;