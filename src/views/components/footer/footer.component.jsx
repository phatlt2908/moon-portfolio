import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <span>
          <FontAwesomeIcon className="fa-lg" icon="fa-brands fa-facebook-f" />
        </span>
        <span>
          <FontAwesomeIcon className="fa-lg" icon="fa-brands fa-pinterest-p" />
        </span>
      </footer>
    </div>
  );
};

export default Footer;
