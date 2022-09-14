import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./navigation-bar.styles.scss";

const NavigationBar = () => {
  return (
    <div className="navigation-bar-container">
      <nav className="navbar" role="navigation" aria-label="main navigation">

        <div className="navbar-logo">
          <div className="navbar-item">
            <NavLink to="/"><FontAwesomeIcon className="fa-xl" icon="fa-solid fa-leaf" /></NavLink>
          </div>
        </div>
        <div className="navbar-item">
          <NavLink className="custom-underline" to="/portfolio" activeClassName="active">
            <span>Portfolio</span>
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink className="custom-underline" to="/about" activeClassName="active">
            <span>About me</span>
          </NavLink>
        </div>
        <div className="navbar-item navbar-right">
          <FontAwesomeIcon className="fa-lg" icon="fa-brands fa-facebook" />
        </div>
        <div className="navbar-item">
          B
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
