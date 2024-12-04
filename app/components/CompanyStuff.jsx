import React from 'react';

const SolarCompanySections = () => {
  return (
    <div className="px-4 py-8 space-y-16">
      {/* Business Card Section */}
      <section className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0">
        <div className="w-full lg:w-1/2">
          <img
            src="/Business_Card_Mockup-transformed.png"
            alt="Business Card"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-[#000b58] mb-4">Business Card Highlights</h2>
          <div className="text-[#000B58] space-y-3">
            <div className=''>
              <h3 className="font-semibold text-lg">Company Overview</h3>
              <p>Name: MS Solar Spark</p>
              <p>Tagline: "Empowering the future with renewable energy solutions."</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Contact Information</h3>
              <p>Phone: +91 9876543210</p>
              <p>Email: info@msolarspark.com</p>
              <p>Office: B-4, Plot No. 210, Station Plot, Maliya Hatina</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Services Offered</h3>
              <ul className="list-disc list-inside">
                {/* <li>Renewable energy consultations</li> */}
                <li>Solar panel installations</li>
                <li>Maintenance and support for energy solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Mission Statement</h3>
              <p>
                To provide sustainable, reliable, and cost-effective energy solutions that drive environmental change.
              </p>
            </div>
          </div>
       <a href="#residential">
       <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200">
            Learn More
          </button>
       </a>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-8 space-y-6 lg:space-y-0">
        <div className="w-full lg:w-1/2">
          <img
            src="/letterhead-transformed.png"
            alt="Company Certificate"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-[#000b58] mb-4">Certificate Highlights</h2>
          <div className="text-[#000B58] space-y-3">
            <div>
              <h3 className="font-semibold text-lg">Professional Authorization</h3>
              <ul className="list-disc list-inside">
                <li>Certified as a government-authorized electrical supervisor and contractor</li>
                <li>Ensures compliance with legal standards and practices</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Trust and Reliability</h3>
              <ul className="list-disc list-inside">
                <li>A testament to the company's credibility and expertise</li>
                <li>Highlights the commitment to delivering top-notch renewable energy solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Industry Recognition</h3>
              <ul className="list-disc list-inside">
                <li>Certification signifies acknowledgment by industry-leading organizations</li>
                <li>Reinforces the brand's presence in the energy sector</li>
              </ul>
            </div>
          </div>
       <a href='#reach-us'>
       <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200">
            Contact Us
          </button>
       </a>
        </div>
      </section>
    </div>
  );
};

export default SolarCompanySections;
