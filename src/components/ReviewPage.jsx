import React, { useRef } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const reviews = [
    {
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "John Doe",
        rating: 4.5,
        text: "Amazing experience! The service was top-notch and the quality unmatched."
    },
    {
        img: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        text: "Loved it! Would definitely recommend to everyone.",
        name: "Mukesh Kumar"
    },
    {
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 4,
        text: "Great quality and fast service. Totally worth it!",
        name: "Rahul Singh"
    },
    {
        img: "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3.5,
        text: "Good, but there is room for improvement.",
        name: "Rajesh Sharma"
    },
    {
        img: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        text: "Absolutely fantastic! Exceeded all expectations.",
        name: "Ravi Kumar"
    }
];

function ReviewPage() {
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container p-4 w-[80%] m-auto"> {/* Added padding */}
            <h2 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h2> {/* Improved heading */}
            <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="p-2"> {/* Added padding to each slide */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full"> {/* Card styling */}
                            <img
                                src={review.img}
                                alt={review.name}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4 flex flex-col flex-grow"> {/* Card content */}
                                <div className="flex items-center mb-2">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`h-5 w-5 ${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                    <span className="ml-2 text-gray-600 font-medium">({review.rating.toFixed(1)})</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{review.name}</h3>
                                <p className="text-gray-600 line-clamp-3 mb-2">{review.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ReviewPage;