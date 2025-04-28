
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from "react-icons/fa";

const coachingServices = [
  {
    id: 1,
    name: 'Resume Rebuild',
    description:'Crafted for senior to VP-level professionals ready for their next big step.',
    price: 1000,
    period: 'one time',
    features: [
      'Full resume overhaul',
      'ATS optimization',
      'Industry-specific keywords',
      'Quantifiable achievements',
      'Professional formatting',
      'Executive summary crafting',
      'Skills section enhancement',
      'Two rounds of revisions'
    ]
  },
  {
    id: 2,
    name: 'Interview Prep',
    description:'Two sessions to sharpen your story, confidence, and clarity — fast.',
    price: 500,
    period: 'package',
    features: [
      '90-minute mock interview',
      'Personalized feedback',
      'Common questions practice',
      'Salary negotiation coaching',
      'Body language assessment',
      'Industry-specific preparation',
      'Follow-up strategies',
      'Post-interview consultation'
    ]
  }
];

const CoachingSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 md:px-52 ">
      <h2 className="text-3xl font-bold  text-blue-600  ml-10">Resume Building & Coaching</h2>
      <p className='text-sm font-semibold  text-blue-600 mb-12 ml-10'>Let’s talk about where you’re headed — and how your resume can get you there. <br />Schedule a call to get started.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2   max-w-5xl mx-auto text-[#0649e7]">
        {coachingServices.map((service) => (
          <div className='flex items-center justify-center'>
            <div key={service.id} className="border border-[#0649e7] rounded-3xl p-6 bg-white relative w-[70%]">
            <h3 className="text-xl font-bold mb-1">{service.name}</h3>
            <p className='text-sm font-semibold mb-4'>{service.description}</p>
            <div className="flex items-baseline mb-4  border-b-2 border-gray-200 pb-5">
              <span className="text-2xl font-bold">${service.price}</span>
              <span className="font-semibold text-lg ml-1"> {service.period}</span>
            </div>
            <ul className="mb-20 space-y-3 ">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start ">
                  <Check className="w-4 h-4 text-[#fefefe] font-bold mt-0.5 mr-2 flex-shrink-0 bg-green-500 rounded-lg" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-[#0649e7] text-[#fefefe] hover:bg-[#022183] hover:text-[#FEFEFE] rounded-3xl px-6 py-3 absolute bottom-4 right-4"><p>Get Started</p> <FaArrowRight/></Button>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoachingSection;
