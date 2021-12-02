import React from "react";
import { Link } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="./">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="./signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    );
  }
}
