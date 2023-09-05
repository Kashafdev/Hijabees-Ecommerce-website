import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import the necessary icons
import './Styles/ContactDetails.css';

const ContactDetails = () => {
  return (
    <section className="wrapper bg-light angled upper-end">
      <div className="container pb-20">
        <div className="row mb-14 mb-md-16">
          <div className="col-xl-10 mx-auto mt-n19">
            <div className="card">
              <div className="row gx-0">
                <div className="col-lg-6 align-self-stretch">
                  <div className="map map-full rounded-top rounded-lg-start">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str" style={{ width: '100%', height: '100%', border: 0 }} allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-10 p-md-11 p-lg-14">
                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1"> <FaMapMarkerAlt /></div>
                      </div>
                      <div className="align-self-start justify-content-start">
                        <h5 className="mb-1">Address</h5>
                        <address>Moonshine St. 14/05 Light City, <br className="d-none d-md-block" />London, United Kingdom</address>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1"> <FaPhone /></div>
                      </div>
                      <div>
                        <h5 className="mb-1">Phone</h5>
                        <p>00 (123) 456 78 90 <br />00 (987) 654 32 10</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1"> <FaEnvelope /></div>
                      </div>
                      <div>
                        <h5 className="mb-1">E-mail</h5>
                        <p className="mb-0"><a href="mailto:sandbox@email.com" className="link-body ">hijabee@email.com</a></p>
                        <p className="mb-0"><a href="mailto:help@sandbox.com" className="link-body">help@hijabee.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
