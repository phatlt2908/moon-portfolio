import "./about.styles.scss";

const About = () => {
  const avatarImg =
    "https://drive.google.com/thumbnail?id=1Kwy2Y6dwq1BqB4NrdlEvMnd-wkzyxx3I&sz=w600";

  return (
    <div className="about-container">
      <div className="about__info">
        <div className="columns">
          <div className="column">
            <img
              className="trans-bounce-in border-radius-20"
              src={avatarImg}
              alt="hello"
              referrerpolicy="no-referrer"
            />
          </div>
          <div className="column center-vertical">
            <div className="trans-float-left">
              <h1 className="title is-main">
                I’m Moon, a 2D Artist working for One Universe on their game
                products in Ho Chi Minh city, Vietnam.
              </h1>
              <p>
                I would often study Chemistry major at the University of
                Science. However, I believe that with all the knowledge which I
                have learned and my passion for drawing, I'll complete the
                assigned tasks well.
              </p>
              <p>
                I would like to be able to develop myself in the Game industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about__history">
        <h1 className="title is-main">History</h1>
        <div className="columns mt-2 mb-2">
          <div className="column is-3 is-offset-9 history__box">
            <div className="box__block">
              <div className="box__block__title">One Universe</div>
              <div className="box__block__detail">
                2D Artist
              </div>
            </div>
            <div className="box__item">22 ~</div>
          </div>
        </div>
        <div className="columns mt-2 mb-2">
          <div className="column is-4 is-offset-6 history__box">
            <div className="box__block">
              <div className="box__block__title">Freelance</div>
              <div className="box__block__detail">
                Freelancer for...
              </div>
            </div>
            <div className="box__item">21 - 22</div>
          </div>
        </div>
        <div className="columns mt-2 mb-2">
          <div className="column is-4 is-offset-4 history__box">
            <div className="box__block">
              <div className="box__block__title">Study</div>
              <div className="box__block__detail">
                Illustration, Casual Game...
              </div>
            </div>
            <div className="box__item">20 - 21</div>
          </div>
        </div>
        <div className="columns mt-2 mb-2">
          <div className="column is-4 history__box">
            <div className="box__block">
              <div className="box__block__title">The University of Science</div>
              <div className="box__block__detail">Chemistry major student</div>
            </div>
            <div className="box__item">15 - 19</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
