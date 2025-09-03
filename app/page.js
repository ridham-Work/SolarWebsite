import React from "react";
import Image from "next/image";
import SolarSection from "@/app/components/SolarSection";
import SolarResidentialSection from "./components/SolarResidential";
import CommercialSolarSection from "./components/CommercialSolar";
import Solarcalc from "./components/Solarcalc";
import AboutUs from "./components/Aboutus";
import TestimonialSection from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/Faq";
import ContactUs from "./components/Contactus";
import SolarCompanySections from "./components/CompanyStuff";

export const metadata = {
  title: "MS Solar Spark - Solar Energy Solutions",
  description:
    "Discover how MS Solar Spark can help you save on electricity bills with sustainable solar energy solutions. Empower a greener future.",
  icons: {
    icon: "/favicons.png", // Ensures your favicon appears
  },
  keywords: [
    "solar energy",
    "green energy",
    "renewable energy",
    "solar panels",
    "sustainable energy",
    "eco-friendly",
    "energy savings",
  ],
  // openGraph: {
  //   title: "MS Solar Spark - Solar Energy Solutions",
  //   description:
  //     "Discover how MS Solar Spark can help you save on electricity bills with sustainable solar energy solutions.",
  //   url: "https://www.mssolarspark.com",
  //   images: [
  //     {
  //       url: "/images/solar-banner.jpg",
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "MS Solar Spark - Solar Energy Solutions",
  //   description:
  //     "Discover how MS Solar Spark can help you save on electricity bills with sustainable solar energy solutions.",
  //   images: ["/images/solar-banner.jpg"],
  // },
};

const SolarCalculator = () => {
  return (
    <div>
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#000b58] mb-4">
              Harness the Power of the Sun!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Save money, protect the environment, and achieve energy independence.
              Find out how much you can save by switching to solar energy!
            </p>
            <a href="#get-quotation">
              <button className="bg-[#000b58] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#242c68] transition">
                Calculate Your Savings
              </button>
            </a>
          </div>
          <div>
            <video
              src="https://res.cloudinary.com/dsqpc6sp6/video/upload/v1756915604/solarcalc_curbtv.mp4"
              loop
              className="rounded-lg shadow-lg w-full h-auto"
              autoPlay
              muted
            />
          </div>
        </div>
      </section>
      <section id="get-quotation">
        <Solarcalc />
      </section>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <div className="relative w-full h-[87vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dsqpc6sp6/image/upload/v1756915607/4_lel987.jpg"
          layout="fill"
          objectFit="cover"
          alt="Solar energy installation"
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

      {/* Other Sections */}
      <section>
        <SolarCalculator />
      </section>

    <section>
      <SolarCompanySections/>
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
        <ContactUs />
      </section>
    </div>
  );
};

export default Page;
