import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/ContactSection.css';

const ProductSection = () => {
  return (
    <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-black">
      <div className="container pt-40 pb-20 pt-md-19 pb-md-21 text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* <h3 className="mb-3 text-black">Get in Touch</h3> */}
            <nav className="d-inline-block" aria-label="breadcrumb">
              <ol className="breadcrumb text-white">
                <li className="breadcrumb-item"><Link to="/" className="link-black">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Products</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
