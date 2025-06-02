
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/catalogue', label: 'Catalogue' },
    { path: '/realise', label: 'Realise' },
  ];

  return (
    <>
      {/* Desktop Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[60] hidden md:block">
        <div className="glass-effect rounded-full px-8 py-4 shadow-2xl">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 mr-4">
              <div className="bg-red-gradient p-2 rounded-lg">
                <Settings className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">TEKNIKELLER</span>
            </Link>

            {/* Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                  location.pathname === item.path
                    ? 'text-red-400 bg-red-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-[60] md:hidden">
        <div className="glass-effect rounded-full px-6 py-3 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-red-gradient p-2 rounded-lg">
                <Settings className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">TEKNIKELLER</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                      location.pathname === item.path
                        ? 'text-red-400 bg-red-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
