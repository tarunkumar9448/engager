import React, {Component} from 'react';
import analytics from '../img/analytics.png';
import LTV from '../img/LTV.png';
import retenation from '../img/user-retenation.png';
import messaging from '../img/app-messaging.png';
import cloud from '../img/cloud-mes.png';
import './About.css';
import data from '../data/Data';


   const Data = props =>{
        const {id, mainclasss, classs, headings, img, texts} = props.data;
    }



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
      const listItems = data.map((d) =>
            <div key={d.id} className={d.mainclasss}>
                <div className={d.classs}>
                    <img src={d.img} alt="Analytics" className="d-block mb-4" />
                    <h2 className="heading">{d.headings}</h2>
                    <p>{d.texts}</p>
                    <a href="#" className="btn btn-outline-light">{this.state.btnText}</a>
                </div>
            </div>             
          )
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
