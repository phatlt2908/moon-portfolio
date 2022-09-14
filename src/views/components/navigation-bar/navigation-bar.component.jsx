import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./navigation-bar.styles.scss";

const NavigationBar = () => {
  return (
    <div className="navigation-bar-container">
      <nav className="navbar" role="navigation" aria-label="main navigation">

        <div className="navbar-logo">
          <div className="navbar-item">
            <Link to="/"><FontAwesomeIcon className="fa-xl" icon="fa-solid fa-leaf" /></Link>
          </div>
        </div>
        <div className="navbar-item">
          <Link to="/portfolio"><p>Portfolio</p></Link>
        </div>
        <div className="navbar-item">
          <Link to="/about"><p>About me</p></Link>
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
