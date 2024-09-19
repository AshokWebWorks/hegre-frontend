import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll event listener to change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
    id='header'
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-500 ease-in-out ${scrolled ? 'bg-[#17191bcb] shadow-lg' : 'bg-[#17191b] '}`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-white">
         H-Gallery
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-6">
        <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/models" className="text-white hover:text-gray-300">
              Models
            </Link>
          </li>
          <li>
            <Link to="/buy" className="text-white hover:text-gray-300">
              Buy
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu with smooth transition */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col space-y-3 mt-4 text-center">
          <li><Link to="/" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/models" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Models</Link></li>
          <li><Link href="/buy" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Buy</Link></li>
          <li><Link href="/about" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>About</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
