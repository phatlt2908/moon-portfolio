import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer__content">
        <h3 className="title is-2">
          I Occasionally Take On
          <br /> Freelance Opportunities.
        </h3>
        <div>
          {"Have an exciting project where you need some help? "}
          <span className="u-d-block">
            Send me over a message, and{" "}
            <div className="custom-underline-link">let's chat</div>.
          </span>
        </div>
      </div>
      <div className="footer__contact">
        <span>
          <FontAwesomeIcon className="fa-lg" icon="fa-brands fa-instagram" />
        </span>
        <span>
          <FontAwesomeIcon className="fa-lg" icon="fa-brands fa-artstation" />
        </span>
        <span>
          <FontAwesomeIcon className="fa-lg" icon="fa-brands fa-behance" />
        </span>
        <span>
          <FontAwesomeIcon className="fa-lg" icon="fa-brands fa-facebook-f" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
