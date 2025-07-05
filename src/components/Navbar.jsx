import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <span className="text-primary font-serif">TL\-</span>Ride
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>
          <Link to="/trusted" className="text-gray-700 hover:text-primary font-medium">Trusted</Link>
          <Link to="/event" className="text-gray-700 hover:text-primary font-medium">Event</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Right side) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button onClick={toggleMenu} className="mb-6">
            <FiX size={24} />
          </button>
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-primary">About Us</Link>
            <Link to="/trusted" onClick={toggleMenu} className="text-gray-700 hover:text-primary">Trusted</Link>
            <hr className="my-4" />
            <Link to="/event" onClick={toggleMenu} className="text-primary font-semibold text-lg">Event</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
