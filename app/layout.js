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
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const navItems = [
    { name: "Company", links: ["About Us", "Careers", "Press"] },
    { name: "Solar Panels", links: ["Residential", "Commercial"] },
    { name: "Investors", links: ["Investor Relations", "Reports"] },
    "Solar for Home",
    "Solar for Business",
    { name: "Reach Us", links: ["Contact Form", "Locations", "Support"] },
  ];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <header className="bg-[#000B58] text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Brand Logo"
                  width={100}
                  height={50}
                  className="mr-3 logo"
                />
              </div>
              <button
                className="md:hidden block"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
              <nav className="hidden md:flex space-x-4">
                {navItems.map((item, index) => (
                  typeof item === 'string' ? (
                    <a key={index} href="#" className="nav-link font-bold">
                      {item}
                    </a>
                  ) : (
                    <div key={index} className="relative group">
                      <a href="#" className="nav-link font-bold">
                        {item.name}
                      </a>
                      <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-50">
                        <ul className="py-2">
                          {item.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                ))}
                <div className="flex items-center space-x-2">
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
            <nav
  className={`fixed top-0 right-0 h-full w-3/4 bg-[#000B58] text-white shadow-lg transform ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out md:hidden z-50`}
>
  <button
    className="absolute top-4 right-4 text-white"
    onClick={() => setIsMenuOpen(false)}
  >
    ✕
  </button>
  <ul className="flex flex-col items-center justify-center h-full space-y-4">
    {navItems.map((item, index) => (
      typeof item === 'string' ? (
        <li key={index} className="w-full text-center">
          <a href="#" className="nav-link font-bold block">
            {item}
          </a>
        </li>
      ) : (
        <li key={index} className="w-full text-center">
          <button
            onClick={() => toggleDropdown(index)}
            className="nav-link font-bold w-full text-center"
          >
            {item.name}
          </button>
          {openDropdown === index && (
            <ul className="bg-white text-black w-full">
              {item.links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-center">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      )
    ))}
    <div className="flex items-center justify-center space-x-2">
      <a href="mailto:info@solariumenergy.in" className="material-icons">
        <span className="h-10 w-10 text-xl">
          <MdEmail />
        </span>
      </a>
      <a href="tel:9522495225" className="material-icons text-xl">
        <FaPhone />
      </a>
    </div>
  </ul>
</nav>


            <main className="flex-grow">{children}</main>

            <footer className="bg-[#000B58] text-white p-4 text-center">
              <div className="container mx-auto">
                <p className="mb-2">© 2024 Solar Company. All rights reserved.</p>
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
