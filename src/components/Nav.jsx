import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Ayurveda.jpg";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  // Check localStorage for cart items
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cartItems.length);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // ✅ Login Successful Pop-Up
      if (currentUser) {
        toast.success("Login Successful!", { autoClose: 2000 });
      }
    });

    return () => unsubscribe();
  }, []);

  const HandleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Successfully Log out!", { autoClose: 2000 }); // ✅ Success toast
      setTimeout(() => navigate("/"), 2000); // Redirect after toast
    } catch (error) {
      console.error("Sign-out error:", error);
      toast.error("Error signing out: " + error.message); // ❌ Error toast
    }
  };

  // Handle adding to the cart
  const handleAddToCart = (productId, productName) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = cartItems.some((item) => item.id === productId);

    if (!itemExists) {
      cartItems.push({ id: productId, name: productName, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCartCount(cartItems.length);
      toast.success(`${productName} added to cart!`, { autoClose: 2000 });
    } else {
      toast.info(`${productName} is already in the cart.`, { autoClose: 2000 });
    }
  };

  return (
    <nav className="bg-green-50 shadow-lg fixed top-0 left-0 w-full z-50 py-3">
      <ToastContainer position="top-right" />
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="h-14 w-14 rounded-full" />
          <span className="text-2xl font-bold text-green-800">Ayurveda</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-green-700 hover:text-green-900 font-medium transition duration-300">Home</Link>
          <Link to="/about" className="text-green-700 hover:text-green-900 font-medium transition duration-300">About</Link>
          <Link to="/contact" className="text-green-700 hover:text-green-900 font-medium transition duration-300">Contact</Link>

          {/* Add to Cart Button for Testing */}
         

          {/* Conditional Login/Logout */}
          {user ? (
            <button 
              onClick={HandleSignOut} 
              className="text-green-700 font-medium rounded transition duration-300">
              Log Out
            </button>
          ) : (
            <Link to="/Login" className="text-green-700 hover:text-green-900 font-medium transition duration-300">
              Login
            </Link>
          )}

          {/* Cart Button with Count */}
          <Link to="/cart" className="text-green-700 hover:text-green-900 font-medium transition duration-300">
            Cart ({cartCount})
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-800 focus:outline-none">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4">
          <ul className="text-left space-y-4 px-5">
            <li>
              <Link to="/" className="text-green-700 hover:text-green-900 block py-2">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-green-700 hover:text-green-900 block py-2">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-green-700 hover:text-green-900 block py-2">Contact</Link>
            </li>
            <li>
              {/* Conditional Login/Logout for mobile */}
              {user ? (
                <button 
                  onClick={HandleSignOut} 
                  className="text-white px-1 py-2 font-medium rounded">
                  Log out
                </button>
              ) : (
                <Link to="/Login">
                  <button className="text-green-700 px-1 font-medium py-2 rounded">
                    Login
                  </button>
                </Link>
              )}
            </li>
            <li>
              {/* Cart Button in Mobile */}
              <Link to="/cart" className="text-green-700 hover:text-green-900 block py-2">
                Cart ({cartCount})
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
