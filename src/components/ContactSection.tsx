
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-12 px-6 md:px-10">
      <div className="bg-blue-600 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-xl font-semibold text-white mb-2">STILL HAVE <br /> DOUBTS?</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Contact us</h3>
        <button className="mt-6 md:mt-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <ArrowRight className="w-6 h-6 text-blue-600" />
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
