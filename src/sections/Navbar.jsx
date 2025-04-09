import { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {}, isActive }) => (
  <ul className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
    {navLinks.map((item) => (
      <li key={item.id}>
        <a 
          href={item.href} 
          onClick={onClick}
          className={`relative text-lg font-medium text-neutral-400 hover:text-white transition-colors duration-300 py-2 
            ${isActive === item.id ? 'text-white' : ''}
            after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 
            after:transition-all after:duration-300 hover:after:w-full`}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scrolling and section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Active section detection - only when menu is closed
      if (!isOpen) {
        const sections = navLinks.map(link => document.getElementById(link.id));
        const currentSection = sections.findIndex(section => {
          if (!section) return false;
          const rect = section.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        });
        
        if (currentSection !== -1) {
          setActiveSection(navLinks[currentSection].id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Control body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Main header - always visible */}
      <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="group relative flex items-center">
              <span className="text-white font-bold text-xl relative z-10">
                Omolemo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden sm:block">
              <NavItems isActive={activeSection} />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="sm:hidden text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current top-3 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Completely separate from the header */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex items-center justify-center">
          <button
            onClick={closeMenu}
            className="absolute top-5 right-5 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Close menu"
          >
            <div className="w-6 h-6 relative">
              <span className="absolute h-0.5 w-full bg-current transform rotate-45 top-3"></span>
              <span className="absolute h-0.5 w-full bg-current transform -rotate-45 top-3"></span>
            </div>
          </button>
          
          <div className="flex flex-col items-center justify-center">
            <NavItems onClick={closeMenu} isActive={activeSection} />
            
            <div className="mt-10 flex gap-4">
              <a href="https://github.com/omocodes" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/mo.dialeo" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;