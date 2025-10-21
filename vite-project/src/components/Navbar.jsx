import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold">L+ Luxestore</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/" className="hover:underline font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:underline font-medium">
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline font-medium">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline font-medium">
            Contact
          </Link>
        </li>
      </ul>

      {/* Cart */}
      <div className="flex items-center gap-4">
        <div className="text-xl font-semibold cursor-pointer">🛒</div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (only visible when open) */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          <li>
            <Link
              to="/"
              className="font-medium hover:text-yellow-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="font-medium hover:text-yellow-600"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-medium hover:text-yellow-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-medium hover:text-yellow-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
