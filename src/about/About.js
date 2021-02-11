import React, {Component} from 'react';
import analytics from '../img/analytics.png';
import LTV from '../img/LTV.png';
import retenation from '../img/user-retenation.png';
import messaging from '../img/app-messaging.png';
import cloud from '../img/cloud-mes.png';
import './About.css';

class About extends Component{
      constructor(props) {
        super(props);
        this.state = {
        heading: "Tap the Huge Potential - Unlock Success with engager360",
        text: "engager360 is a unique tool designed with the sole aim of helping mobile app startups achieve greater user acquisition & retention in predictable time span.",
        btnText: "Learn More"
        };
      }
    
    
     render(){
  return (
    <section id="about" className="bg-white py-5 success-section">
        <div className="container">
            <h2 className="sub-heading text-center">{this.state.heading}</h2>
            <p className="text-center text-sub-heading mx-auto">{this.state.text}</p>
            <div className="bg-white shadow p-4 p-lg-5 mb-4">
                <div className="row justify-content-md-center">
                          <div className="col-md-6 col-xl-4 mb-4">
                        <div className="text-white bg-purpul p-4 p-lg-5">
                            <img src={analytics} alt="Analytics" className="d-block mb-4" />
                            <h2 className="heading">Analytics</h2>
                            <p>Boost your chances of user acquisition by closely monitoring and analyzing user behavior. </p>
                            <a href="#" className="btn btn-outline-light">{this.state.btnText}</a>
                        </div>
                    </div>
              
     
                    <div className="col-md-6 col-xl-4 mb-4">
                        <div className="text-white bg-yellow p-4 p-lg-5">
                            <img src={LTV} alt="LTV" className="d-block mb-4" />
                            <h2 className="heading">LTV</h2>
                            <p>By monitoring user session duration, user bounce off ratio, etc., it is possible to predict the LTV (Life Time Value).</p>
                            <a href="#" className="btn btn-outline-light">{this.state.btnText}</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mb-4">
                        <div className="text-white bg-green p-4 p-lg-5">
                            <img src={retenation} alt="User Retentation" className="d-block mb-4" />
                            <h2 className="heading">User Retentation</h2>
                            <p>The app facilitates user retention by allowing active/ inactive status tracking, installation tracking and more.</p>
                            <a href="#" className="btn btn-outline-light">{this.state.btnText}</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mb-4 md-lg-0">
                        <div className="text-white bg-blue p-4 p-lg-5">
                            <img src={messaging} alt="In-App Messaging" className="d-block mb-4" />
                            <h2 className="heading">In-App Messaging</h2>
                            <p>It helps improve user engagement by providing solution to customer queries in real time. </p>
                            <a href="#" className="btn btn-outline-light">{this.state.btnText}</a>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-8">
                        <div className="text-white bg-orange p-4 p-lg-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={cloud} alt="Cloud Messaging" className="d-block mb-4" />
                                </div>
                                <div className="col-md-9">
                                    <h2 className="heading">Cloud Messaging</h2>
                                    <p>Since messages are encrypted in cloud messaging, it gives a reliable & secure platform for businesses to communicate with their customers. </p>
                                    <a href="#" className="btn btn-outline-light">{this.state.btnText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}}

export default About;
