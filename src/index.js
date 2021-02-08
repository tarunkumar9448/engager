import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import Nav from './nav/Nav';
import Header from './header/Header';
import About from './about/About';
import User from './user/User';
import Service from './service/Service';
import Footer from './footer/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<React.StrictMode>
    <Nav />
    <Header />
    <About />
    <User />
    <Service />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
