
import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Ashwin',
    description1: 'Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.',
    description2: "Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 2,
    name: 'Nicole',
    description1: 'Nicole is an Executive coach at Mobius specializing in resume builds and career advisory. ',
    description2: "With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }
];

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 px-6 md:px-52 bg-dark-blue-gradient text-white">
      <h2 className="text-2xl font-bold mb-12 ml-10 ">About Us</h2>

      <div className="flex flex-col space-y-12 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col md:flex-row items-center ml-10">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-6 relative">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              <div className='h-10 w-10 bg-white rounded-xl absolute right-0 bottom-0 '></div>
            </div>
            <div className='w-[70%] ml-10'>
              <p className="text-gray-300 text-sm">{member.description1}</p>
              <p className="text-gray-300 text-sm mt-2">{member.description2}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" text-start pl-64 ml-32 text-sm mb-20 mt-16">
        <p className="text-[#fefefe] mb-10">Learn more about our Board of Advisors​ ↗</p>
        <p className='text-[#fefefe] mb-4'>Follow us on our Linkedin page ↗</p>
      </div>
    </section>
  );
};

export default AboutUsSection;
