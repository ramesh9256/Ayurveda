import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Ayurveda.jpg";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
import { useSelector } from "react-redux";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const cartData = useSelector((store) => store.cart.items)

  // Check localStorage for cart items
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cartItems.length);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        toast.success("Login Successful!", { autoClose: 2000 });
      }
    });

    return () => unsubscribe();
  }, []);

  const HandleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Successfully Logged Out!", { autoClose: 2000 });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Sign-out error:", error);
      toast.error("Error signing out: " + error.message);
    }
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
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
          <Link to="/" className="text-green-700 hover:text-green-900 font-medium transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-green-700 hover:text-green-900 font-medium transition duration-300">
            About
          </Link>
          <Link to="/contact" className="text-green-700 hover:text-green-900 font-medium transition duration-300">
            Contact
          </Link>

          {user ? (
            <button onClick={HandleSignOut} className="text-green-700 font-medium rounded transition duration-300">
              Log Out
            </button>
          ) : (
            <Link to="/Login" className="text-green-700 hover:text-green-900 font-medium transition duration-300">
              Login
            </Link>
          )}

          <Link to="/cart" className="text-green-700 hover:text-green-900 font-medium transition duration-300">
            Cart ({cartData.length})
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-green-800 focus:outline-none transition-transform duration-300 ease-in-out"
          >
            <svg
              className={`h-8 w-8 transform ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
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
      <div
        className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="text-left space-y-4 px-5">
          <li>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="text-green-700 hover:text-green-900 block py-2 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="text-green-700 hover:text-green-900 block py-2 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="text-green-700 hover:text-green-900 block py-2 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            {user ? (
              <button
                onClick={() => {
                  HandleSignOut();
                  handleLinkClick();
                }}
                className="text-green-700 px-1 py-2 font-medium rounded transition duration-300"
              >
                Log out
              </button>
            ) : (
              <Link to="/Login" onClick={handleLinkClick}>
                <button className="text-green-700 px-1 font-medium py-2 rounded transition duration-300">
                  Login
                </button>
              </Link>
            )}
          </li>
          <li>
            <Link
              to="/cart"
              onClick={handleLinkClick}
              className="text-green-700 hover:text-green-900 block py-2 transition duration-300"
            >
              Cart ({cartData.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
