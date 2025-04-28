import React from 'react';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../public/image 1.png";
import book from "../../public/book.png";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-28 px-6 md:px-10 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 mb-10 md:mb-0 space-y-16">
        <h1 className="text-4xl md:text-7xl font-bold text-white leading-snug mb-4">
          Land job interviews<br /><span className='text-[#022183]'>10x</span> faster
        </h1>
        <p className="text-blue-100 text-lg mb-8 max-w-md">
        Custom-built resumes that match your goals, keywords, and recruiter expectations.
        </p>
        <Button className="bg-white text-[#022183] hover:bg-[#022183] hover:text-[#FEFEFE] rounded-3xl px-6 py-3 text-sm"><p>Get Started</p><FaArrowRight /></Button>
        
      </div>
      
      <div >
        <div >
          <div className="relative mr-4">
           <img src={image1} alt="image1" />
           <p className='text-white text-sm text-center mt-4 '>Download From E-Book</p>
            <div className='h-[100px] w-[100px]  border-white border-2 bg-[#d9d9d9] bg-opacity-30 backdrop-blur-md rounded-[50%] absolute bottom-[-10px] right-[-40px] m-4 flex items-center justify-center'>
              <img src={book} alt="" />
              <div className='absolute p-1 bottom-[0px] left-2 bg-white rounded-xl flex items-center justify-center text-[#022183] text-sm transform rotate-[135deg]'><FaArrowRight /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
