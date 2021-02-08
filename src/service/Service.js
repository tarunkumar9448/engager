import qns from '../img/qns-ans.png';
import surface from '../img/surface.png';
import action from '../img/action.png';
import './Service.css';

function Service() {
  return (
    <section id="services" className="bg-white py-5 analaytics">
        <div></div>
        <div className="container mb-5">
            <h2 className="text-center sub-heading mb-lg-5">What is User Analytics?</h2>
            <div className="row justify-content-center">
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

export default Service;
