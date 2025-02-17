import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const FilterClick = () => {
  const navigate = useNavigate();

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
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 5, // Default 5 Cards on Desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // Large Screen
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // Smaller Tablets & Large Phones
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480, // Mobile
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Ayurveda Categories</h2>

      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id} className="px-2">
            <div
              className="relative h-44 md:h-52 flex items-center justify-center bg-cover rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => navigate(`/product/${item.id}`)}
            >
              {/* Dark overlay for better readability */}
              <div className="absolute inset-0 bg-opacity-40 rounded-lg"></div>
              <p className="relative text-white text-lg md:text-xl font-semibold px-4 py-2 bg-opacity-60 rounded-md">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FilterClick;
