import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { FurnitureItem } from '../../types';

const featuredItems: FurnitureItem[] = [
  {
    id: 1,
    title: "Walnut Dining Table",
    image: "/featured-img/walnut.jpg",
    description: "A statement centerpiece with live-edge walnut and hand-carved details.",
    featured: true,
    category: "dining",
    material: "Walnut"
  },
  {
    id: 2,
    title: "Oak Bookshelf",
    image: "/featured-img/oak.jpg",
    description: "Solid oak bookshelf with adjustable shelving and dovetail joinery.",
    featured: true,
    category: "storage",
    material: "Oak"
  },
  {
    id: 3,
    title: "Cherry Coffee Table",
    image: "/featured-img/cherry.jpg",
    description: "Cherry wood coffee table featuring a distinctive river glass inlay.",
    featured: true,
    category: "living",
    material: "Cherry"
  }
];

interface FeaturedWorksProps {
  title?: string;
  subtitle?: string;
}

const FeaturedWorks: React.FC<FeaturedWorksProps> = ({
  title = "Featured Works",
  subtitle = "Explore our signature pieces, each handcrafted with meticulous attention to detail and designed to last generations."
}) => {
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 tracking-tight relative inline-block">
          {title}
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-wood-600"></span>
        </h2>
        <p className="text-charcoal-600 max-w-2xl mx-auto mt-8 text-lg">
          {subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {featuredItems.map((item) => (
          <div key={item.id} className="group">
            <div className="relative overflow-hidden rounded-lg mb-6 shadow-warm transform transition-transform duration-500 group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              <div className="absolute bottom-0 left-0 p-4 z-20">
                <span className="inline-block px-3 py-1 bg-wood-700 text-cream text-xs font-semibold tracking-wide rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {item.material}
                </span>
              </div>
            </div>
            
            <div className="px-2">
              <div className="flex items-center mb-3">
                <span className="text-xs uppercase tracking-widest text-wood-600 font-medium">
                  {item.category}
                </span>
                <span className="ml-2 w-8 h-px bg-charcoal-300"></span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-wood-700 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-charcoal-600 mb-5 leading-relaxed">
                {item.description}
              </p>
              
              <Link to={`/gallery/${item.id}`} className="inline-flex items-center text-charcoal-800 font-medium hover:text-wood-600 transition-colors duration-300">
                View Details
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <Link to="/gallery">
          <Button 
            variant="secondary" 
            className="px-8 py-4 border-2 border-wood-600 hover:bg-wood-600 hover:text-white transition-colors duration-300"
          >
            View All Works
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedWorks;