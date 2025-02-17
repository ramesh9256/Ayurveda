import React from "react";

const ayurvedaProducts = [
  {
    id: 1,
    name: "Ashwagandha Powder",
    price: 299,
    rating: 4.5,
    image: "https://www.health.com/thmb/HbU1zglGEEvNYhi6vz5E5-hiqs4=/5616x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-1014748348-4d3ca431c42b4c0da1d628664fa72412.jpg",
    description: "Boosts immunity, reduces stress, and enhances stamina."
  },
  {
    id: 2,
    name: "Triphala Churna",
    price: 199,
    rating: 4.3,
    image: "https://vediherbals.com/cdn/shop/articles/Triphala_churna.png?v=1623124525",
    description: "Aids digestion and detoxifies the body naturally."
  },
  {
    id: 3,
    name: "Brahmi Syrup",
    price: 349,
    rating: 4.7,
    image: "https://t4.ftcdn.net/jpg/04/40/28/11/360_F_440281130_5FffkfeC2gUCNT1YSjC264m6k87ZMXRH.jpg",
    description: "Improves memory and brain function."
  },
  {
    id: 4,
    name: "Neem Capsules",
    price: 250,
    rating: 4.4,
    image: "https://vediherbals.com/cdn/shop/files/uy-Neem-Capsule-Natural-Blood-Purifier-Immune-Booster-Antioxidant-Properties_grande.jpg?v=1718607393",
    description: "Purifies blood and promotes healthy skin."
  },
  {
    id: 5,
    name: "Giloy Juice",
    price: 220,
    rating: 4.6,
    image: "https://c.ndtvimg.com/2023-07/1i6lv4o_giloy-juice_625x300_19_July_23.jpg?im=FeatureCrop,algorithm=dnn,width=545,height=307",
    description: "Enhances immunity and fights infections."
  },
  {
    id: 6,
    name: "Aloe Vera Gel",
    price: 180,
    rating: 4.2,
    image: "https://images.mamaearth.in/catalog/product/a/l/aloevera-gel-moisturizer-1.jpg?format=auto&height=600",
    description: "Moisturizes skin and soothes irritation."
  },
  {
    id: 7,
    name: "Chyawanprash",
    price: 399,
    rating: 4.8,
    image: "https://static.toiimg.com/photo/88948827.cms",
    description: "A rich source of vitamin C for immunity."
  },
  {
    id: 8,
    name: "Moringa Powder",
    price: 289,
    rating: 4.3,
    image: "https://5.imimg.com/data5/FO/SW/MY-393323/organic-moringa-powder.jpg",
    description: "Rich in antioxidants and vitamins."
  },
  {
    id: 9,
    name: "Kumkumadi Tailam",
    price: 450,
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVktyJcc1rTfVZCBA0fDDx9rOU3J9SajTLQ&s",
    description: "A luxurious Ayurvedic facial oil for glowing skin."
  },
  {
    id: 10,
    name: "Saffron Herbal Tea",
    price: 320,
    rating: 4.5,
    image: "https://img.freepik.com/premium-photo/saffron-tea-with-candy-saffron-herbal-tea_908985-108183.jpg",
    description: "Boosts metabolism and improves mood."
  },
  {
    id: 11,
    name: "Shilajit Resin",
    price: 799,
    rating: 4.8,
    image: "https://www.smallflower.com/cdn/shop/files/black-lotus-shilajit-pure-shilajit-resin-7-g.png?v=1713813490&width=1946",
    description: "Enhances strength and energy levels."
  },
  {
    id: 12,
    name: "Amla Powder",
    price: 199,
    rating: 4.3,
    image: "https://traya.health/cdn/shop/articles/Title_Blog_banners_18.jpg?v=1674653560",
    description: "Rich in vitamin C for better hair and skin health."
  },
  {
    id: 13,
    name: "Tulsi Drops",
    price: 150,
    rating: 4.6,
    image: "https://jamnaherbal.com/cdn/shop/articles/BQ3.jpg?v=1720087003",
    description: "Supports respiratory health and immunity."
  },
  {
    id: 14,
    name: "Herbal Hair Oil",
    price: 349,
    rating: 4.7,
    image: "https://indalo.in/cdn/shop/products/Indalo11in1HerbalHairOil.png?v=1717845875&width=1000",
    description: "Prevents hair fall and promotes hair growth."
  },
  {
    id: 15,
    name: "Ayurvedic Pain Balm",
    price: 225,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_ODm6hNnVOzKrZa0hJsDwmxJZwzmWHXAcg&s",
    description: "Relieves joint and muscle pain naturally."
  },
  {
    id: 16,
    name: "Organic Turmeric Powder",
    price: 170,
    rating: 4.8,
    image: "https://www.greendna.in/cdn/shop/products/turmeric-1-1030x687_1030x.jpg?v=1562518343",
    description: "Powerful anti-inflammatory and antioxidant properties."
  },
  {
    id: 17,
    name: "Ayurvedic Detox Tea",
    price: 299,
    rating: 4.5,
    image: "https://www.itoozhiayurveda.in/wp-content/uploads/2023/04/tea-cup-with-mint-dried-herbs-lemon-sugar-cubes-high-angle-view-blue-surface-scaled.jpg",
    description: "Cleanses the body and supports digestion."
  },
  {
    id: 18,
    name: "Ayurvedic Face Pack",
    price: 250,
    rating: 4.6,
    image: "https://c.ndtvimg.com/2018-12/o24sqf0g_face-wash-650_625x300_11_December_18.jpg?downsize=545:307",
    description: "Brightens skin and removes blemishes."
  },
  {
    id: 19,
    name: "Basil Essential Oil",
    price: 399,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDm5ZBsuST7P8lw9r_PQiUEE0A0Phws3PcVA&s",
    description: "Great for aromatherapy and stress relief."
  },
  {
    id: 20,
    name: "Herbal Body Lotion",
    price: 280,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToStYsw1CK6TgJZ7LCAadbcO6nMWXIgQ-Jw&s",
    description: "Deeply nourishes and hydrates skin."
  } 
];

const CardProducts = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 flex gap-6 mt-20 w-full">
    {/* Sidebar */}
    <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md hidden lg:block h-fit">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <p className="text-gray-700">✔ Ayurveda Certified</p>
      <p className="text-gray-700">✔ 100% Natural</p>
      <h2 className="text-xl font-semibold mt-6 mb-4">Payment Methods</h2>
      <p className="text-gray-700">💳 Credit/Debit Card</p>
      <p className="text-gray-700">📦 Cash on Delivery</p>
      <p className="text-gray-700">💲 UPI / Wallets</p>

      {/* Payment Section */}
      <div className="mt-6 p-4 border-t">
        <h2 className="text-lg font-semibold mb-2">Make Payment</h2>
        <select className="w-full p-2 border rounded mb-3">
          <option>Select Payment Method</option>
          <option>Credit/Debit Card</option>
          <option>UPI / Wallets</option>
          <option>Cash on Delivery</option>
        </select>
        <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Proceed to Pay
        </button>
      </div>
    </aside>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
      {ayurvedaProducts.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md shadow-md" />
          <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
          <p className="text-gray-500 text-sm">{product.description}</p>
          <p className="text-green-600 font-bold mt-1">₹{product.price}</p>
          <button className="mt-3 w-full bg-black text-white border-2 py-2 rounded-lg hover:bg-white hover:text-black hover:border-black transition">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default CardProducts;
