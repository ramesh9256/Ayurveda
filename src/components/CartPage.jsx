import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../redux/cartSlice";

const CartPage = () => {
  const cartData = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    let totalDiscount = 0;
    for (const product of cartData) {
      let discountedPrice = product.price;
      if (product.Discount) {
        const discountPercentage = parseFloat(product.Discount.replace("%", ""));
        totalDiscount += product.price * (discountPercentage / 100);
        discountedPrice = product.price * (1 - discountPercentage / 100);
      }
      total += discountedPrice;
    }
    return { total, totalDiscount };
  };

  const { total: totalPrice, totalDiscount } = calculateTotalPrice();

  return (
    <div className="bg-lime-50 min-h-screen py-30"> {/* Earthy background */}
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-center mb-8 text-gray-800">My Cart</h1>
          {cartData.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
          ) : (
            <>
              <div className="flex justify-center mb-8">
                <button
                  onClick={handleClearCart}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition shadow-md"
                >
                  Clear Cart
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {cartData.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 flex flex-col"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <div className="flex flex-col flex-grow">
                      <h2 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h2>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-3">{product.description}</p>
                      <div className="mt-auto">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-green-700 font-bold text-lg">₹{product.price}</p>
                          <p className="text-gray-600">{product.rating} ★</p>
                        </div>
                        {product.Discount && (
                          <p className="text-red-600 font-bold text-sm mb-2">
                            Discount: {product.Discount}
                          </p>
                        )}
                        <button
                          className="w-full bg-lime-700 hover:bg-lime-800 text-white font-semibold py-2 rounded-lg transition border-2"
                          onClick={() => handleRemoveFromCart(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Cart Summary Section */}
        {cartData.length > 0 && (
          <aside className="bg-white shadow-md rounded-lg p-6 h-fit w-full lg:w-1/3 border border-gray-200 sticky top-24"> {/* Added sticky */}
            <div className="max-h-[300px] overflow-y-auto"> {/* Added max-h and overflow */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart Summary</h2>
              <p className="text-lg text-gray-700 mb-2">
                Total Items: <span className="font-extrabold text-gray-800">{cartData.length}</span>
              </p>
              <p className="text-xl text-gray-700 mb-2">
                Total Discount: <span className="font-extrabold text-red-600">₹{totalDiscount.toFixed(2)}</span>
              </p>
              <p className="text-2xl font-extrabold text-green-700 mb-4">
                Total Price: ₹{totalPrice.toFixed(2)}
              </p>
              {/* Checkout Button */}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default CartPage;