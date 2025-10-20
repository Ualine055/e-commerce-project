import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="p-6 md:p-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              <p className="text-gray-600">Qty: {item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-3">Total: ${total}</h3>
          <button
            onClick={clearCart}
            className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Clear Cart
          </button>
        </div>
      )}
    </section>
  );
}
