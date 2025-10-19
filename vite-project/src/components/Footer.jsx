

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding and Mission */}
        <div>
          <h2 className="text-2xl font-bold text-teal-600">H+ HealthCare</h2>
          <p className="mt-2 text-sm">
            Providing exceptional healthcare services with compassion and excellence since 1985.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline text-gray-500">About Us</a></li>
            <li><a href="/doctors" className="hover:underline text-gray-500">Our Doctors</a></li>
            <li><a href="/services" className="hover:underline text-gray-500">Services</a></li>
            <li><a href="/contact" className="hover:underline text-gray-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">123 Medical Center Drive<br />Healthcare City, HC 12345</p>
          <p className="text-sm mt-2">📞 +1 (555) 123-4567</p>
          <p className="text-sm">📧 info@healthcare.com</p>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <div className="mt-10 text-center text-xs text-gray-500">
        © 2025 HealthCare Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


