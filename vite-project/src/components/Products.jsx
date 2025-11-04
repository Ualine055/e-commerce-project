import { useState } from 'react';
import { useCart } from "../context/CartContext";
import { products, categories } from "../data/products";



export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="py-16 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Browse our complete collection of premium products across all categories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-primary hover:bg-accent/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4 text-center">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-accent font-bold">{product.price}</p>

              {/* Add to Cart Button */}
      {/* <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all"
      >
        Add to Cart
      </button> */}

      <button
  onClick={() => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  }}
  className="mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all"
>
  Add to Cart
</button>


            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

