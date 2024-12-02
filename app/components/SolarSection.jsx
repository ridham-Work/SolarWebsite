"use client"
import { FaMoneyBillWave, FaLeaf, FaShieldAlt } from "react-icons/fa";

const SolarSection = () => {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000b58] via-[#1a276e] to-[#2b3a91]"></div>

      {/* Moving Wave Effect */}
      <div className="absolute bottom-0 w-full animate-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#2b3a91"
            fillOpacity="1"
            d="M0,160L48,186.7C96,213,192,267,288,277.3C384,288,480,256,576,229.3C672,203,768,181,864,192C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 md:px-16 lg:px-24">
        {/* Headline */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Power Your Home with Clean Energy!
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fadeIn delay-200">
            Affordable, sustainable, and designed for your home.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-md animate-bounce">
              Get a Free Quote
            </button>
            <button className="bg-transparent border border-green-500 hover:bg-green-500 text-white py-3 px-6 rounded-lg shadow-md">
              Learn More
            </button>
          </div>
        </div>

        {/* Icons + Text Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cost Savings */}
          <div className="flex flex-col items-center text-center p-6 bg-white text-[#1a276e] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaMoneyBillWave className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">Cost Savings</h3>
            <p className="text-sm">Save up to 50% on electricity bills.</p>
          </div>

          {/* Eco-Friendly */}
          <div className="flex flex-col items-center text-center p-6 bg-white text-[#1a276e] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaLeaf className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">Eco-Friendly</h3>
            <p className="text-sm">Reduce your carbon footprint.</p>
          </div>

          {/* Durability */}
          <div className="flex flex-col items-center text-center p-6 bg-white text-[#1a276e] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaShieldAlt className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">Durability</h3>
            <p className="text-sm">25-year panel warranty for peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;
