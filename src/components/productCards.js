import React from 'react';
import img1 from '../assets/Abaya6.webp';
import img2 from '../assets/hijab.jpg';
import img3 from '../assets/chadar1.webp';
import img4 from '../assets/HijabCap2.png';
import './Styles/productCards.css';

const productCards = () => {
  return (
    <>
      <h3 className="main-headings text-center mt-19"><span>OUR COLLECTION</span></h3>
      <div className="container" id="product-cards">
        <div className="row">
          <div className="col-md-3 py-3 py-md-0">
            <div className="card text-center" style={{ backgroundColor: "#a9a9a926" }}>
              <img src={img1} alt="" className="card-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Abaya</h5>
              </div>
            
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card text-center" style={{ backgroundColor: "#a9a9a926" }}>
              <img src={img2} alt="" className="card-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Hijab & Niqab</h5>
              </div>
            
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card text-center" style={{ backgroundColor: "#a9a9a926" }}>
              <img src={img3} alt="" className="card-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Chadar</h5>
              </div>
            
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card text-center" style={{ backgroundColor: "#a9a9a926" }}>
              <img src={img4} alt="" className="card-img" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Hijab Cap</h5>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default productCards;
