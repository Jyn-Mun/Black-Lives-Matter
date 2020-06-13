import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    })
  }
  return (
    <div className="container" id="mainContainer">
      <h1 className="mainTitle">Black Lives Matter</h1>
      <h1 className="mainHeader">The best way to demand change? <a className="mainLinks" href="https://www.usa.gov/register-to-vote">VOTE!</a> </h1>
      <div className="main-1">
        <Link className="mainBox" tag={Link} to="/petitions" onClick={scrollToTop}>
          <div>Sign Petitions</div>
        </Link>
        <Link onClick={scrollToTop} className="mainBox" tag={Link} to="/donate">
          <div>Donate</div>
        </Link>
        <Link onClick={scrollToTop} className="mainBox" tag={Link} to="/support">
          <div>Support</div>
        </Link>
      </div>
      <div className="main-1">
        <Link onClick={scrollToTop} className="mainBox" tag={Link} to="/protest">
          <div>Protest</div>
        </Link>
        <Link onClick={scrollToTop} className="mainBox" tag={Link} to="/educate">
          <div>Educate Yourself</div>
        </Link>
        <Link onClick={scrollToTop} className="mainBox" tag={Link} to="/resources">
          <div>Resources</div>
        </Link>
      </div>
    </div>
  )
}

export default Main;