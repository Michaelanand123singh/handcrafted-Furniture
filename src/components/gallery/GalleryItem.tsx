import React from 'react';
import { FurnitureItem } from '../../types';

interface GalleryItemProps {
  item: FurnitureItem;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Material: {item.material}</span>
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;