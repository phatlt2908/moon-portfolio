import { NavLink } from "react-router-dom";
import "./home.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import helloImg from "../../../assets/images/hello.jpg";

const Home = () => {
  const isometricViewImg =
    "https://drive.google.com/thumbnail?id=1sEkANgIuVb48HUiO3fDvhuBLYgZUr5T5&sz=w1000";
  const uiImg =
    "https://drive.google.com/thumbnail?id=1vvP0PoASh54YGBhuQngwFMlwZSuHeOAr&sz=w600";

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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.{" "}
                <NavLink to="/about">
                  <span className="custom-underline-link">More about me</span>.
                </NavLink>
              </p>
            </div>
          </div>
          <div className="column">
            <img className="trans-bounce-in" src={helloImg} alt="hello" />
          </div>
        </div>
      </div>
      <div className="home__job-info">
        <div className="columns">
          <div className="column">
            <div className="job-info__tile job-info__tile--illustration">
              <h2 className="title is-2 tile__category">Illustration</h2>
            </div>
          </div>
          <div className="column">
            <div className="job-info__tile">
              <div className="tile__category">
                <h2 className="title is-2">UI</h2>
              </div>
              <div className="tile__holder tile__holder--ui">
                <img className="trans-bounce-in" src={uiImg} alt="hello" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-info__tile">
          <div className="tile__category">
            <h2 className="title is-2">Game Art</h2>
          </div>
          <div className="tile__holder tile__holder--game-art">
            <img
              className="trans-bounce-in"
              src={isometricViewImg}
              alt="hello"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
