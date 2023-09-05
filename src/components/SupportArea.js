import React from 'react';
import img1 from '../assets/support-1.png';
import img2 from '../assets/support-2.png';
import img3 from '../assets/support-3.png';
import './Styles/SupportArea.css';

const SupportArea = () => (
  <div className="support-area">
    <div className="container">
      <div className="row feature-icon-two-wrap">
        <div className="col-md-4">
          <div className="support-wrap-2 support-shape mb-30 text-center">
            <div className="support-content-2">
              <img src = {img1} className="animated"  alt="..." />
              <h5>Free Shipping</h5>
              <p>We will provide Free Shipping Service From Lahore to other cities.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="support-wrap-2 support-shape mb-30 text-center">
            <div className="support-content-2">
            <img src = {img2} className="animated"  alt="..." />
              <h5>Support 24/7</h5>
              <p>We Provide 24/7 WhatsApp Call Service to our customers.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="support-wrap-2 support-shape mb-30 text-center">
            <div className="support-content-2">
            <img src = {img3} className="animated"  alt="..." />
              <h5>Money Return</h5>
              <p>100% Money back Guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SupportArea;
