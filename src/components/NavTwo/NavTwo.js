import React, { Component } from 'react';
import "./styletwo.scss";
import Logo from "../../icon/Logo3.png";

export default class NavTwo extends Component {
  render() {
    return (
      <headertwo>
        <div className="nav-logo-two">
          <ul className="nav__links-two">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
        <a className="cta-two" href="#"><buttontwo>Contact</buttontwo></a>
          </ul>
        </div>
        <navtwo>
          <img src={Logo} className="logo-two" alt="logo" />
        </navtwo>
      </headertwo>
    )
  }
}
