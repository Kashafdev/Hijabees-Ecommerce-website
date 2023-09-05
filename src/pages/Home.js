import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Banner from '../components/Banner'
import Header from '../components/layout/Header';
import SupportArea from '../components/SupportArea';
import ProductCards from './../components/productCards';
import BestSellingCards from '../components/BestSellingCards';
import TestimonialSection from '../components/TestimonialSlide';
import NewArrival from '../components/NewArrival';



const Home = () => {
  return (
    <div>
    <>
      <Header/>
      <Navbar/>
      <Banner/>
      <SupportArea/>
      <ProductCards/>
      <BestSellingCards/>
      <NewArrival/>
      <TestimonialSection/>
      <Footer/>
      </>
    </div>
  )
}

export default Home
