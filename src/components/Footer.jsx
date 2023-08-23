import React, { Suspense } from "react";

import { Link } from 'react-router-dom';

import './Footer.css';


const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Filler Filler Filler Filller Filler
        </p>
        <p className='footer-subscription-text'>
          Filler Filler Filler
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            
          </form>
        </div>
      </section>
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            
          </div>
        </div>
      </div> */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
           
          </div>
          {/* <small class='website-rights'>TRVL © 2020</small> */}
          <div class='social-icons'>
            
          </div>
        </div>
      </section>
    </div>
      );
};

export default Footer;
