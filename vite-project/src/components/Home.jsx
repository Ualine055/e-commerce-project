import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();
  const featured = products.slice(0, 8);

  return (
    <>
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

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium products designed to elevate your everyday life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featured.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-xs tracking-widest text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-900 font-bold mb-3">{product.price}</p>
                <button
                  onClick={() => {
                    addToCart(product);
                    alert(`${product.name} has been added to your cart!`);
                  }}
                  className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-block border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
