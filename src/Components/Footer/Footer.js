import React from 'react';
import './Footer.css'
const Footer = () => {
        return (
                <div className="footer-bg">
                      <div className="d-flex justify-content-around p-lg-5">
                              <div>
                                <h3>Our Address</h3>
                                <p>Las Angeles, LA</p>
                                <p>876885, Las Angeles</p>
                              </div>
                              <div>
                                <img src="https://i.ibb.co/McfMhjF/Shipper-removebg-preview.png" />
                              </div>
                              <div>
                                <h3>Call us 24/7</h3>
                                <p> Teli: 01897489877</p>
                              </div>
                      </div> 
                      <p>
                          SHIPPER © 2021. All rights reserved.</p> 
                </div>
        );
};

export default Footer;