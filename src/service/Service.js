import React, {Component} from 'react';
import qns from '../img/qns-ans.png';
import surface from '../img/surface.png';
import action from '../img/action.png';
import './Service.css';

class Service extends Component{
    render(){
        
            const data =[
                {
                    "id":'1',
                    "mainclasss":"col-md-6 col-lg-4 text-center mb-4 px-md-4",
                    "headings":"Get instant answers",
                    "img": qns,
                    "texts":"Provide Instant Answers to Customer Queries – Through in-app messaging, it is possible to answer customer queries in real time."
                },
                {
                    "id":'2',
                    "mainclasss":"col-md-6 col-lg-4 text-center border-l-r mb-4 px-md-4",
                    "headings":"Automatic insights",
                    "img": surface,
                    "texts":"Using engager360, you can monitor your active/ inactive users, app installs, and get a clear insight of user behavior."
                },
                {
                    "id":'3',
                    "mainclasss":"col-md-6 col-lg-4 text-center mb-4 px-md-4",
                    "headings":"Take intelligent action",
                    "img": action,
                    "texts":"Based on the input gathered through user behavior monitoring and tracking, you can take appropriate action towards user acquisition."
                }
            ];
            const listItems = data.map((d) =>
                                       
                <div key={d.id} className={d.mainclasss}>
                    <img src={d.img} alt={d.headings} className="d-block mb-4 mx-auto" />
                    <h3 className="text-uppercase">{d.headings}</h3>
                    <p>{d.texts}</p>
                </div>            
                  );
        
        
  return (
    <section id="services" className="bg-white py-5 analaytics">
        <div></div>
        <div className="container mb-5">
            <h2 className="text-center sub-heading mb-lg-5">What is User Analytics?</h2>
            <div className="row justify-content-center">
            {listItems }
      
                <div className="col-md-6 col-lg-4 text-center mb-4 px-md-4">
                    <img src={qns} alt="Get instant answers" className="d-block mb-4 mx-auto" />
                    <h3 className="text-uppercase">Get instant answers</h3>
                    <p>Provide Instant Answers to Customer Queries – Through in-app messaging, it is possible to answer customer queries in real time.</p>
                </div>
                <div className="col-md-6 col-lg-4 text-center border-l-r mb-4 px-md-4">
                    <img src={surface} alt="Surface automatic insights" className="d-block mb-4 mx-auto" />
                    <h3 className="text-uppercase">Automatic insights</h3>
                    <p>Using engager360, you can monitor your active/ inactive users, app installs, and get a clear insight of user behavior. </p>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-4 px-md-4">
                    <img src={action} alt="Take intelligent action" className="d-block mb-4 mx-auto" />
                    <h3 className="text-uppercase">Take intelligent action</h3>
                    <p>Based on the input gathered through user behavior monitoring and tracking, you can take appropriate action towards user acquisition.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
}

export default Service;
