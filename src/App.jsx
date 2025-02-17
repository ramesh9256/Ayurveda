import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Footer from "./components/Footer";
import CardProducts from "./components/CardProduct";
import Contact from "./components/Contact";
import About from "./components/About";
import ReadMore from "./components/ReadMore";
import Login from "./components/Login";
import Top from "./components/Top";
import SignUp from "./components/SignUp";
import AddToCart from "./components/AddToCart";
import Order from "./components/Order";




const App = () => {

  return (
    <Router>
      <Top />
      <Nav />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/CardProduct/:id" element={<CardProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<ReadMore />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/confirm" element={<Body />} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
