import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path 
      ? 'text-wood-700 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-wood-500'
      : 'text-charcoal-700 hover:text-wood-600 transition-all duration-300 hover:scale-105';
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className={`
          rounded-full 
          ${scrolled ? 'bg-white/90 backdrop-filter backdrop-blur-sm' : 'bg-transparent'} 
          shadow-lg
          py-3 px-6 
          transition-all duration-300
          ${scrolled ? 'shadow-md' : 'shadow-none'}
        `}>
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="font-serif  font-bold text-wood-800 flex items-center gap-2 transition-transform hover:scale-105 duration-300"
            >
              <svg 
                className="h-8 w-8 text-wood-600" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Handcrafted Furniture</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className={`py-2 inline-block ${isActive('/')}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className={`py-2 inline-block ${isActive('/gallery')}`}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`py-2 inline-block ${isActive('/contact')}`}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/quote" 
                    className="ml-4 inline-flex items-center justify-center px-4 py-2 bg-wood-600 text-white rounded-full hover:bg-wood-700 transition-colors shadow-sm hover:shadow"
                  >
                    Get Quote
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-charcoal-800 focus:outline-none p-2 rounded-full hover:bg-gray-100" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white mt-2 rounded-2xl mx-4 shadow-lg overflow-hidden">
          <div className="py-3 px-6">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className={`block py-3 px-4 rounded-lg ${isActive('/').includes('after') ? 'bg-wood-50' : 'hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className={`block py-3 px-4 rounded-lg ${isActive('/gallery').includes('after') ? 'bg-wood-50' : 'hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/contact" 
                  className={`block py-3 px-4 rounded-lg ${isActive('/contact').includes('after') ? 'bg-wood-50' : 'hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  to="/quote" 
                  className="block py-3 px-4 bg-wood-600 text-white rounded-lg hover:bg-wood-700 transition-colors text-center shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;