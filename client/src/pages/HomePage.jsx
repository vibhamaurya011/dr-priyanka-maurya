// HomePage.js
import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Footer from '../components/Footer/Footer';
import DetailsSection from '../components/Home/DetailsSection';
import ServiceSection from '../components/Home/ServiceSection';
import FaqSection from '../components/Home/FaqSection';
import MassageSection from '../components/Home/MassageSection';
import ContactSection from '../components/Home/ContactSection';
import AboutSection from '../components/Home/AboutSection';

function HomePage() {
  return (
    <div className="bg-blue-100">

      {/* Hero Section */}
      
      <HeroSection />

      {/* Details Section */}

      <DetailsSection />

      {/* Service Section */}

      <ServiceSection />

      {/* Doctor Section */}

      <AboutSection/>

      {/* Contect Section */}
      
      <ContactSection/>

      {/* FAQ Section */}

      <FaqSection />

      {/* Massage Section */}
      
      <MassageSection/>
      
    </div>
  );
}

export default HomePage;
