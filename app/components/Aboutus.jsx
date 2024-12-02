"use client"

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-[#000b58] text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-[#000b58] text-lg md:text-xl mb-12 mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We are pioneers in providing sustainable energy solutions with cutting-edge solar technology. Our mission is to harness the power of the sun to create a greener, more energy-efficient world. With a focus on innovation, quality, and customer satisfaction, we strive to empower individuals and businesses to make the transition to clean energy with ease.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Creative image section */}
          <div className="relative p-8 bg-[#000B58] rounded-3xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="./OurMission.jpg" // Replace with your company image
              alt="Company Vision"
              className="absolute top-0 left-0 w-24 h-24 rounded-full border-4 border-white transform -translate-x-8 translate-y-8"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-white">
              Our mission is simple: to provide sustainable, reliable, and cost-effective solar solutions to people all over the world.
            </p>
          </div>

          {/* Another creative section */}
          <div className="relative p-8 bg-green-500 rounded-3xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="./ourValues.jpg" // Replace with your company image
              alt="Our Values"
              className="absolute top-0 right-0 w-24 h-24 rounded-full border-4 border-white transform translate-x-8 -translate-y-8"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              <li>Integrity: Transparent, honest, and ethical practices.</li>
              <li>Innovation: Always pushing boundaries with new technologies.</li>
              <li>Sustainability: Commitment to environmental responsibility.</li>
            </ul>
          </div>

          {/* A more dynamic section with images */}
          <div className="relative p-8 bg-[#000B58] text-white rounded-3xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="./teamWork.jpg" // Replace with your company image
              alt="Teamwork"
              className="absolute bottom-0 left-0 w-24 h-24 rounded-full border-4 border-white transform translate-x-8 translate-y-8"
            />
            <h3 className="text-2xl font-semibold  mb-4">Teamwork</h3>
            <p className="">
              We believe that working together is the key to success. Our diverse team brings unique perspectives to every project.
            </p>
          </div>
        </div>

        <motion.div
          className="mt-16 flex justify-center items-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a
            href="#contact"
            className="bg-[#000b58] text-white text-lg py-3 px-6 rounded-full transform hover:scale-105 transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-[#000b58] text-[#000b58] text-lg py-3 px-6 rounded-full transform hover:scale-105 transition duration-300"
          >
            Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
