import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
  var navStyle = {
    backgroundColor: "#1e88e5",
    paddingLeft: "12px"
  };

    return (
    <nav style={navStyle}>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo" style={{textTransform: "uppercase"}}>Pavadinimas</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Home</a></li>
          <li><a href="/register">Register</a></li>
          </ul>
  </div>
</nav>
    );
  }
}
