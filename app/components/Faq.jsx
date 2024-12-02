import { useState } from 'react';

const faqData = [
  { 
    question: 'What is solar energy?', 
    answer: (
      <>
        Solar energy is the energy harnessed from the sun using solar panels to generate electricity or heat. 
        <br />
        <strong>Example:</strong> Solar panels on rooftops can generate electricity to power your home appliances.
      </>
    )
  },
  { 
    question: 'How do solar panels work?', 
    answer: (
      <>
        Solar panels work by converting sunlight into electricity using photovoltaic cells. These cells capture solar energy and convert it into direct current (DC) electricity.
        <br />
        <strong>Tip:</strong> An inverter is used to convert DC electricity to alternating current (AC), which powers most household devices.
      </>
    )
  },
  { 
    question: 'Is solar energy cost-effective?', 
    answer: (
      <>
        Yes, solar energy can significantly reduce electricity bills and provide long-term savings. Although the initial installation cost is high, it pays off over time through reduced utility bills.
        <br />
        <strong>Fact:</strong> Many homeowners recover their initial costs within 5-10 years.
      </>
    )
  },
  { 
    question: 'How long do solar panels last?', 
    answer: (
      <>
        Most solar panels have a lifespan of 25 to 30 years with proper maintenance. Over time, their efficiency may reduce slightly.
        <br />
        <strong>Maintenance Tip:</strong> Regular cleaning and annual check-ups can help extend their life.
      </>
    )
  },
  { 
    question: 'What happens on cloudy days?', 
    answer: (
      <>
        Solar panels still generate electricity on cloudy days, although at a reduced efficiency. They can capture diffused sunlight to continue producing power.
        <br />
        <strong>Fact:</strong> Modern solar panels are designed to be effective even in less-than-ideal weather conditions.
      </>
    )
  },
  { 
    question: 'Do solar panels require a lot of maintenance?', 
    answer: (
      <>
        Solar panels are low-maintenance. Periodic cleaning to remove dirt and debris is usually sufficient.
        <br />
        <strong>Pro Tip:</strong> Check for any shading from nearby trees, as this can reduce the system's efficiency.
      </>
    )
  },
  { 
    question: 'Can I go completely off-grid with solar panels?', 
    answer: (
      <>
        Yes, but it requires a comprehensive system, including solar panels, batteries, and an inverter to store and use power efficiently.
        <br />
        <strong>Note:</strong> Off-grid systems are ideal for remote locations with no access to the power grid.
      </>
    )
  },
  { 
    question: 'Are solar panels environmentally friendly?', 
    answer: (
      <>
        Yes, solar panels produce clean, renewable energy and significantly reduce carbon emissions.
        <br />
        <strong>Did you know?</strong> A typical solar system can offset several tons of CO2 emissions annually.
      </>
    )
  },
  { 
    question: 'How much space do I need for solar panels?', 
    answer: (
      <>
        The space required depends on your energy needs and the efficiency of the solar panels. A typical residential system might need 200-400 square feet.
        <br />
        <strong>Tip:</strong> You can also explore ground-mounted systems if roof space is limited.
      </>
    )
  },
  { 
    question: 'What are the government incentives for solar energy?', 
    answer: (
      <>
        Many governments offer tax credits, rebates, and other incentives to promote solar energy adoption.
        <br />
        <strong>Example:</strong> In some countries, you can receive up to 30% of the system cost as a tax credit.
      </>
    )
  },
  { 
    question: 'Can solar panels increase my property value?', 
    answer: (
      <>
        Yes, homes with solar energy systems often have higher property values and sell faster.
        <br />
        <strong>Fact:</strong> Buyers are increasingly interested in energy-efficient and eco-friendly homes.
      </>
    )
  },
  { 
    question: 'What is the return on investment (ROI) for solar energy?', 
    answer: (
      <>
        The ROI for solar energy depends on initial costs, savings on electricity bills, and available incentives. Typically, the investment pays off in 5-10 years.
        <br />
        <strong>Bonus:</strong> After the payback period, the electricity you generate is essentially free.
      </>
    )
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#000b58]">FAQs</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <div 
              className="flex justify-between items-center p-4 bg-[#f0f4ff] cursor-pointer transition-all duration-300" 
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-[#000b58]">{item.question}</h3>
              <div 
                className={`text-2xl font-bold text-[#f90] transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-45' : 'rotate-0'
                }`}
              >
                +
              </div>
            </div>
            <div 
              className={`transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="p-4 text-gray-700">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
