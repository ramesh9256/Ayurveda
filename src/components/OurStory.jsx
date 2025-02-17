import React, { useRef } from "react";
import Slider from "react-slick";


function OurStory() {
  let sliderRef = useRef(null);
  
  const details = [
    {
      img: "https://img.forestessentialsindia.com/pub/media/home/our-roots/Multi-Sensoria.jpg",
      title: "A MULTI-SENSORIAL JOURNEY",
      dec: "Authentic in its roots and sophisticated in its presentation, Forest Essentials takes you on an immersive multi-sensorial journey with every product."
    },
    {
      img: "https://img.forestessentialsindia.com/pub/media/home/our-roots/Fresh-Pure-Potent.jpg",
      title: "FRESH. PURE. POTENT",
      dec: "Forest Essentials' products are handcrafted using 100% natural ingredients, sourced from the vast Indian landscape, to ensure the highest standards of purity."
    },
    {
      img: "https://img.forestessentialsindia.com/pub/media/home/our-roots/New-Era.jpg",
      title: "THE NEW ERA OF AYURVEDA",
      dec: "A pioneer in the beauty industry, Forest Essentials was the first brand to combine traditional Ayurvedic practices with modern aesthetics for a luxurious experience."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  return (
    <div className="bg-green-50 py-10 px-5 md:px-10 w-full">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Experience Ayurveda</h2>
      <div className="max-w-4xl mx-auto">
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
          {details.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-60 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-green-800">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.dec}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default OurStory;