import { useState } from "react";

const products = [
    {
        id: 1,
        title: "Ashwagandha Powder",
        description: "Boosts immunity and reduces stress naturally.",
        price: 299,
        image: "https://www.health.com/thmb/HbU1zglGEEvNYhi6vz5E5-hiqs4=/5616x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-1014748348-4d3ca431c42b4c0da1d628664fa72412.jpg",
    },
    {
        id: 2,
        title: "Triphala Churna",
        description: "A natural detoxifier and digestive booster.",
        price: 199,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2nog8BV3vDoMHbyPAxMucNJqz6vM51evNw&s",
    },
    {
        id: 3,
        title: "Brahmi Tablets",
        description: "Enhances memory and mental clarity.",
        price: 349,
        image: "https://www.shutterstock.com/image-photo/indian-pennywort-brahmi-bacopa-monnieriflower-600nw-1633127647.jpg",
    },
    {
        id: 4,
        title: "Amla Juice",
        description: "Rich in Vitamin C, boosts immunity & digestion.",
        price: 249,
        image: "https://static.toiimg.com/thumb/msid-111076049,width-1280,height-720,resizemode-4/111076049.jpg",
    },
    {
        id: 5,
        title: "Neem Capsules",
        description: "Purifies blood and promotes healthy skin.",
        price: 179,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR00WMuinsqyvtzGIMIVRYYdrOPqiwLs1zZg&s",
    },
    {
        id: 6,
        title: "Shatavari Powder",
        description: "Supports women’s health and hormonal balance.",
        price: 299,
        image: "https://5.imimg.com/data5/QJ/LA/MY-36609278/shatavari-powder-500x500.jpg",
    },
    {
        id: 7,
        title: "Moringa Tablets",
        description: "A powerhouse of essential vitamins and minerals.",
        price: 399,
        image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/moringa-oleifera-powder-and-capsules-1296x728.jpg?w=1155&h=1528",
    },
    {
        id: 8,
        title: "Gokhru Powder",
        description: "Enhances kidney health and vitality.",
        price: 269,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/9/345233039/VK/OX/IH/193385661/10kg-gokhru-powder.jpg",
    },
    {
        id: 9,
        title: "Aloe Vera Gel",
        description: "Soothes skin and promotes natural healing.",
        price: 199,
        image: "https://lovebeautyandplanet.in/cdn/shop/files/1_51ae2e72-68e7-42a1-880c-d96d392e2ea1.jpg?v=1720600209",
    },
    {
        id: 10,
        title: "Chyawanprash",
        description: "A rejuvenating herbal supplement for immunity.",
        price: 499,
        image: "https://static.toiimg.com/thumb/imgsize-23456,msid-116233011,width-600,resizemode-4/116233011.jpg",
    },
];

const AddToCart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 py-10">
            <h1 className="text-3xl font-bold text-center mb-6">Ayurvedic Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden p-4">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg" />
                        <h2 className="text-xl font-semibold mt-3">{product.title}</h2>
                        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                        <p className="text-lg font-bold mt-2">₹{product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black border-2 transition"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Cart Section */}
            <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold">Cart ({cart.length} items)</h2>
                {cart.length > 0 ? (
                    <ul className="mt-3">
                        {cart.map((item, index) => (
                            <li key={index} className="border-b py-2">
                                {item.title} - ₹{item.price}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 mt-2">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default AddToCart;
