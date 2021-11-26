import React from 'react';
import './WhyPeopleChose.css'
const WhyPeopleChose = () => {
        return (
                <div>
                        <div className="p-lg-5 m">
                       <div className="p-lg-4">
                       <h1>Reliability is Our First Priority</h1>
                       </div>
                       <div className="row">
                           
                              <div className="col-lg-6">
                                <img className="img-fluid w-75" src="https://i.ibb.co/g32h132/young-african-courier-knocking-door-1.jpg" />
                              </div>
                           <div className="col-lg-6 align-items-center justify-content-center d-flex flex-column p-lg-4">
                                <div>
                                <h3>Fast and Secure Shipping</h3>
                                <p>SHIPPER is working 24/7 all over LA. We offer the lowest price with the highest value through our innovative logistics design.</p>
                                </div>
                                <div>
                                <h3>100% Satisfaction</h3>
                                <p>Our clients are happy with our services. Find out more about us. Contact us to know more.</p>
                                </div>
                                
                           </div>
                       </div>
              </div>
                        <div className="footer-top p-lg-5">
                           <div className="p-lg-3">
                           <h1>Subscribe to find out about our most exclusive offers</h1>
                           
                           </div>
                           <div className="p-lg-3">
                           <div class="input-group mb-3">
                                <input type="text" className="form-control mx-2" placeholder="Eenter your email to subscribe" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                   <button className="btn btn-light sub-btn mx-2" type="button" id="button-addon2">Subscribe</button>
                                </div>
                         </div>
                           </div>

                        </div>
         </div>
        );
};

export default WhyPeopleChose;