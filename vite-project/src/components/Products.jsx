// import { useState } from 'react';
// // import ProductCard from '../../src/components/ProductCard';
// // import { products } from '../../src/data/products';

// export default function Products() {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const categories = ['All', 'Electronics', 'Fashion', 'Accessories'];

//   const filteredProducts =
//     selectedCategory === 'All'
//       ? products
//       : products.filter((product) => product.category === selectedCategory);

//   return (
//     <div className="py-16 bg-background">
//       <div className="container-custom">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Products</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Browse our complete collection of premium products across all categories.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
//                 selectedCategory === category
//                   ? 'bg-primary text-white'
//                   : 'bg-secondary text-primary hover:bg-accent/10'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>

//         {/* No Products Message */}
//         {filteredProducts.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-600 text-lg">No products found in this category.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React from 'react'

export default function Products() {
  return (
    <div>
      
    </div>
  )
}
