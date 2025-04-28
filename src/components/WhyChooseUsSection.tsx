
import React from 'react';
import { Heart, User, Star } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Proven Results',
    description: '95% of our clients land interviews within 14 days of using our optimized resumes',
    icon: Heart
  },
  {
    id: 2,
    title: 'Expert Resume Help',
    description: 'Our team has insider knowledge from top HR departments and recruitment agencies',
    icon: User
  },
  {
    id: 3,
    title: 'Quality First',
    description: 'We focus on quality over quantity, ensuring your resume stands out to employers',
    icon: Star
  }
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 md:px-52 ">
      <div className='bg-[#EBF1FF] p-10 rounded-3xl'>
      <h2 className="text-2xl font-semibold text-[#022183] mb-12 ml-2 ">Why Choose Us?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto " >
        {benefits.map((benefit) => (
          <div key={benefit.id} className=" rounded-3xl p-6 bg-white border-[2px] border-[#022183] space-y-4">
            <div className="mb-10">
              <benefit.icon className="w-14 h-14 text-[#022183]" />
            </div>
            <h3 className="text-lg text-[#022183] font-semibold mb-2">{benefit.title}</h3>
            <p className="text-[#022183] text-sm ">{benefit.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
