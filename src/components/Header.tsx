
import { useState, useEffect } from 'react';
import { Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 py-4 transition-all duration-500 ${
        isScrolled ? 'bg-netflix-black' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Left side: Logo and navigation */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-netflix-red font-bold text-3xl transform -skew-x-12">
                NETFLIX
              </span>
            </div>
          </Link>
          
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-sm font-medium hover:text-white/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#series" className="text-sm font-medium hover:text-white/80 transition-colors">
                  Series
                </a>
              </li>
              <li>
                <a href="#movies" className="text-sm font-medium hover:text-white/80 transition-colors">
                  Movies
                </a>
              </li>
              <li>
                <a href="#new" className="text-sm font-medium hover:text-white/80 transition-colors">
                  New & Popular
                </a>
              </li>
              <li>
                <a href="#mylist" className="text-sm font-medium hover:text-white/80 transition-colors">
                  My List
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right side: Search, Notifications */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className={`flex items-center transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-64' : 'w-auto'}`}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1 hover:text-white/80 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Titles, people, genres"
                  className="bg-netflix-black/90 text-white w-full ml-2 py-1 px-2 text-sm border-b border-white/20 focus:outline-none focus:border-white/50 transition-all"
                  autoFocus
                />
              )}
            </div>
          </div>
          
          <button className="p-1 hover:text-white/80 transition-colors">
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
