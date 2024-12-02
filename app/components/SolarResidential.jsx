"use client"
import { FaShieldAlt, FaHome, FaTag, FaHeadset } from "react-icons/fa";

const ResidentialSolarSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-16">
      {/* Section Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Information */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000b58] mb-4 animate-fadeIn">
            Premium Residential Solar Solutions
          </h2>
          <p className="text-lg md:text-xl text-[#000b58] mb-8 animate-fadeIn delay-200">
            Empower your home with reliable, cost-effective, and long-lasting solar systems from our trusted brand.
          </p>

          {/* Key Features Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
            {/* 25 Years Warranty */}
            <div className="p-6 bg-[#1a276e] text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <FaShieldAlt className="text-5xl text-yellow-500 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold">25 Years Warranty</h3>
              <p className="text-sm">Enjoy long-lasting peace of mind with our 25-year product warranty.</p>
            </div>

            {/* 24/7 Home Service */}
            <div className="p-6 bg-[#1a276e] text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <FaHome className="text-5xl text-green-500 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold">24/7 Home Service</h3>
              <p className="text-sm">Our dedicated team is available anytime to support your home solar needs.</p>
            </div>

            {/* Competitive Pricing */}
            <div className="p-6 bg-[#1a276e] text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <FaTag className="text-5xl text-green-500 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold">Competitive Pricing</h3>
              <p className="text-sm">Get the best prices for premium solar panels—more affordable than others!</p>
            </div>

            {/* Customer Support */}
            <div className="p-6 bg-[#1a276e] text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <FaHeadset className="text-5xl text-blue-500 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold">Exceptional Customer Support</h3>
              <p className="text-sm">We prioritize your satisfaction with quick responses and expert solutions.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Right Column: Solar Images */}
        <div className="lg:w-1/2 relative mt-12 lg:mt-0">
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="homesol.jpeg" // Use your own image or an animated one
              alt="Residential Solar Installation"
              className="object-cover  w-full h-full transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialSolarSection;
