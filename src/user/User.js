import phone from '../img/phone.png';
import './User.css';

function User() {
  return (
    <section id="user" className="py-5 user-section">
        <div className="container">
            <div className="row align-items-lg-center justify-content-center">
                <div className="col-lg-8 mb-5 mb-lg-0">
                    <h2 className="text-white sub-heading">Active Users Can Be Easily Converted </h2>
                    <p className="text-white mb-4">As they say, strike the iron when it’s hot, active users are the best targets for selling, promoting and marketing your business! Entrepreneurs can drastically increase their conversion rate by tracking active/ inactive status with the help of engager360.</p>
                    <a href="#" className="btn btn-yellow btn-xl js-scroll-trigger px-4">Schedule Demo</a>
                </div>
                <div className="col-lg-4 col-10 col-md-5">
                    <img src={phone} alt="phone" className="img-fluid d-block mx-auto img-shadow" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default User;
