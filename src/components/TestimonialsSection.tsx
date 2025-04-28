
import React from 'react';
import { Button } from '@/components/ui/button';
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    content: 'Holly is a senior executive who got over 10 job interviews and an offer she accepted',
    author: 'Michael R.',
    role: 'Software Engineer'
  },
  {
    id: 2,
    content: 'Holly is a senior executive who got over 10 job interviews and an offer she accepted',
    author: 'Jennifer T.',
    role: 'Marketing Director'
  },
  {
    id: 3,
    content: 'Holly is a senior executive who got over 10 job interviews and an offer she accepted',
    author: 'David K.',
    role: 'Financial Analyst'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-16 px-6 md:px-52 bg-white">
      <h2 className="text-2xl font-semibold  text-blue-600 mb-12 ml-10">What our clients have to say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-[#0649e7] border border-[#0649e7] rounded-2xl overflow-hidden relative h-[350px] ">

            <div className='bg-white h-[200px] p-4 border-[1.5px] border-[#0649e7] rounded-2xl flex items-center justify-center h-'>
              <div className='p-4 bg-[#0649e7] rounded-3xl text-[#fefefe] flex items-center justify-center'><FaPlay /></div>
            </div>

            <div className='p-4'>
              <p className='text-[#fefefe] text-md'>
                {testimonial.content}
              </p>
            </div>

            <div className='p-4 bg-[#fefefe]  rounded-3xl text-[#0649e7] flex items-center justify-between absolute bottom-5 right-5 transform rotate-[320deg]'>
              <FaArrowRight/>
            </div>

          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="mx-2 rounded-full border-blue-600 text-blue-600 hover:bg-blue-50"><p>More customer testimonials</p><p className='transform rotate-[320deg]'><FaArrowRight /></p></Button>
        <Button className="mx-2  text-white bg-[#0649e7] rounded-full hover:bg-[#022183]"><p>Get Started</p> <FaArrowRight /></Button>
      </div>
    </section>
  );
};

export default TestimonialsSection;











{/* <div className="">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-lg">❝</span>
              </div>
            </div>
            <div className="pt-12">
              <p className="text-gray-700 text-sm mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                  <span className="text-blue-700 text-xs">{testimonial.author[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div> */}