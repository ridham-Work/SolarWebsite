"use client"
import React, { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
  const [counting, setCounting] = useState(false);

  const features = [
    {
      title: "Expert Installation",
      description: "Certified professionals ensure seamless and efficient setup.",
      icon: "🌟",
    },
    {
      title: "Affordable Pricing",
      description: "Quality solar solutions that fit your budget.",
      icon: "💰",
    },
    {
      title: "Sustainable Energy",
      description: "Join the green revolution with eco-friendly power.",
      icon: "🌱",
    },
    {
      title: "24/7 Support",
      description: "We're here to help anytime you need us.",
      icon: "📞",
    },
  ];

  const stats = [
    { label: "Years of Experience", value: 10 },
    { label: "Successful Installations", value: 500 },
    { label: "Happy Clients", value: 300 },
    { label: "Awards & Recognitions", value: 50 },
  ];

  const countersRef = useRef([]);
  const sectionRef = useRef(null);

  const animateCounter = (target, index) => {
    let count = 0;
    const increment = target / 100;
    const counter = countersRef.current[index];
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(interval);
        count = target;
      }
      counter.innerText = Math.floor(count);
    }, 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counting) {
          setCounting(true);
          stats.forEach((stat, index) => animateCounter(stat.value, index));
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [counting]);

  return (
    <section className="text-white py-16" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
          Why <span className="text-[#1a276e]">Trust Us?</span>
        </h2>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-around items-center mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              <h3
                ref={(el) => (countersRef.current[index] = el)}
                className="text-6xl font-bold text-green-500"
              >
                0
              </h3>
              <p className="text-lg mt-2 text-[#1a276e] font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-[#1a276e] rounded-lg shadow-lg hover:bg-green-500 hover:text-gray-900 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-green-500 text-gray-900 rounded-full mb-6 group-hover:bg-gray-900 group-hover:text-green-500 transition-colors duration-300">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-100 transition-colors duration-300">
                {feature.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-[#1a276e] p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-6">
            What Our Clients Say
          </h3>
          <p className="text-center text-gray-400 mb-8">
            See what makes us the trusted choice for solar solutions.
          </p>
          <div className="flex justify-center items-center">
            {/* Replace with a testimonial carousel component */}
            <div className="bg-green-500 p-6 rounded-lg shadow-md text-center max-w-xl">
              <p className="text-lg italic">
                "Switching to solar with this company was the best decision we
                made. Their expertise and support exceeded our expectations!"
              </p>
              <a href="#testimonials" className="cursor-pointer">
                <button className="mt-4 text-sm font-bold hover:text-[#1a276e]">
                  <u> Show More Reviews!</u>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
