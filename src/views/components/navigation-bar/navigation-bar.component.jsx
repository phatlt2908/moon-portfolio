import { Link } from "react-router-dom";
import "./navigation-bar.styles.scss";

const NavigationBar = () => {
  return (
    <div className="navigation-bar-container">
      <nav className="navbar" role="navigation" aria-label="main navigation">

        <div className="navbar-logo">
          <div className="navbar-item">
            <Link to="/">O</Link>
          </div>
        </div>
        <div className="navbar-item">
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="navbar-item">
          <Link to="/about">About me</Link>
        </div>
        <div className="navbar-item navbar-right">
          A
        </div>
        <div className="navbar-item">
          B
        </div>
        <div className="navbar-item">
          <div className="button">
            Sign up
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
