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

// import React from 'react'

// export default function Products() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// Yes, you can absolutely simplify your Products.jsx component by removing the external ProductCard component and the products data file, and instead define everything directly inside Products.jsx. This is useful for quick prototyping or if you want to keep things self-contained.

// import { useState } from 'react';

// export default function Products() {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const categories = ['All', 'Electronics', 'Fashion', 'Accessories'];

//   const products = [
//     {
//       id: 1,
//       name: 'Wireless Headphones',
//       category: 'Electronics',
//       price: '$99',
//       image: 'https://via.placeholder.com/300x200?text=Headphones',
//     },
//     {
//       id: 2,
//       name: 'Leather Wallet',
//       category: 'Accessories',
//       price: '$49',
//       image: 'https://via.placeholder.com/300x200?text=Wallet',
//     },
//     {
//       id: 3,
//       name: 'Smartwatch',
//       category: 'Electronics',
//       price: '$199',
//       image: 'https://via.placeholder.com/300x200?text=Smartwatch',
//     },
//     {
//       id: 4,
//       name: 'Silk Scarf',
//       category: 'Fashion',
//       price: '$29',
//       image: 'https://via.placeholder.com/300x200?text=Scarf',
//     },
//   ];

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
//             <div key={product.id} className="bg-white rounded-lg shadow p-4 text-center">
//               <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
//               <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-2">{product.category}</p>
//               <p className="text-accent font-bold">{product.price}</p>
//             </div>
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




import { useState } from 'react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Fashion', 'Accessories'];

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: '25,000 rwf',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1165',
    },
    {
      id: 2,
      name: 'Leather Wallet',
      category: 'Accessories',
      price: '49,000 rwf',
      image: 'https://via.placeholder.com/300x200?text=Wallet',
    },
    {
      id: 3,
      name: 'Smartwatch',
      category: 'Electronics',
      price: '199,000 rwf',
      image: 'https://via.placeholder.com/300x200?text=Smartwatch',
    },
    {
      id: 4,
      name: 'Silk Scarf',
      category: 'Fashion',
      price: '29,000 rwf',
      image: 'https://via.placeholder.com/300x200?text=Scarf',
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      price: '79,000 rwf',
      image: 'https://via.placeholder.com/300x200?text=Speaker',
    },
    {
      id: 6,
      name: 'Sunglasses',
      category: 'Accessories',
      price: '59,000 rwf',
      image: 'https://via.placeholder.com/300x200?text=Sunglasses',
    },
    {
      id: 7,
      name: 'Canvas Tote Bag',
      category: 'Fashion',
      price: '39,000 rwf',
      image: 'https://via.placeholder.com/300x200?text=Tote+Bag',
    },
    {
      id: 8,
      name: 'Fitness Tracker',
      category: 'Electronics',
      price: '129,000 rwf',
      image: 'https://via.placeholder.com/300x200?text=Tracker',
    },
  ];

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

