"use client"
import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Solar Engineer",
    feedback: "Solar energy has transformed the way we think about sustainability.",
    image: "./testi2.jpg",
    bgColor: "bg-red-400",
  },
  {
    name: "Jane Smith",
    role: "Renewable Energy Specialist",
    feedback: "Switching to solar has been the best decision for my community.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Ashaly Brown",
    role: "Green Energy Advocate",
    feedback: "The benefits of solar energy are endless for our future generations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    bgColor: "bg-blue-400",
  },
  {
    name: "Sophia Lee",
    role: "Eco Architect",
    feedback: "Integrating solar into our designs has been revolutionary.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    bgColor: "bg-pink-400",
  },
  {
    name: "Julia King",
    role: "Environmentalist",
    feedback: "Solar energy paves the way for a cleaner tomorrow.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    bgColor: "bg-orange-400",
  },
  {
    name: "Ridham Savaliya",
    role: "Solar Specialist",
    feedback: "Harnessing the Power of the Sun!",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    bgColor: "bg-green-400",
  },
];

const TestimonialCard = ({ testimonial }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex flex-col items-center text-center p-6 rounded-xl ${testimonial.bgColor} transition-all duration-300 transform ${
        isHovered ? "scale-105 shadow-xl" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Abstract Shape */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white opacity-50"
        >
          <path d="M80 0C97 12 120 30 120 60C120 90 97 108 80 120C63 132 57 120 30 108C3 96 0 78 0 60C0 42 3 24 30 12C57 0 63 -12 80 0Z" />
        </svg>
      </div>
      {/* Image */}
      <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden border-4 border-white">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text Content */}
      <div className="mt-4 text-white">
        <h3 className="text-lg font-bold">{testimonial.name}</h3>
        <p className="text-sm italic">{testimonial.role}</p>
      </div>
      {/* Popup Content */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center p-4 text-white rounded-xl z-20">
          <p className="text-sm">{testimonial.feedback}</p>
        </div>
      )}
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#000b58] mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
    