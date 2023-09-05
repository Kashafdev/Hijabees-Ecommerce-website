import React,{ } from "react";
import "../components/Styles/banner.css";
import img1 from '../assets/abaya-banner.jpg';
// import img2 from '../assets/abaya-banner.jpg';
// import img3 from '../assets/abaya-banner.jpg';

function Banner()
{
 return(
  <React.Fragment>
  <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
        {/* <button>SHOP NOW</button> */}
          <img src={img1} className="d-block w-100" alt="..."/>
         
        </div>
        {/* <div id="bannerbtn2"><button>SHOP NOW</button></div> */}
        {/* <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="..."/>
        </div> */}
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  </React.Fragment>
 );
}
export default Banner;