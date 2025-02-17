import React from "react";

const products = [
  { id: 1, img: "https://img.forestessentialsindia.com/pub/media/home/category/Face-Care.jpg", title: "Face Care", price: "₹299" },
  { id: 2, img: "https://img.forestessentialsindia.com/pub/media/home/category/Hair-Care.jpg", title: "Hair Care", price: "₹499" },
  { id: 3, img: "https://img.forestessentialsindia.com/pub/media/home/category/Body-Care.jpg", title: "Body Care", price: "₹399" },
  { id: 4, img: "https://img.forestessentialsindia.com/pub/media/home/category/Wellness.jpg", title: "Wellness", price: "₹599" },
  { id: 5, img: "https://img.forestessentialsindia.com/pub/media/home/category/Makeup.jpg", title: "Makeup", price: "₹799" },
  { id: 6, img: "https://www.pujaperfumery.com/wp-content/uploads/2022/02/essentialOils-899747886-770x533-1.jpg", title: "Oils", price: "₹349" },
  { id: 7, img: "https://img.forestessentialsindia.com/pub/media/home/category/Travel-Minis.jpg", title: "Sunscreen", price: "₹499" },
  { id: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSIvmL1KiOljtbNCqMndgX3GHVmpPZONOrg&s", title: "Scrubs", price: "₹599" },
  { id: 9, img: "https://m.media-amazon.com/images/I/51Ljfli9oeL.jpg", title: "Lip Care", price: "₹299" },
  { id: 5, img: "https://img.forestessentialsindia.com/pub/media/home/category/Makeup.jpg", title: "Makeup", price: "₹799" },
  { id: 2, img: "https://img.forestessentialsindia.com/pub/media/home/category/Hair-Care.jpg", title: "Hair Care", price: "₹499" },
  { id: 7, img: "https://img.forestessentialsindia.com/pub/media/home/category/Travel-Minis.jpg", title: "Sunscreen", price: "₹499" },



];

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Our Ayurveda Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img src={product.img} alt={product.title} className="w-full h-40 object-cover  rounded-md shadow-md" />
            <h2 className="text-xl font-semibold mt-3">{product.title}</h2>
            <p className="text-lg text-green-600 font-bold mt-1">{product.price}</p>
            <button className="mt-3 w-full bg-black text-white border-2 py-2 rounded-lg hover:bg-white hover:text-black hover:border-black transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
