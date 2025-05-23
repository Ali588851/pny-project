import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Facebook, Youtube, Twitter } from 'lucide-react';
import logo from '../images/ghurki-logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/department', label: 'Department' },
    { path: '/hospital', label: 'Hospital-Amenities' },
    { path: '/appointment', label: 'Book Appointment' },
  ];

  return (
    <header className="w-full shadow-sm">
      {/* 🔴 Top Strip */}
      <div className="bg-red-600 h-11 flex justify-between items-center px-4 md:px-6 text-white text-xs md:text-sm font-medium">
        <div className="flex gap-4">
          <NavLink to="/lab-reports" className="hover:underline">Online Lab Reports</NavLink>
          <NavLink to="/gchs" className="hover:underline">GCHS</NavLink>
          <NavLink to="/contact" className="hover:underline">Contact</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/GhurkiTrustTeachingHospital" target="_blank" rel="noopener noreferrer">
            <Facebook size={18} className="hover:text-blue-300 transition" />
          </a>
          <a href="https://www.youtube.com/GhurkiTrustTeachingHospital" target="_blank" rel="noopener noreferrer">
            <Youtube size={18} className="hover:text-red-300 transition" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={18} className="hover:text-blue-300 transition" />
          </a>
        </div>
      </div>

      {/* ⚪ Main Navbar */}
      <nav className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Ghurki Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-gray-800 font-medium text-base md:text-lg">
            {navItems.map((item) => (
              <li key={item.path} className="relative group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? 'text-red-600 font-semibold' : 'hover:text-red-600 transition-colors duration-200'
                  }
                >
                  {item.label}
                </NavLink>

                {/* Dropdown for Departments */}
                {item.label === 'Department' && (
                  <ul className="absolute left-0 top-full mt-2 w-52 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                    {['NEPHROLOGY', 'OPHTHALMOLOGY', 'GASTROENTEROLOGY', 'Plastic Surgery', 'Physiotherapy', 'Radiology'].map(dept => (
                      <li key={dept} className="px-4 py-2 hover:bg-gray-100">
                        <Link to={`/${dept.replace(/\s+/g, '')}`}>{dept}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="w-0 group-hover:w-full h-0.5 bg-red-600 transition-all duration-300"></div>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <ul className="md:hidden px-4 pb-4 flex flex-col gap-4 text-gray-800 font-medium text-base bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? 'text-red-600 font-semibold' : 'hover:text-red-600 transition-colors duration-200'
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
