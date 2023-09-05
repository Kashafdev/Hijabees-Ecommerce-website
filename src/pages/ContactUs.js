import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer';
import ContactSection from '../components/ContactSection';
// import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';
import Header from '../components/layout/Header';

const ContactUs = () => {
  return (
    <div>
    <Header/>
      <Navbar/>
      <ContactSection/>
      {/* <ContactDetails/> */}
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default ContactUs
