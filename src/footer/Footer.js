import React, {Component} from 'react';
import call from '../img/call-us.png';
import facebook from '../img/facebook-hover.png';
import linkedin from '../img/linkedin-hover.png';
import twitter from '../img/twitter-hover.png';
import instagram from '../img/instagram-hover.png';
import pinterest from '../img/pinterest-hover.png';
import './Footer.css';

class Footer extends Component{
    render(){
  return (
        <footer id="contact" className="footer">
        <div className="container">
            <div className="row footer-section no-gutters mb-4">
                <div className="col-md-8 text-center text-md-left left-side">
                    <p className="text-white m-0 align-middle">Let’s Talk How engager360 Can Help You Maximize Your Mobile App User Acquisition & Retention Rate!</p>
                </div>
                <div className="col-md-4 text-center right-side">
                    <img src={call} alt="call-us" className="d-block mx-auto mx-3 mb-3" />
                    <p className="text-white">Call us for a free 30 minutes’ consultation!</p>
                    <a href="#" className="btn btn-light px-4">Schedule</a>
                </div>
            </div>
            <div className="text-center menu mb-3">
                <a href="#home" className="d-inline-block slow js-scroll-trigger">Home</a>
                <a href="#about" className="d-inline-block slow js-scroll-trigger">About Us</a>
                <a href="#user" className="d-inline-block slow js-scroll-trigger">Users</a>
                <a href="#services" className="d-inline-block slow js-scroll-trigger">Services</a>
                <a href="#contact" className="d-inline-block slow js-scroll-trigger">Contact Us</a>
            </div>
            <p className="text-center icons mb-4 mb-lg-5">
                <a href="#" className="d-inline-block" target="_blank"><img src={facebook} alt="facebook" className="mx-2 slow" /></a>
                <a href="#" className="d-inline-block" target="_blank"><img src={linkedin} alt="linkedin" className="mx-2 slow" /></a>
                <a href="#" className="d-inline-block" target="_blank"><img src={twitter} alt="twitter" className="mx-2 slow" /></a>
		        <a href="#" className="d-inline-block" target="_blank"><img src={instagram} alt="instagram" className="mx-2 slow" /></a>
		        <a href="#" className="d-inline-block" target="_blank"><img src={pinterest} alt="pinterest" className="mx-2 slow" /></a>
            </p>
        </div>
        <div className="copy-text py-4 bg-dark">
            <p className="text-center text-white small m-0">Copyright © 2019 engager360 Inc. All Rights Reserved.</p>
        </div>
    </footer>
  );
}
}

export default Footer;
