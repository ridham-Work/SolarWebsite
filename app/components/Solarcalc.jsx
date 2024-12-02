"use client"
import React, { useState, useRef, useEffect } from 'react';

const Solarcalc = () => {
  const calculatorRef = useRef(null);
  const [energyUsage, setEnergyUsage] = useState('');
  const [dailyConsumption, setDailyConsumption] = useState('');
  const [peakDemand, setPeakDemand] = useState('');
  const [applianceRatings, setApplianceRatings] = useState('');
  const [solarPanels, setSolarPanels] = useState(0);
  const [state, setState] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [electricityCost, setElectricityCost] = useState(8);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [installationCost, setInstallationCost] = useState(0);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const [counting, setCounting] = useState(false);
  const [calculationAttempts, setCalculationAttempts] = useState(0);

  // New state variables for additional counters
  const [calcTries, setCalcTries] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [savings, setSavings] = useState(0);

  const statesOfIndia = [
    // Add the list of states here...
  ];

  // Animate the counter from 0 to the target value infinitely
  const animateCounter = (target, setState) => {
    let count = 0;
    const increment = target / 200; // Increase the animation steps for smoother transition
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = 0; // Reset the counter to 0
        clearInterval(interval); // Stop the current interval
        setTimeout(() => {
          animateCounter(target, setState); // Restart animation after 1 second delay
        }, 1000); // 1-second delay before starting the next loop
      }
      setState(count);
    }, 10); // Update every 10ms
  };

  useEffect(() => {
    animateCounter(100, setCalcTries); // Example limit for calculation attempts
    animateCounter(95, setAccuracy); // Example limit for accuracy
    animateCounter(100, setConfidence); // Example limit for confidence
    animateCounter(100, setSavings); // Example limit for savings
  }, []); //
  const calculatePanels = () => {
    if (!energyUsage || !electricityCost || !customerType || !dailyConsumption || !peakDemand || !applianceRatings || !name || !mobile || !email) {
      alert("Please fill in all fields.");
      return;
    }

    const basePanelRequirement = energyUsage / 300;
    const costFactor = electricityCost / 10;
    const typeFactor = customerType === '2' ? 1 : customerType === '3' ? 1.2 : 1.1;

    const panels = Math.ceil(basePanelRequirement * costFactor * typeFactor);
    setSolarPanels(panels);

    const estimatedInstallationCost = panels * 5000;
    const estimatedMonthlySavings = (energyUsage * electricityCost) - (panels * 100);

    setInstallationCost(estimatedInstallationCost);
    setMonthlySavings(estimatedMonthlySavings);

    setCalculationAttempts(prev => prev + 1);
  };

  return (
    <div>
      <section id="solarcalc">
        {/* Heading and Counters Animation Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#000b58] mb-4">
            Calculate your needs with our Calculator
          </h2>
          <div className="counters-container flex justify-between space-x-4 md:space-x-8">
            <div className="counter-item p-6 rounded-xl  flex-1">
              <div className="text-center mb-2">
                <p className="text-6xl font-bold text-green-500">{calcTries.toFixed(0)}</p>
                <p className="text-lg font-semibold text-[#000b58]">Calculation Attempts</p>
              </div>
            </div>
            <div className="counter-item p-6 rounded-xl  flex-1">
              <div className="text-center mb-2">
                <p className="text-6xl font-bold text-green-500">{accuracy.toFixed(0)}%</p>
                <p className="text-lg font-semibold text-[#000b58]">Accuracy</p>
              </div>
            </div>
            <div className="counter-item p-6 rounded-xl  flex-1">
              <div className="text-center mb-2">
                <p className="text-6xl font-bold text-green-500">{confidence.toFixed(0)}%</p>
                <p className="text-lg font-semibold text-[#000b58]">Confidence in Purchase</p>
              </div>
            </div>
            <div className="counter-item p-6 rounded-xl  flex-1">
              <div className="text-center mb-2">
                <p className="text-6xl font-bold text-green-500">{savings.toFixed(0)}%</p>
                <p className="text-lg font-semibold text-[#000b58]">Electricity Savings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator Form Section */}
        <div ref={calculatorRef} className="calculator-container bg-white text-[#000b58] p-8 rounded-lg shadow-lg mt-8 mx-auto max-w-2xl border-4 border-transparent">
          <h2 className="text-3xl font-bold mb-4 text-center">Solar Energy Calculator</h2>
          <p className="mb-4 text-center text-[#000b58]">Calculate how many solar panels you need to power your home.</p>
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="p-2 border border-gray-300 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              className="p-2 border border-gray-300 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={energyUsage}
              onChange={(e) => setEnergyUsage(e.target.value)}
              placeholder="Enter your monthly energy usage (kWh)"
              className="p-2 border border-gray-300 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={dailyConsumption}
              onChange={(e) => setDailyConsumption(e.target.value)}
              placeholder="Enter your daily energy consumption (kWh)"
              className="p-2 border border-gray-300 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={peakDemand}
              onChange={(e) => setPeakDemand(e.target.value)}
              placeholder="Enter your peak energy demand (kW)"
              className="p-2 border border-gray-300 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={applianceRatings}
              onChange={(e) => setApplianceRatings(e.target.value)}
              placeholder="Enter your appliance energy ratings (kWh)"
              className="p-2 border border-gray-300 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mb-4 w-full">
              <select
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select State</option>
                {statesOfIndia.map((state) => (
                  <option key={state.value} value={state.value}>{state.label}</option>
                ))}
              </select>
            </div>
            <div className="mb-4 w-full">
              <select
                name="customer_type"
                value={customerType}
                onChange={(e) => setCustomerType(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Customer Category</option>
                <option value="2">Residential</option>
                <option value="3">Industrial</option>
                <option value="1">Commercial</option>
              </select>
            </div>
            <div className="mb-4 w-full">
              <input
                type="number"
                value={electricityCost}
                onChange={(e) => setElectricityCost(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Electricity Cost per kWh (₹)"
              />
            </div>
            <button
              onClick={calculatePanels}
              className="bg-[#000b58] text-white font-bold py-2 px-6 rounded-md hover:bg-[#192158] transition duration-300"
            >
              Calculate
            </button>

            {/* Display Results */}
            {solarPanels > 0 && (
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold">Solar Panel Calculation Results</h3>
                <table className="table-auto mt-4 w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Description</th>
                      <th className="px-4 py-2">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Solar Panels Needed</td>
                      <td className="px-4 py-2">{solarPanels}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Estimated Installation Cost</td>
                      <td className="px-4 py-2">₹{installationCost}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Estimated Monthly Savings</td>
                      <td className="px-4 py-2">₹{monthlySavings}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Calculation Attempts</td>
                      <td className="px-4 py-2">{calculationAttempts}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solarcalc;
