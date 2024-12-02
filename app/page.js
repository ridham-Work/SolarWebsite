"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import "./globals.css"; // Make sure to import your CSS file
import "@/app/components/SolarSection";
import SolarSection from "@/app/components/SolarSection";
import SolarResidentialSection from "./components/SolarResidential";
import CommercialSolarSection from "./components/CommercialSolar";
import Solarcalc from "./components/Solarcalc";
import AboutUs from "./components/Aboutus";
import TestimonialSection from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/Faq";
import ContactUs from "./components/Contactus";

const SolarCalculator = () => {
  return (
    <div>
      <div>
        <section id="" className="py-12 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div>
              <h1 className="text-4xl font-bold text-[#000b58] mb-4">
                Harness the Power of the Sun!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Save money, protect the environment, and achieve energy
                independence. Find out how much you can save by switching to
                solar energy!
              </p>
              <a href="#get-quotation" className="">
                <button className="bg-[#000b58] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#242c68] transition">
                  Calculate Your Savings
                </button>
              </a>
            </div>

            {/* Right Section */}
            <div>
              <video
                src="/videos/solarcalc.mp4"
                loop
                className="rounded-lg shadow-lg w-full h-auto"
                autoPlay
                muted
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="text-yellow-500 text-3xl mr-4 animate-spin">
                ☀️
              </div>
              <p className="text-lg text-gray-700">Save on electricity bills</p>
            </div>
            <div className="flex items-center">
              <div className="text-green-500 text-3xl mr-4 animate-scale-y">
                🌱
              </div>
              <p className="text-lg text-gray-700">Eco-friendly energy</p>
            </div>
            <div className="flex items-center">
              <div className="text-blue-500 text-3xl mr-4 animate-scale-x">
                💡
              </div>
              <p className="text-lg text-gray-700">Energy independence</p>
            </div>
          </div>
        </section>
      </div>

      <section id="get-quotation">
        <Solarcalc />
      </section>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <div className="relative w-full h-[87vh] overflow-auto">
        <Image
          src="/4.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Hero Image"
          className="absolute inset-0 w-full h-full z-0 filter blur-[5px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
          <h1 className="text-4xl font-bold tracking-wide text-[#f#f90]">
            Solar and Green Energy
          </h1>
          <p className="mt-2 text-lg tracking-wider font-bold">
            Empowering a sustainable future with renewable energy solutions.
          </p>
        <a href="#get-quotation">
        <button className="mt-4 px-6 py-2 bg-[#000b58] text-white font-bold rounded hover:bg-[#192158]">
            Start Saving Now
          </button>
        </a>
        </div>
      </div>

      <section id="">
        <div className="m-2">
          <SolarCalculator />
        </div>
      </section>

      <section>
        <SolarSection />
      </section>

      <section id="residential">
        <SolarResidentialSection />
      </section>

      <section id="commercial">
        <CommercialSolarSection />
      </section>

      <section id="about-us">
        <AboutUs />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>

      <section id="why-trust-us?">
        <WhyChooseUs />
      </section>

      <section id="faq's">
        <FAQ />
      </section>

      <section id="reach-us">
        <ContactUs/>
      </section>
    </div>
  );
};

export default Page;
