import React from "react";
import Slider from "react-slick";
import img1 from "../assets/images/home-1.avif";
import img2 from "../assets/images/home-2.avif";
import img3 from "../assets/images/hme-3.avif";
import img4 from "../assets/images/home-4.avif";

const Home = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 px-4 md:py-20 py-20">
      <Slider {...settings}>
        {[img1, img2, img3, img4].map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[550px] object-cover rounded-lg shadow-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
