export default function ReadMore() {
  return (
    <div className="container mx-auto p-6 md:p-12 bg-green-50 shadow-lg rounded-lg mt-20">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Ayurveda: The Science of Life
        </h1>
        <p className="text-lg text-green-700">
          Discover the ancient wisdom of Ayurveda for holistic well-being.
        </p>
        <img
          src="https://media.istockphoto.com/id/1248232022/vector/ayurveda-word-concepts-banner-ayurvedic-medicine-holistic-healing-illness-prevention.jpg?s=612x612&w=0&k=20&c=x_ckOEXhlAwk6FlW3Et-sHHF5n3MzX8ZM3H1KU6dJrM="
          alt="Ayurveda Illustration"
          className=" md:h-110 object-center md:w-3/4 mx-auto mt-6 rounded-lg shadow-md"
        />
      </div>

      {/* The Three Doshas */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
          The Three Doshas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Vata", desc: "Associated with movement, air, and space.", color: "bg-blue-100" },
            { name: "Pitta", desc: "Linked to fire and water, controls digestion.", color: "bg-red-100" },
            { name: "Kapha", desc: "Related to earth and water, provides structure.", color: "bg-green-100" },
          ].map((dosha) => (
            <div className={`${dosha.color} p-6 rounded-lg shadow-md text-center`} key={dosha.name}>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">{dosha.name}</h3>
              <p className="text-gray-700">{dosha.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ayurvedic Principles */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
          Ayurvedic Principles
        </h2>
        <ul className="list-disc pl-8 text-gray-700 max-w-3xl mx-auto">
          <li><strong>Personalized Approach:</strong> Tailored treatments based on individual needs.</li>
          <li><strong>Holistic Healing:</strong> Mind, body, and spirit connection.</li>
          <li><strong>Natural Therapies:</strong> Use of herbs, yoga, and meditation.</li>
          <li><strong>Balance:</strong> Maintaining harmony between the doshas.</li>
        </ul>
      </div>

      {/* Benefits of Ayurveda */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
          Benefits of Ayurveda
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {["Improved digestion", "Enhanced immunity", "Stress reduction", "Increased energy", "Better sleep", "Chronic condition management"].map((benefit, index) => (
            <div key={index} className="bg-yellow-100 p-4 rounded-lg shadow-md text-gray-800">
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-gray-600 text-center">
        <strong>Disclaimer:</strong> This information is for educational purposes only and should not be considered medical advice.
      </p>
    </div>
  );
}
