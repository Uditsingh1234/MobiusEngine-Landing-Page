
import React from 'react';
import Group22 from "../../public/Group 22.png"
import FotterLogo from "../../public/MobuisEngine.png"
import { FaLinkedinIn } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-[#0649E7] ">
      <div className='px-40'>
        <div>
          <img src={Group22} className='h-8' alt="" />
          <img src={FotterLogo} className='w-[100px]' alt="" />
          <div className='border-b-2 bg-gray-400 mt-6 mb-6 w-[30%]'></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
           <h2 className='font-semibold mb-3 underline'>Address</h2>
           <p className='text-sm'>1875 Mission St Ste 103 #450
           San Francisco, CA 94103</p>
          </div>

          <div>
            <h2 className='font-semibold mb-3 underline'>Email</h2>
            <p className='underline text-sm'>finance@mobiusengine.ai</p>
          </div>

          <div className='mr-20'>
            <h2 className='font-semibold mb-3 underline '>Telephone</h2>
            <p className='text-sm'>650-889-6026</p>
          </div>

          <div>
            <h2 className='font-semibold underline'>Socials</h2>
            <div className='flex gap-4 mt-3'>
              <div className='p-3 border-[#0649e7] border-[1px] rounded-3xl text-lg'><FaLinkedinIn/></div>
              <div className='p-3 border-[#0649e7] border-[1px] rounded-3xl text-lg'><FaLinkedinIn/></div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#0649E7]  flex items-center justify-between text-[#fefefe] p-4">
          <p className="text-sm  pl-10">
            © {new Date().getFullYear()} Mobiusservices LLC
          </p>

          <div className='flex items-center gap-x-4 justify-center pr-10'>
            <p>Term & Condition</p>
            <p >Privacy Policy</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
