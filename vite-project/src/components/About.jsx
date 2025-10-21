import React from 'react';

export default function About() {
  return (  
    <div className="py-16 bg-background">
      <div className="container-custom">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">About LuxeStore</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional shopping experiences since 2020
          </p>
        </div>

        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-secondary rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                LuxeStore was founded with a simple mission: to bring premium quality products to customers who
                appreciate craftsmanship, design, and functionality. We believe that the items you surround yourself
                with should not only serve a purpose but also bring joy and inspiration to your daily life.
              </p>
              <p>
                Our team carefully curates each product in our collection, ensuring that every item meets our rigorous
                standards for quality, sustainability, and design excellence. From electronics to fashion accessories,
                we partner with brands and artisans who share our commitment to creating products that stand the test of
                time.
              </p>
              <p>
                Today, we're proud to serve thousands of customers worldwide, helping them discover products that
                enhance their lifestyle and reflect their personal style. Our journey is just beginning, and we're
                excited to continue growing with our community.
              </p>
            </div>
          </div>
        </div>

        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product undergoes strict quality control to ensure it meets our high standards.
              </p>
            </div>

            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Curated Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                Handpicked products from trusted brands and talented artisans worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Fair Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Competitive prices without compromising on quality or customer service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated support team ready to help with any questions or concerns.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-black">Our Mission</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            To inspire and empower our customers by providing access to thoughtfully designed, high-quality products
            that enhance their daily lives and reflect their unique style. We're committed to sustainability, ethical
            sourcing, and building lasting relationships with our community.
          </p>
        </div>
      </div>
    </div>
  );
}   
