import React from 'react';
import './Styles/CounterSection.css';
import img1 from '../assets/check.svg';
import img2 from '../assets/user.svg';
import img3 from '../assets/briefcase-2.svg';
import img4 from '../assets/award-2.svg';

const CounterItem = ({ iconSrc, count, label }) => (
  <div className="col-md-3">
    <img src={iconSrc} className="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
    <h3 className="counter">{count}</h3>
    <p>{label}</p>
  </div>
);

const CounterSection = () => (
  <section className="wrapper bg-soft-primary">
    <div className="container py-14 py-md-16">
      <div className="row mb-10">
        <div className="col-xl-10 mx-auto">
          <div className="row align-items-center counter-wrapper gy-6 text-center">
            <CounterItem iconSrc={img1} count={7518} label="Completed Projects" />
            <CounterItem iconSrc={img2} count={3472} label="Satisfied Customers" />
            <CounterItem iconSrc={img3} count={2184} label="Expert Employees" />
            <CounterItem iconSrc={img4} count={4523} label="Awards Won" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CounterSection;
