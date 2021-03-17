import React, {Component} from 'react';
import avg from '../img/average.png';
import avg2 from '../img/Average-graph.jpg';
import android from '../img/icon-ios-android.jpg';
import cloud from '../img/cloud.png';
import apps from '../img/apps.png';
import download from '../img/download.png';
import dollar from '../img/dollar.png';
import mobile from '../img/mobile-app.png';
//import './Header.css';
class Header extends Component{
    constructor(props) {
    super(props);
    this.state = {
    USD: "74.534",
    years: "2021",
    card1Heading: "Average User Acquisition Cost for Mobile Apps Worldwide",
    heading: "Key to User Acquisition & Retention",
    text: "Mobile app startups & businesses, struggling to boost their user acquisition & retention rates, stand to gain a lot from engager360 – the most trusted user acquisition tool available under the Sun.",
    btnText: "Schedule Demo"
    };
  }
    render(){
  return (
    <header id="home" className="masthead">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-xl-5 mb-5">
                    <div className="intro-text">
                        <h1 className="main-heading text-white">{this.state.heading}</h1>
                        <p className="text-heading text-white">{this.state.text}</p>
                        <a className="btn btn-yellow btn-xl js-scroll-trigger px-4 py-2 slow" href="#">{this.state.btnText}</a>
                    </div>
                </div>
                <div className="col-lg-8 col-xl-7">
                    <div className="graph-section card-columns position-relative">
                        <div className="card one">
                            <div className="card-body">
                                <h6 className="card-title d-flex align-items-center">{this.state.card1Heading} <img src={avg} alt="average" className="d-block" /> </h6>
                                <p className="card-text">Across Latin America- Approx.</p>
                                <h2>{this.state.USD}</h2>
                                <p className="mb-4">U.S Dollars <small className="text-green">Last Year</small></p>
                                <img src={avg2}alt="graph" className="img-fluid d-block" />
                            </div>
                        </div>
                        <div className="card five">
                            <div className="card-body">
                                <h2 className="mb-3">Cloud Messaging <small className="d-block">Helps User Acquisition as it’s:</small></h2>
                                <ul className="list-unstyled mb-0 pl-4">
                                    <li className="bulet">Encrypted</li>
                                    <li className="bulet">Safe & Secure</li>
                                </ul>
                                <div className="d-flex align-items-start w-100">
                                    <div><img src={android} alt="ios-android" className="mt-4" /></div>
                                    <div><img src={cloud} alt="cloud" className="ml-auto img-fluid" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="card three">
                            <div className="card-body">
                                <div className="card-title d-flex align-items-center"><img src={dollar} alt="average" className="d-block ml-auto mt-2" /> </div>
                                <p><a className="btn btn-yellow text-white btn-sm js-scroll-trigger">Conversion</a></p>
                                <p className="card-text">Cost – User Acquisition vs. Conversion</p>
                                <h2>For Every $90 <span className="text-green">Spent</span></h2>
                                <p className="card-text">In User Acquisition, Only $1 is Spent on Converting Them.</p>
                            </div>
                        </div>
                        <div className="card two">
                            <div className="card-body">
                                <img src={apps} alt="average" className="img-fluid d-block mx-auto my-3" />
                                <p className="card-text">An Average Person Uses 9-10 Apps Daily & Approx.</p>
                                <h2>30 Apps <span className="text-green">Monthly</span></h2>
                            </div>
                        </div>
                        <div className="card four">
                            <div className="card-body">
                                <h5 className="year text-green">{this.state.years}</h5>
                                <img src={download} alt="download" />
                                <h6 className="card-title d-flex align-items-center"><img src={mobile} alt="average" className="d-block mx-auto my-3" /> </h6>
                                <h2 className="text-center">Mobile App <small className="d-block">Downloads Worldwide</small></h2>
                                <p className="card-text text-center">Forecasted to Cross 258.2 Billion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}
}

export default Header;
