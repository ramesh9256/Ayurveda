import React from "react";
import { IoCall, IoLocation } from "react-icons/io5";
import { MdLocalHospital } from "react-icons/md";

function Contact() {
  return (
    <div className="bg-gradient-to-r from-green-100 to-green-50 min-h-screen flex items-center justify-center p-6 w-full">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 mt-20">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">Get in touch</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold flex items-center text-gray-800">
              <IoLocation className="mr-2 text-green-600" /> Contact Us:
            </h2>
            <p className="text-gray-600">Aurvadic Pri. limit. Health Clinic</p>
            <p className="text-gray-600">10 Sector, Jaipur, (Rajasthan) India</p>
            
            <h2 className="text-2xl font-semibold flex items-center text-gray-800">
              <IoCall className="mr-2 text-green-600" /> Contact
            </h2>
            <p className="text-gray-600">+91-925-6746259</p>
            
            <h2 className="text-2xl font-semibold flex items-center text-gray-800">
              <MdLocalHospital className="mr-2 text-green-600" /> Clinic Timings
            </h2>
            <p className="text-gray-600">10:00 am to 7:00 pm, Monday to Saturday</p>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" className="lg:w-1/2 space-y-6">

            <input type="hidden" name="access_key" value="d79ee2b8-ec2e-4bd5-a78c-79dbda8a3422" />
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Fixed style syntax issue */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
