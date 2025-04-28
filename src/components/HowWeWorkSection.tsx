
import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Submit Intake Form'
  },
  {
    number: 2,
    title: 'We do the search and curation for list of jobs'
  },
  {
    number: 3,
    title: 'You approve, we do the tedious part (applying)'
  },
  {
    number: 4,
    title: 'You get the interviews'
  }
];

const HowWeWorkSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 md:px-52 bg-white">
      <h2 className="text-2xl font-semibold text-blue-600 mb-12 ml-10">How we work?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 space-x-6 px-14 ml-4">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col w-[170px]">
            <div className="w-12 h-12 rounded-full border-2 border-[#101010] flex items-center justify-center mb-4">
              <span className="text-[#101010] font-semibold text-2xl">{step.number}</span>
            </div>
            <div className="border-t border-[#101010] border-[1.5px]"></div>
            <h3 className="text-sm font-semibold text-blue-600 mb-2 mt-2">{step.title}</h3>
            {/* <p className="text-xs text-center text-gray-500">{step.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWorkSection;
