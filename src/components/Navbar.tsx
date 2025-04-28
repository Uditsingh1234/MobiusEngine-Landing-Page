import React from 'react';
import { Button } from '@/components/ui/button';
import Group21 from "../../public/Group 21.png"
import { FaCaretDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-10 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-[50px] flex items-center justify-center">
          <img src={Group21} alt="Img" />
        </div>
        <span className="text-white font-medium">MobuisEngine</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-20">
        <a href="#home" className="text-white text-sm hover:text-blue-200">Home</a>
        <a href="#about" className="text-white text-sm hover:text-blue-200">About Us</a>
        <a href="#plans" className="text-white text-sm hover:text-blue-200">Plans</a>
        <a href="#testimonials" className="text-white text-sm hover:text-blue-200">Testimonials</a>
        <a href="#privacy" className="text-white text-sm hover:text-blue-200">Privacy Policy</a>
        <a href="#more" className="text-white text-sm hover:text-blue-200 flex items-center space-x-2"><p>More</p><FaCaretDown/></a>
      </div>
      
      <Button className="bg-white text-[#022183] hover:bg-[#022183] hover:text-[#FEFEFE] rounded-3xl px-6 py-3">Get Started</Button>
    </nav>
  );
};

export default Navbar;
