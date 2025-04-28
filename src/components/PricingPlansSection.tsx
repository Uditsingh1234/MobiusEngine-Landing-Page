
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from "react-icons/fa";

const pricingPlans = [
  {
    id: 1,
    name: 'April Promo',
    price: 35,
    period: 'one time',
    features: [
      'ATS-optimized resume template',
      'Keyword optimization',
      'Professional formatting',
      'Digital download (PDF, Word)'
    ],
    popular: false,
    color: 'blue'
  },
  {
    id: 2,
    name: 'Starter',
    price: 50,
    period: 'one time',
    features: [
      'Everything in April Promo',
      'Content review by HR expert',
      'One round of revisions',
      '24/7 support via email'
    ],
    popular: true,
    color: 'blue'
  },
  {
    id: 3,
    name: 'Plus',
    price: 100,
    period: 'one time',
    features: [
      'Everything in Starter',
      'Custom cover letter',
      'LinkedIn profile optimization',
      'Job search strategy call'
    ],
    popular: false,
    color: 'blue'
  },
  {
    id: 4,
    name: 'Advanced',
    price: 150,
    period: 'one time',
    features: [
      'Everything in Plus',
      'Targeted applications to jobs',
      'Two additional resume versions',
      'Weekly coaching calls (1 month)'
    ],
    popular: false,
    color: 'blue',
    fullWidth: true
  }
];

const PricingPlansSection: React.FC = () => {
  return (
    <section id="plans" className="w-full py-16 px-6 md:px-52 bg-white text-[#0649E7]">
      <h2 className="text-3xl font-semibold mb-12 ml-10">Job Application Service Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto mb-6">
        {pricingPlans.slice(0, 3).map((plan) => (
          <div key={plan.id} className="border border-[#0649E7] rounded-3xl p-6 bg-white relative">
            {plan.popular && (
              <div className="absolute border-[1px] border-[#0649e7] top-4 right-4 bg-[#EBF1FF] text-[#0649e7] text-xs px-2 py-1 rounded-full">
                Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="font-bold text-xl ml-1">/{plan.period}</span>
            </div>
            <div className='border-b-2 border-gray-200 mb-6'></div>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-4 h-4 text-[#fefefe] bg-green-500 rounded-xl mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-[#0649e7] text-[#fefefe] hover:bg-[#022183]  rounded-3xl px-6 py-3">Get Started <FaArrowRight /></Button>
          </div>
        ))}
      </div>

      {/* Advanced plan - full width */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-blue-600 rounded-3xl p-6 text-white grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="md:col-span-3 relative">
            <div className='mb-6'>
              <h3 className="text-xl font-bold mb-1">{pricingPlans[3].name}</h3>
              <p>Top-tier support for serious job hunters:</p>
              <div className='border-gray-400 border-b w-[50%] border-[1px] mt-6'></div>
            </div>

            <div className="flex items-baseline mb-4 absolute top-1 right-[-250px]">
              <span className="text-4xl font-bold">${pricingPlans[3].price}</span>
              <span className="text-xl ml-1">/{pricingPlans[3].period}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {pricingPlans[3].features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-4 h-4 text-[#fefefe] bg-green-400 rounded-xl mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center absolute bottom-4 right-4">
             <Button className="bg-white text-[#022183] hover:bg-[#022183] hover:text-[#FEFEFE] rounded-3xl px-6 py-3">Get Started <FaArrowRight /></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
