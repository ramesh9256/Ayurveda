import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";

const ayurvedaProducts = [
  {
    id: 1,
    name: "Ashwagandha Powder",
    price: 299,
    rating: 4.8,
    image: "https://www.kerry.com/content/dam/kerry/en/images/insights/kerrydigest/2023/ashwaganha/bigstock-Ginseng-ashwagandha-herb-root-hero-76496183.jpg",
    description: "Boosts energy, reduces stress, and improves immunity.",
  },
  {
    id: 2,
    name: "Triphala Churna",
    price: 249,
    rating: 4.6,
    image: "https://www.dabur.com/Brands/All%20Banner/Triphala-Churna.jpg",
    description: "Supports digestion, detoxification, and improves gut health.",
  },
  {
    id: 3,
    name: "Herbal Body Lotion",
    price: 349,
    rating: 4.7,
    image: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/9/8970_ultra_rich_body_milk_indian_rose_absolute_130ml_front_1.png",
    description: "Keeps your skin soft, hydrated, and glowing naturally.",
  },
  {
    id: 4,
    name: "Aloe Vera Gel",
    price: 299,
    rating: 4.8,
    image: "https://himalayawellness.in/cdn/shop/products/Aloe-Vera-Refreshing-Body-Gel-300ml_FOP_1024x1024.jpg?v=1670397702",
    description: "Hydrates skin, soothes irritation, and promotes healing.",
  },
  {
    id: 5,
    name: "Kumkumadi Tailam",
    price: 499,
    rating: 4.9,
    image: "https://m.media-amazon.com/images/I/71-InZvXzsL._SX522_.jpg",
    description: "Brightens complexion, reduces pigmentation, and adds glow.",
  },
  {
    id: 6,
    name: "Sandalwood Face Pack",
    price: 399,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCbNZevNwRnJQFjpMq8hmYA36co8to_ML5A&s",
    description: "Rejuvenates skin, controls acne, and gives a cooling effect.",
  },
  {
    id: 7,
    name: "Neem Tulsi Face Wash",
    price: 249,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7agwatOxW2wdInaHu5UxDaOesi3Pxn3zKAw&s",
    description: "Cleanses deeply, fights pimples, and controls oil.",
  },
  {
    id: 8,
    name: "Coconut & Almond Body Butter",
    price: 450,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dpE35mxdJ4V4DNwjMzTRjgNKSCXj0aamGg&s",
    description: "Nourishes skin, provides deep hydration, and makes it soft.",
  }
];

const Card = () => {
  const navigate = useNavigate();
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id], // अगर true था तो false, false था तो true
    }));
  };

  const HandelCart = (e) => {
    e.stopPropagation(); 
        console.log(e, "click");
        
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mx-auto p-4 w-full">
      <h1 className="text-2xl font-bold text-center mb-6">Ayurveda Products</h1>
      <Slider {...settings} className="w-[90%] mx-auto">
        {ayurvedaProducts.map((product) => (
          <div key={product.id} className="p-2 h-90 relative">
            <div
              className="rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition bg-white flex flex-col h-full"
              onClick={() => navigate(`/CardProduct/${product.id}`)}
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <h3 className="text-gray-600">{product.description}</h3>
              <p className="text-green-600 font-bold mt-1">₹{product.price}</p>
             
            </div>
            <div className=" px-3 flex justify-between mt-2 absolute bottom-5">
                <Link to={"/cart"} className="bg-black text-white px-3 py-1 border-2 rounded hover:bg-white hover:text-black" onClick={HandelCart}>
                  Add to Cart
                </Link>
                
                <Link to={"/order"} className="bg-black ml-5 text-white px-6 py-1 border-2 rounded hover:bg-white hover:text-black">
                  Order
                </Link>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
