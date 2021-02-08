import logo from '../img/engager_logo.png';
import logo2 from '../img/logo_2.png';
import './Nav.css';


function Nav() {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark fixed-top slow" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger slow position-relative" href="#">
                <img src={logo} alt="logo" className="img-fluid logo_1 slow" />
                <img src={logo2} alt="logo" className="img-fluid logo_2 slow" />
            </a>
            <button className="navbar-toggler navbar-toggler-right ml-auto collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="menu-bar slow"></span>
        </button>
            <div className="collapse navbar-collapse py-4 py-lg-0" id="navbarResponsive">
                <ul className="navbar-nav mx-auto mb-4 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#user">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">Contact US</a>
                    </li>
                </ul>
                <ul className="list-unstyled py-lg-3 mb-0">
                    <li className="email"><a href="mailto:sales@engager360.com" className="d-block py-2 py-lg-1">sales@engager360.com</a></li>
                    <li className="phone"><a href="tel:+1-469-789-7400" className="d-block py-2 py-lg-0">+1-469-789-7400</a></li>
                </ul>
            </div>
            <div>
            </div>
        </div>
    </nav>
  );
}

export default Nav;
