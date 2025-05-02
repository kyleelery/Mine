import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Button from './common/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ShoppingCart className="h-8 w-8 mr-2 text-indigo-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              CartGuardian AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-700 hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-700 hover:text-indigo-600 transition-colors">
              How It Works
            </a>
            <a href="#demo" className="text-slate-700 hover:text-indigo-600 transition-colors">
              Demo
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-indigo-600 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-slate-700 hover:text-indigo-600 transition-colors">
              FAQ
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors mr-2"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Open menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 px-2 mt-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#demo" 
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Demo
              </a>
              <a 
                href="#pricing" 
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <Button fullWidth onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;