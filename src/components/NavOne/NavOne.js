import React, { Component } from 'react';
import "./styleone.scss";
import Logo from "../../icon/Logo3.png";

export default class NavOne extends Component {
  render() {
    return (
      <header>
        <div className="nav-logo">
          <img src={Logo} className="logo" alt="logo" />
        </div>
        <nav>
          <ul className="nav__links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <a className="cta" href="#"><button>Contact</button></a>
      </header>
    )
  }
}
