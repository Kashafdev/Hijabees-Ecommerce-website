import React from 'react';
import './Styles/ContactSection.css';
import { Link } from 'react-router-dom';
import AboutUsCards from './AboutUsCards';

const AboutSection = () => {
  return (
    <>
      <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-black">
  <div className="container pt-40 pb-20 pt-md-19 pb-md-21 text-center col-lg-12">
    <div className="row">
      <div className="col-lg-12"> {/* Use the full width */}
        {/* <h3 className="mb-3 text-black">Get in Touch</h3> */}
        <nav className=" mx-auto col-lg-12" aria-label="breadcrumb">
          <ol className="breadcrumb text-white d-flex justify-content-center"> {/* Center the breadcrumb */}
            <li className="breadcrumb-item"><Link to="/" className="link-black">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">About</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>

      {/* <section className="welcome-section" style={{marginBottom: '0px'}}> */}
        <div className="container">
          <div className="welcome-content text-center">
            <h5 className="section-subtitle" style={{ paddingTop: '1px', marginTop:'20px' }}>Who Are We</h5>
            <h1 className="section-title">Welcome To Hijabee's Abaya Marketplace</h1>
            <p className="section-description">
              Hijabee's is Pakistan's Abaya Marketplace, where you can place bulk orders for abayas<br></br> and receive your requested items at your store promptly.
            </p>
          </div>
        </div>
        <AboutUsCards />
      {/* </section> */}
    </>
  );
};

export default AboutSection;
