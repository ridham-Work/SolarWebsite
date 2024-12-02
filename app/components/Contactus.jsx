"use client"
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // Handle form submission logic here
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Form Section */}
        <div className="bg-[#f0f4ff] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#000b58] mb-4">Contact Us</h2>
          <p className="text-[#000b58] font-normal mb-6">
            Have any questions? We’d love to hear from you. Fill out the form
            and we’ll get in touch.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-[#000b58]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f90] focus:outline-none transition duration-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-[#000b58]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f90] focus:outline-none transition duration-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-[#000b58]"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f90] focus:outline-none transition duration-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-[#000b58]"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="4"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f90] focus:outline-none transition duration-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#f90] text-white font-bold rounded-lg shadow-lg hover:bg-[#000b58] hover:shadow-xl transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>


    <div>
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/contactus.jpg" // Use your own image or an animated one showing commercial solar setups
              alt="Commercial Solar Installation"
              className="object-cover w-full h-full transform transition-all duration-300 hover:scale-105"
            />
          </div>
    </div>
  
      </div>
    </div>
  );
}
