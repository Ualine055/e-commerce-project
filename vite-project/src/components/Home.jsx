import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
        Discover timeless <br className="hidden md:block" />
        elegance in every detail
      </h1>

      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10">
        Transform your space with our curated collection of premium products.
        Quality craftsmanship meets modern design.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/products"
          className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
        >
          Shop Now
        </Link>
        <button className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
          Learn More
        </button>


      </div>
      
    </section>
  );
}
