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
              <img
                className="trans-float-infinite"
                src={logoImg}
                alt="Logo"
              />
            </NavLink>
          </div>
        </div>
        <div className="navbar-item">
          <NavLink
            className="custom-underline-header"
            to="/portfolio"
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
        <div className="navbar-item navbar-right">
          <FontAwesomeIcon className="fa-sm" icon="fa-brands fa-facebook-f" />
        </div>
        <div className="navbar-item">
          <FontAwesomeIcon className="fa-sm" icon="fa-brands fa-pinterest-p" />
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
