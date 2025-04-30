import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaBookOpen, FaInfoCircle } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest('#sidebar') && !e.target.closest('#menu-button')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="bg-[#f9f9f9] dark:bg-gray-900 shadow-md sticky top-0 z-50 dark:text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide">AirGuns</Link>

        {/* Hamburger Icon */}
        <button
          id="menu-button"
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Open Menu"
        >
          <svg className="w-7 h-7 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700 dark:text-gray-200">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`} id="sidebar">
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} aria-label="Close Menu" className="text-gray-800 dark:text-white hover:text-red-500">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col px-6 space-y-6 text-lg font-medium text-gray-700 dark:text-gray-200">
          <NavLinks onClick={closeMenu} withIcons />
        </div>

        {/* Theme Toggle at Bottom */}
        <div className="absolute bottom-0 w-full px-6 pb-6">
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Dark mode</div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

// Reusable Nav Links Component with optional icons
function NavLinks({ onClick, withIcons = false }) {
  return (
    <>
      <Link to="/" onClick={onClick} className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition">
        {withIcons && <FaHome />} Home
      </Link>
      <Link to="/products" onClick={onClick} className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition">
        {withIcons && <FaBoxOpen />} Products
      </Link>
      <Link to="/manuals" onClick={onClick} className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition">
        {withIcons && <FaBookOpen />} Manuals
      </Link>
      <Link to="/about" onClick={onClick} className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition">
        {withIcons && <FaInfoCircle />} About Us
      </Link>
    </>
  );
}
