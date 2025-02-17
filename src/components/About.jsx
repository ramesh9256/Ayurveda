import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Header Section */}
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLa2kvKSMuG0k16jeltA3OBcBv0hA5VPHv1A&s"
          alt="Ayurveda Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center mt-10">
          <h1 className="text-white text-4xl font-bold">About Ayurveda</h1>
        </div>
      </div>

      {/* Ayurveda Introduction */}
      <section className="container mx-auto md:px-20 px-6 py-10 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">What is Ayurveda?</h2>
        <p className="text-gray-700 leading-relaxed">
          Ayurveda is an ancient Indian system of medicine that focuses on a natural 
          and holistic approach to physical and mental well-being. It aims to balance 
          the body, mind, and spirit through diet, herbal treatments, yoga, and meditation.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Originating over 5,000 years ago, Ayurveda is based on the principles of three doshas: Vata, Pitta, and Kapha. These doshas represent different body constitutions and energy forces that influence our health. By understanding one's dominant dosha, Ayurveda provides personalized wellness solutions that promote harmony and longevity.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Ayurvedic therapies include Panchakarma detoxification, herbal medicine, oil massages (Abhyanga), and lifestyle changes that align with nature’s rhythms. This ancient wisdom continues to be relevant today, helping people achieve optimal health through preventive care and natural healing methods.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold text-green-700 text-center mb-6">
          Benefits of Ayurveda
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://yeditepehastaneleri.com/sites/default/files/blog/2023-02/detoks_nedir.jpg"
              alt="Detoxification"
              className="h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Detoxification</h3>
            <p className="text-gray-600">Helps remove toxins and purifies the body.</p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2237/2237940.png"
              alt="Better Digestion"
              className="h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Better Digestion</h3>
            <p className="text-gray-600">Enhances digestive health and gut balance.</p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972110.png"
              alt="Improved Immunity"
              className="h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Boosts Immunity</h3>
            <p className="text-gray-600">Strengthens natural defense mechanisms.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">Embrace Ayurveda for a Healthy Life</h2>
        <p className="text-lg mt-2">
          Start your journey towards a balanced and natural lifestyle today.
        </p>
        <button className="mt-4 bg-white text-green-600 px-6 py-2 font-semibold rounded hover:bg-green-800 hover:text-white transition">
          Learn More
        </button>
      </section>
    </div>
  );
};

export default About;
