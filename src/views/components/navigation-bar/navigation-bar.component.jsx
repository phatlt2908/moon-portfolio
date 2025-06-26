import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigation-bar.styles.scss";
import logoImg from "../../../assets/images/logo.png";

const NavigationBar = () => {
  return (
    <div className="navigation-bar-container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-logo">
          <div className="navbar-item">
            <NavLink to="/">
              <img className="trans-float-infinite" src={logoImg} alt="Logo" />
            </NavLink>
          </div>
        </div>
        <div className="navbar-item">
          <NavLink
            className="custom-underline-header"
            to="/portfolio?type=character"
            activeclassname="active"
          >
            <span>Portfolio</span>
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink
            className="custom-underline-header"
            to="/about"
            activeclassname="active"
          >
            <span>About me</span>
          </NavLink>
        </div>
        <div className="navbar-item navbar-right hidden-scale">
          <a
            href="mailto:giaoduc297@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="fa-sm" icon="fa-solid fa-envelope" />
          </a>
        </div>
        <div className="navbar-item hidden-scale">
          <a
            href="https://www.facebook.com/biasWookie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="fa-sm" icon="fa-brands fa-facebook-f" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
