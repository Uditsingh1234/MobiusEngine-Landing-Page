
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import AboutUsSection from '@/components/AboutUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import PricingPlansSection from '@/components/PricingPlansSection';
import CoachingSection from '@/components/CoachingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-blue-gradient">
        <Navbar />
        <HeroSection />
      </div>
      <HowWeWorkSection />
      <AboutUsSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <PricingPlansSection />
      <CoachingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
