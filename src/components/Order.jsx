import React, { useState } from "react";
import { Link } from "react-router-dom";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    productId: 1, // example product ID for the order
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4 py-25">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row">
        {/* Order Form Section */}
        <div className="w-full md:w-2/3 space-y-6">
          {orderConfirmed ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Order Confirmed!
              </h2>
              <p className="text-gray-700 mb-4">
                Thank you for your order. We will process it shortly.
              </p>
              <Link
                to={"/confirm"}
                className="bg-green-600 text-white px-6 py-2 rounded-full mt-4 hover:bg-green-700 transition"
                onClick={() => setOrderConfirmed(false)}
              >
                Go to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-3xl font-extrabold text-center text-gray-800">
                Ayurvedic Product Order
              </h2>
              <p className="text-center text-gray-500 mb-6">
                Please fill in your details to complete the order.
              </p>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Shipping Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    rows="4"
                    placeholder="Enter your address"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg w-full hover:bg-green-700 transition"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Aside Section */}
        <div className="w-full md:w-1/3 ml-1 p-6 border-t md:border-l border-gray-200 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Product Information
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Ayurvedic products are made with natural ingredients to promote
            health and wellness. Each product is carefully crafted to ensure the
            highest quality and effectiveness.
          </p>
          <div className="text-lg font-semibold text-gray-800 mb-4">
            <p>Product Price: ₹499</p>
            <p className="text-green-600">Rating: 4.9/5</p>
          </div>
          <p className="text-sm text-gray-500">
            Feel free to explore and add our Ayurvedic products to your cart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
