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
            const data =[
                {
                    "id":'1',
                    "mainclasss":"col-md-6 col-xl-4 mb-4",
                    "classs":"text-white bg-purpul p-4 p-lg-5",
                    "headings":"Analytics",
                    "img": analytics,
                    "texts":"Boost your chances of user acquisition by closely monitoring and analyzing user behavior."
                },
                {
                    "id":'2',
                    "mainclasss":"col-md-6 col-xl-4 mb-4",
                    "classs":"text-white bg-yellow p-4 p-lg-5",
                    "headings":"LTV",
                    "img": LTV,
                    "texts":"By monitoring user session duration, user bounce off ratio, etc., it is possible to predict the LTV (Life Time Value)."
                },
                {
                    "id":'3',
                    "mainclasss":"col-md-6 col-xl-4 mb-4",
                    "classs":"text-white bg-green p-4 p-lg-5",
                    "headings":"User Retentation",
                    "img": retenation,
                    "texts":"The app facilitates user retention by allowing active/ inactive status tracking, installation tracking and more."
                },
                {
                    "id":'4',
                    "mainclasss":"col-md-6 col-xl-4 mb-4",
                    "classs":"text-white bg-blue p-4 p-lg-5",
                    "headings":"In-App Messaging",
                    "img": messaging,
                    "texts":"It helps improve user engagement by providing solution to customer queries in real time."}
            ];
            const listItems = data.map((d) =>
                    <div key={d.id} className={d.mainclasss}>
                        <div className={d.classs}>
                            <img src={d.img} alt="Analytics" className="d-block mb-4" />
                            <h2 className="heading">{d.headings}</h2>
                            <p>{d.texts}</p>
                            <a href="#" className="btn btn-outline-light">{this.state.btnText}</a>
                        </div>
                    </div>             
                  );
  return (
    <section id="about" className="bg-white py-5 success-section">
        <div className="container">
            <h2 className="sub-heading text-center">{this.state.heading}</h2>
            <p className="text-center text-sub-heading mx-auto">{this.state.text}</p>
            <div className="bg-white shadow p-4 p-lg-5 mb-4">
                <div className="row justify-content-md-center">
                   {listItems }
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
