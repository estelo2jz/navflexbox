import React, { Component } from 'react';
import "./stylethree.scss";
import Logo from "../../icon/Logo3.png";

export default class NavThree extends Component {
  render() {
    return (
      <headerthree>
        <div className="nav-logo-three">
          <img src={Logo} className="logo-three" alt="logo" />
        </div>
        <nav>
          <ul className="nav__links-three">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <a className="cta-three" href="#"><buttonthree>Contact</buttonthree></a>
      </headerthree>
    )
  }
}
