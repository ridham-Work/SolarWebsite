"use client"
import React, { useState } from "react";
import Image from "next/image";

const SolarCalculator = () => {
  const [energyUsage, setEnergyUsage] = useState('');
  const [solarPanels, setSolarPanels] = useState(0);
  const [state, setState] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [electricityCost, setElectricityCost] = useState(8); // Default value as per the given form

  const statesOfIndia = [
    { value: "35", label: "ANDAMAN and NICOBAR ISLANDS" },
    { value: "28", label: "ANDHRA PRADESH" },
    { value: "12", label: "ARUNACHAL PRADESH" },
    { value: "18", label: "ASSAM" },
    { value: "10", label: "BIHAR" },
    { value: "4", label: "CHANDIGARH" },
    { value: "22", label: "CHHATTISGARH" },
    { value: "26", label: "DADRA and NAGAR HAVELI and DAMAN and DIU" },
    { value: "7", label: "DELHI" },
    { value: "30", label: "GOA" },
    { value: "24", label: "GUJARAT" },
    { value: "6", label: "HARYANA" },
    { value: "2", label: "HIMACHAL PRADESH" },
    { value: "1", label: "JAMMU and KASHMIR" },
    { value: "20", label: "JHARKHAND" },
    { value: "29", label: "KARNATAKA" },
    { value: "32", label: "KERALA" },
    { value: "31", label: "LADAKH" },
    { value: "23", label: "MADHYA PRADESH" },
    { value: "27", label: "MAHARASHTRA" },
    { value: "14", label: "MANIPUR" },
    { value: "17", label: "MEGHALAYA" },
    { value: "15", label: "MIZORAM" },
    { value: "13", label: "NAGALAND" },
    { value: "21", label: "ODISHA" },
    { value: "34", label: "PUDUCHERRY" },
    { value: "3", label: "PUNJAB" },
    { value: "8", label: "RAJASTHAN" },
    { value: "11", label: "SIKKIM" },
    { value: "33", label: "TAMIL NADU" },
    { value: "36", label: "TELANGANA" },
    { value: "16", label: "TRIPURA" },
    { value: "9", label: "UTTAR PRADESH" },
    { value: "5", label: "UTTARAKHAND" },
    { value: "19", label: "WEST BENGAL" }
  ];

  const calculatePanels = () => {
    if (!energyUsage || !electricityCost || !customerType) {
      alert("Please fill in all fields.");
      return;
    }

    // Example logic considering electricity cost and customer type
    const basePanelRequirement = energyUsage / 300;
    const costFactor = electricityCost / 10; // Adjust factor as needed
    const typeFactor = customerType === '2' ? 1 : customerType === '3' ? 1.2 : 1.1; // Residential, Industrial, Commercial

    const panels = Math.ceil(basePanelRequirement * costFactor * typeFactor);
    setSolarPanels(panels);
  };

  return (
    <div className="bg-white text-black p-8 rounded-lg shadow-lg mt-8 mx-auto max-w-2xl">
      <h2 className="text-3xl font-bold mb-4 text-center">Solar Energy Calculator</h2>
      <p className="mb-4 text-center">Calculate how many solar panels you need to power your home.</p>
      <div className="flex flex-col items-center">
        <input
          type="number"
          value={energyUsage}
          onChange={(e) => setEnergyUsage(e.target.value)}
          placeholder="Enter your monthly energy usage (kWh)"
          className="p-2 border border-gray-300 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="form-group w-full">
          <label className="block mb-2">Select State and Customer Category</label>
          <select
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="form-control mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select State</option>
            {statesOfIndia.map((state) => (
              <option key={state.value} value={state.value}>{state.label}</option>
            ))}
          </select>
          <select
            name="customer_type"
            value={customerType}
            onChange={(e) => setCustomerType(e.target.value)}
            className="form-control mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category of Customer</option>
            <option value="2">Residential</option>
            <option value="3">Industrial</option>
            <option value="1">Commercial</option>
          </select>
        </div>
        <div className="form-group w-full">
          <label className="block mb-2">What is your average Electricity Unit Cost? :</label>
          <input
            type="number"
            name="electricity_txt"
            value={electricityCost}
            onChange={(e) => setElectricityCost(e.target.value)}
            className="form-control mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={calculatePanels}
          className="px-6 py-2 bg-[#000b58] text-white font-bold rounded hover:bg-[#192158] transition duration-300 transform hover:scale-105"
        >
          Calculate
        </button>
        {solarPanels > 0 && (
          <div className="mt-4 text-center">
            <p className="text-lg">You need approximately <span className="font-bold">{solarPanels}</span> solar panels.</p>
          </div>
        )}
      </div>
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
          <h1 className="text-4xl font-bold tracking-wide">
            Solar and Green Energy
          </h1>
          <p className="mt-2 text-lg tracking-wider font-bold">
            Empowering a sustainable future with renewable energy solutions.
          </p>
          <button className="mt-4 px-6 py-2 bg-[#000b58] text-white font-bold rounded hover:bg-[#192158]">
            Start Saving Now
          </button>
        </div>
      </div>
      <SolarCalculator />
      
    </div>
  );
};

export default Page;
