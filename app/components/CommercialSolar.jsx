
"use client"
import {
  FaBuilding,
  FaChartLine,
  FaRegHandPaper,
  FaLeaf,
} from "react-icons/fa";

const CommercialSolarSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-16">
      {/* Section Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Solar Images (formerly Right) */}
        <div className="lg:w-1/2 relative mt-12 lg:mt-0">
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/businessSolar.jpg" // Use your own image or an animated one showing commercial solar setups
              alt="Commercial Solar Installation"
              className="object-cover w-full h-full transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Column: Information (formerly Left) */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-4xl font-bold text-[#000b58] mb-4 animate-fadeIn">
            Commercial Solar Solutions for Your Business
          </h2>
          <p className="text-lg md:text-xl text-[#000b58] mb-8 animate-fadeIn delay-200">
            Maximize your energy savings, boost sustainability, and enhance your
            brand with reliable solar solutions tailored for businesses.
          </p>

          {/* Key Features Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
            {/* Cost Efficiency */}
            <div className="p-6 bg-[#1a276e] text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <FaChartLine className="text-5xl text-yellow-500 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold">Cost Efficiency</h3>
              <p className="text-sm">
                Reduce energy costs with solar power tailored for large-scale
                energy needs.
              </p>
            </div>

            {/* Customizable Installations */}
            <div className="p-6 bg-[#1a276e]  text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <FaBuilding className="text-5xl text-green-500 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold">
                Customizable Installations
              </h3>
              <p className="text-sm">
                Solar panel systems designed specifically to meet the unique
                needs of your business.
              </p>
            </div>

            {/* Return on Investment */}
            <div className="p-6 bg-[#1a276e] text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <FaRegHandPaper className="text-5xl text-green-500 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold">Return on Investment</h3>
              <p className="text-sm">
                Achieve significant savings and a fast ROI with solar energy
                investments.
              </p>
            </div>

            {/* Sustainability */}
            <div className="p-6 bg-[#1a276e] text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <FaLeaf className="text-5xl text-yellow-500 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold">Sustainability Goals</h3>
              <p className="text-sm">
                Help your business reduce its carbon footprint and meet
                sustainability targets.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              Get a Commercial Solar Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialSolarSection;
