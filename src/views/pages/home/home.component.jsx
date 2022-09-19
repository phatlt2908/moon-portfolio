import "./home.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import helloImg from "../../../assets/images/hello.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="columns">
        <div className="column center-vertical">
          <div className="trans-float-left">
            <h1 className="title is-main">
              Hi, I'm <span className="no-wrap">Mo
                <FontAwesomeIcon className="fa-flip" icon="fa-solid fa-moon" style={{ "--fa-animation-duration": "3s" }} />
                n.
              </span>
              <br />
              2D Artist.
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
        <div className="column">
          <img className="trans-bounce-in" src={helloImg} alt="hello" />
        </div>
      </div>
    </div>
  );
};

export default Home;
