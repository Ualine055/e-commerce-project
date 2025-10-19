import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold">LuxeStore</div>
      <ul className="flex space-x-6">
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
      <div className="text-2xl cursor-pointer">🛒</div>
    </nav>
  );
}
