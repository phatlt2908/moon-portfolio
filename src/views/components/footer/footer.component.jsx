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
            <a
              href="https://www.messenger.com/e2ee/t/6966508806726349"
              className="custom-underline-link"
              target="_blank"
              rel="noopener noreferrer"
            >let's chat</a>.
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
          <a
            href="https://www.facebook.com/biasWookie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="fa-sm" icon="fa-brands fa-facebook-f" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
