import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header';
import AboutSection from '../components/AboutSection';
import CounterSection from '../components/CounterSection';

const AboutUs = () => {
  return (
    <div>
    <Header/>
      <Navbar/>
      <AboutSection/>
      <CounterSection/>
      <Footer/>
    </div>
  )
}

export default AboutUs;
