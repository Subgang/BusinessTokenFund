import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <Logo className="h-10 w-auto" />
          <span className="text-xl font-montserrat font-extrabold">BTF</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/businesses" 
            className={({ isActive }) => 
              `font-montserrat font-semibold hover:text-cosmic-purple transition-colors ${
                isActive ? 'text-cosmic-purple' : 'text-text'
              }`
            }
          >
            Businesses
          </NavLink>
          <NavLink 
            to="/index" 
            className={({ isActive }) => 
              `font-montserrat font-semibold hover:text-cosmic-purple transition-colors ${
                isActive ? 'text-cosmic-purple' : 'text-text'
              }`
            }
          >
            Index Fund
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              `font-montserrat font-semibold hover:text-cosmic-purple transition-colors ${
                isActive ? 'text-cosmic-purple' : 'text-text'
              }`
            }
          >
            Dashboard
          </NavLink>
          <button className="btn btn-primary">
            <Wallet className="mr-2 h-5 w-5" />
            Connect Wallet
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg text-text hover:bg-accent hover:bg-opacity-20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-background"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 space-y-4">
            <NavLink 
              to="/businesses" 
              className={({ isActive }) => 
                `block py-2 font-montserrat font-semibold ${
                  isActive ? 'text-cosmic-purple' : 'text-text'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Businesses
            </NavLink>
            <NavLink 
              to="/index" 
              className={({ isActive }) => 
                `block py-2 font-montserrat font-semibold ${
                  isActive ? 'text-cosmic-purple' : 'text-text'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Index Fund
            </NavLink>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `block py-2 font-montserrat font-semibold ${
                  isActive ? 'text-cosmic-purple' : 'text-text'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </NavLink>
            <button className="btn btn-primary w-full">
              <Wallet className="mr-2 h-5 w-5" />
              Connect Wallet
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;