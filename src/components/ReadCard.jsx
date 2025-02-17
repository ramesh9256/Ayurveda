import React from 'react';
import { Link } from 'react-router-dom';

const ReadCard = () => {
    const reads = [
        {
            img: "https://www.forestessentialsindia.com/blog/wp-content/uploads/2025/01/Title_840x560-px.jpg",
            head: "Beauty",
            dec: "How to Avoid Dry and Itchy Scalp during Winter Season"
        },
        {
            img: "https://www.forestessentialsindia.com/blog/wp-content/uploads/2025/01/Title-Image_840x560-px.jpg",
            head: "Beauty",
            dec: "The Ultimate Guide to Hair Serums, Benefits, and Usage Tips",

        },
        {
            img: "https://www.forestessentialsindia.com/blog/wp-content/uploads/2021/01/featured-image-1.jpg",
            head: " Intrinsically Indian Reads",
            dec: "MAKAR SANKRANTI - SIGNIFICANCE OF THE FESTIVAL AS PER THE VEDIC ERA"
        }

    ];

    return (
        <div className="container mx-auto py-8 w-[80%]">
            <h1 className="font-bold mb-4 text-center text-2xl">LATEST READS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reads.map((read, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={read.img} alt={read.head} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{read.head}</h2>
                            <p className="text-gray-700">{read.dec}</p>
                        </div>
                        <div className="p-6">
                            <Link to="/review" className="font-bold py-2 px-4 rounded text-white bg-black  hover:bg-white hover:text-black border-2">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ReadCard;