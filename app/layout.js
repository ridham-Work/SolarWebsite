"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Loading from "./loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const navItems = [
    { name: "Company", links: ["Testimonials", "Why Trust Us?"] },
    { name: "Solar Panels", links: ["Residential", "Commercial"] },
    "About US",
    "Get Quotation",
    "FAQ's",
    "Reach Us"
     // { name: "Reach Us", links: ["Contact Form", "Locate US"] },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {/* Sticky Header */}
            <header className="bg-[#000B58] fixed top-0 left-0 right-0 z-40 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/logofinal.png"
                  alt="Brand Logo"
                  width={100}
                  height={60}
                  className="mr-3 object-cover h-10 w-40 logo"
                />
              </div>
              <button
                className="mobile-nav block"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
              <nav className="desktop-nav space-x-4">
                {navItems.map((item, index) =>
                  typeof item === "string" ? (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} // Convert item name to ID format
                      className="nav-link font-bold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ) : (
                    <div key={index} className="relative group">
                      <a href="#" className="nav-link font-bold">
                        {item.name}
                      </a>
                      <div className="absolute left-0 mt-2 w-[150px] bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-50">
                        <ul className="py-2">
                          {item.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a
                                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} // Convert link name to ID format
                                className="block px-3 py-2 hover:bg-gray-200"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                )}
                <div className="flex items-center space-x-3">
                  <a href="mailto:info@solariumenergy.in" className="material-icons">
                    <span className="h-10 w-10 text-xl">
                      <MdEmail />
                    </span>
                  </a>
                  <a href="tel:9522495225" className="material-icons text-xl">
                    <FaPhone />
                  </a>
                </div>
              </nav>
            </header>

            {/* Sticky Mobile Menu */}
            <nav
              className={`mobile-nav fixed top-0 right-0 h-full w-3/4 bg-[#2e3040] text-white shadow-lg transform ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out z-50`}
            >
              <div className="flex flex-col gap-20">
                <div className="flex items-center justify-center relative h-20">
                  <button
                    className="text-white absolute mt-14 transform -translate-y-1/2 right-5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ✕
                  </button>
                  <div className="flex items-center justify-center w-full">
                    <Image
                      src="/logofinal.png"
                      alt="Brand Logo"
                      width={80}
                      height={40}
                      className="logo mt-10"
                    />
                  </div>
                </div>

                <div>
                  <ul className="flex flex-col items-center justify-center h-full space-y-6">
                    {navItems.map((item, index) =>
                      typeof item === "string" ? (
                        <li key={index} className="w-full text-center">
                          <a
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} // Convert item name to ID format
                            className="nav-link font-bold block"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </a>
                        </li>
                      ) : (
                        <li key={index} className="w-full text-center">
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="nav-link font-bold w-full text-center flex justify-center items-center"
                          >
                            {item.name}
                            <span
                              className={`ml-2 transform transition-transform duration-300 ${
                                openDropdown === index ? "rotate-180" : "rotate-0"
                              }`}
                            >
                              ▼
                            </span>
                          </button>

                          {openDropdown === index && (
                            <ul className="bg-white text-black w-full">
                              {item.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="text-center">
                                  <a
                                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} // Convert link name to ID format
                                    className="block px-4 py-2 hover:bg-gray-200"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      )
                    )}
                    <div className="flex items-center justify-center space-x-4">
                      <a
                        href="mailto:info@solariumenergy.in"
                        className="material-icons"
                      >
                        <span className="h-10 w-10 text-xl">
                          <MdEmail />
                        </span>
                      </a>
                      <a href="tel:9522495225" className="material-icons text-xl">
                        <FaPhone />
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>

            <main className="flex-grow">{children}</main>

            <footer className="bg-[#000B58] text-white p-4 text-center">
              <div className="container mx-auto">
                <p className="mb-2">
                  © 2024 Solar Company. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4">
                  {["Privacy Policy", "Terms of Service", "Contact Us"].map(
                    (item, index) => (
                      <a key={index} href="#" className="footer-link">
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>
            </footer>
          </>
        )}
      </body>
    </html>
  );
}
