import { NavLink } from "react-router-dom";
import "./home.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import helloImg from "../../../assets/images/hello.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home__describe">
        <div className="columns">
          <div className="column center-vertical">
            <div className="trans-float-left">
              <h1 className="title is-main">
                Hi, I'm{" "}
                <span className="no-wrap">
                  Mo
                  <FontAwesomeIcon
                    className="fa-flip"
                    icon="fa-solid fa-moon"
                    style={{
                      "--fa-animation-duration": "3s",
                      "--fa-stack-z-index": "0",
                    }}
                  />
                  n.
                </span>
                <br />a 2D Artist.
              </h1>
              <p>
                I'm a concept artist. My main occupation is to draw concept of
                game environment. Besides, I like children, since they're cute
                and pure. That's also the main reason why I love illustrating
                kid books. It's diverse and colorful.{" "}
                <NavLink to="/about">
                  <span className="custom-underline-link">More about me</span>.
                </NavLink>
              </p>
            </div>
          </div>
          <div className="column">
            <img
              className="trans-bounce-in"
              src={helloImg}
              alt="hello"
              referrerpolicy="no-referrer"
            />
          </div>
        </div>
      </div>
      <div className="home__job-info">
        <div className="columns">
          <div className="column">
            <NavLink to="/portfolio">
              <div className="job-info__tile">
                <div className="tile__holder tile__holder--small">
                  <img
                    className="trans-bounce-in"
                    src="https://drive.google.com/thumbnail?id=11u788dL0pQ0oCzYfj6a8TjvhrxnDL56M&sz=w600"
                    alt="hello"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="column">
            <NavLink to="/portfolio">
              <div className="job-info__tile">
                <div className="tile__holder tile__holder--small">
                  <img
                    className="trans-bounce-in"
                    src="https://drive.google.com/thumbnail?id=1rqM_40sQH43TnY-8Ej2ST7XbV_TGiDbQ&sz=w600"
                    alt="hello"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        {/* <NavLink to="/portfolio">
          <div className="job-info__tile">
            <div className="tile__holder tile__holder--large">
              <img
                className="trans-bounce-in"
                src="https://drive.google.com/thumbnail?id=1rqM_40sQH43TnY-8Ej2ST7XbV_TGiDbQ&sz=w1000"
                alt="hello"
                referrerpolicy="no-referrer"
              />
            </div>
          </div>
        </NavLink> */}
      </div>
    </div>
  );
};

export default Home;
