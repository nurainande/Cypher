// src/pages/CheckoutPage.js
import  { useState } from "react";

const CheckoutPage = () => {
  // Sample data for cart items
  const [cartItems] = useState([
    {
      id: 1,
      name: "Smartphone X Pro",
      price: 999,
      quantity: 1,
    },
    {
      id: 2,
      name: "Laptop Z Ultra",
      price: 1999,
      quantity: 1,
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="py-24 px-4 lg:px-24">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <article className="border p-6 rounded-lg shadow-lg bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span>${(totalPrice * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
          </div>
        </article>

        {/* Shipping and Payment Information */}
        <section className="space-y-6">
          <article className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="w-full border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium mb-2"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  className="w-full border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium mb-2"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  className="w-full border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium mb-2"
                >
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  className="w-full border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium mb-2"
                >
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  type="text"
                  className="w-full border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </form>
          </article>

          <article className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Payment Information</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium mb-2"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  className="w-full border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="expirationDate"
                  className="block text-sm font-medium mb-2"
                >
                  Expiration Date
                </label>
                <input
                  id="expirationDate"
                  type="text"
                  className="w-full border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cvv" className="block text-sm font-medium mb-2">
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  className="w-full border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </form>
          </article>

          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Place Order
          </button>
        </section>
      </section>
    </main>
  );
};

export default CheckoutPage;
