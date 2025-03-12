import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  images?: string[];
}

const Hero: React.FC<HeroProps> = ({
  headline = "Timeless Craftsmanship, Modern Design",
  subheadline = "Each piece of furniture tells a story, handcrafted with passion and precision to become a treasured part of your home for generations.",
  images = ["/hero-section-img/1.jpg", "/hero-section-img/2.jpg", "/hero-section-img/3.jpg"]
}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sliding background animation
  useEffect(() => {
    const bgElement = backgroundRef.current;
    if (!bgElement) return;
    
    let position = 0;
    let direction = -1; // -1 means moving right to left
    const moveAmount = 10; // Reduced movement for subtlety
    const duration = 25000; // Slower animation for premium feel
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Calculate the current position using easeInOut
      const t = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      position = direction * moveAmount * t;
      
      // Apply the transform
      bgElement.style.transform = `translateX(${position}%)`;
      
      // Reverse direction when reaching the end
      if (progress >= 1) {
        startTime = timestamp;
        direction *= -1; // Flip the direction
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Image transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 7 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full bg-charcoal-900 text-white overflow-hidden -mt-[0px]">
      {/* Background images with sliding effect */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-[120%] transition-transform duration-300 ease-linear"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60 mix-blend-multiply z-10" />
        
        {/* Multiple background images with crossfade */}
        {images.map((image, index) => (
          <img 
            key={image}
            src={image} 
            alt={`Luxury furniture showcase ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1500 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-8 flex items-center h-full">
        <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl animate-fade-in-up pt-16 md:pt-20">
          {/* Optional accent line */}
          <div className="w-12 md:w-16 h-0.5 bg-amber-400 mb-6 md:mb-8" />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
            {headline}
          </h1>
          
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-amber-400 mb-6 md:mb-8 transform translate-x-1" />
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-xl">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link to="/gallery" className="transform transition-transform duration-300 hover:scale-105">
              <Button variant="primary" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium shadow-xl">
                View Our Collection
              </Button>
            </Link>
            <Link to="/contact" className="transform transition-transform duration-300 hover:scale-105">
              <Button variant="secondary" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium border border-white/30 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-all duration-300">
                Request Custom Piece
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent z-10" />
      
      {/* Premium accent elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent z-20" />
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-20">
        <div className="h-24 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
        <div className="h-24 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
      </div>
      
      {/* Scroll indicator with improved animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 animate-pulse">
        <span className="text-xs sm:text-sm text-white/80 mb-2 font-light tracking-widest">EXPLORE</span>
        <div className="relative w-6 h-10 border border-white/30 rounded-full backdrop-blur-sm flex justify-center">
          <span className="absolute top-2 w-1 h-1 bg-amber-400 rounded-full animate-scroll-down"></span>
        </div>
      </div>
      
      {/* Image navigation dots */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentImageIndex ? 'bg-amber-400' : 'bg-white/30'
            } transition-all duration-300`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;