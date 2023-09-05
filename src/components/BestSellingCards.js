import React from 'react'
import img1 from '../assets/cardimg1.webp';
import img2 from '../assets/cardimg2.webp';
import img3 from '../assets/cardimg3.webp';
import img4 from '../assets/cardimg4.webp';
import img5 from '../assets/card5.webp';
import img6 from '../assets/card6.webp';
import img7 from '../assets/card7.webp';
import img8 from '../assets/card8.webp';

import './Styles/BestSellingCards.css';
import { Link } from 'react-router-dom';

const BestSellingCards = () => {
  return (
    <>
      <h3 className="main-headings text-center"><span>TOP LATEST COLLECTION
</span></h3>
    <div className="container" id="top-cards">
    <div className="row">
        <div className="col-md-3 py-3 py-md-0">
            <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                <img src={img1} alt="" />
                <div className="card-img-overlay">
                     {/* <h5 className="card-titel">WOMANS</h5> */}
                     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ratione!</p>
                    <p><strong>$200.30 <strike>$250.10</strike></strong></p>  */}
                    <Link to="/products">
        <button>Quick View</button>
      </Link>
                </div>
            </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
            <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                <img src={img2} alt="" />
                <div className="card-img-overlay">
                     {/* <h5 className="card-titel">GIRLS</h5> */}
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ratione!</p>
                    <p><strong>$150.10 <strike>$200.10</strike></strong></p>  */}
                    <Link to="/products">
        <button>Quick View</button>
      </Link>
                </div>
            </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
            <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                <img src={img3} alt="" />
                <div className="card-img-overlay">
                     {/* <h5 className="card-titel">GIRLS</h5> */}
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ratione!</p>
                    <p><strong>$150.10 <strike>$200.10</strike></strong></p>  */}
                    <Link to="/">
        <button>Quick View</button>
      </Link>
                </div>
            </div>
        </div>
        
        <div className="col-md-3 py-3 py-md-0">
            <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                <img src={img4} alt="" />
                <div className="card-img-overlay">
                     {/* <h5 className="card-titel">ACCESSORIES</h5> */}
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p><strong>$50.10 <strike>$60</strike></strong></p>  */}
                    <Link to="/products">
        <button>Quick View</button>
      </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
    <br>
    </br>
    <div className="container" id="top-cards">
    <div className="row">
        <div className="col-md-3 py-3 py-md-0">
            <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                <img src={img5} alt="" />
                <div className="card-img-overlay">
                     {/* <h5 className="card-titel">WOMANS</h5> */}
                     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ratione!</p>
                    <p><strong>$200.30 <strike>$250.10</strike></strong></p>  */}
                    <Link to="/products">
        <button>Quick View</button>
      </Link>
                </div>
            </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
            <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                <img src={img6} alt="" />
                <div className="card-img-overlay">
                     {/* <h5 className="card-titel">GIRLS</h5> */}
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ratione!</p>
                    <p><strong>$150.10 <strike>$200.10</strike></strong></p>  */}
                    <Link to="/products">
        <button>Quick View</button>
      </Link>
                </div>
            </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
            <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                <img src={img7} alt="" />
                <div className="card-img-overlay">
                     {/* <h5 className="card-titel">GIRLS</h5> */}
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ratione!</p>
                    <p><strong>$150.10 <strike>$200.10</strike></strong></p>  */}
                    <Link to="/products">
        <button>Quick View</button>
      </Link>
                </div>
            </div>
        </div>
        
        <div className="col-md-3 py-3 py-md-0">
            <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                <img src={img8} alt="" />
                <div className="card-img-overlay">
                     {/* <h5 className="card-titel">ACCESSORIES</h5> */}
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p><strong>$50.10 <strike>$60</strike></strong></p>  */}
                    <Link to="/products">
        <button>Quick View</button>
      </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
</>
  )
}

export default BestSellingCards
