import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Footer from '../components/Footer/Footer'
import DetailsSection from '../components/Home/DetailsSection'
import ServiceSection from '../components/Home/ServiceSection'
import DoctorSection from '../components/Home/DoctorSection'
import ScheduleSection from '../components/Home/ScheduleSection'
import FaqSection from '../components/Home/FaqSection'
import MassageSection from '../components/Home/MassageSection'

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">

      <HeroSection/>

      <DetailsSection/>

      <ServiceSection/>

      <DoctorSection/>

      <ScheduleSection/>

      <FaqSection/>

      <MassageSection/>

      <Footer/>

    </div>
  )
}

export default HomePage
