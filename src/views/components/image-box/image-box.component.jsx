import { useState } from "react";
import "./image-box.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageBox = ({ imageId }) => {
  const [isFullImage, setBoxClass] = useState(false);

  const onClickImg = () => {
    setBoxClass(!isFullImage);
  };

  return (
    <div
      className={"image-box-container " + (isFullImage ? "full" : "")}
      onClick={onClickImg}
    >
      <div className="content">
        <img
          className="grid-item"
          src={"https://drive.google.com/thumbnail?id=" + imageId + "&sz=w500"}
          alt="porforlio thumbnail"
          referrerpolicy="no-referrer"
        />
      </div>

      {isFullImage && (
        <div className="full">
          <div className="full-image">
            <div className="closeBtn">
              <FontAwesomeIcon className="fa-lg" icon="fa-solid fa-x" />
            </div>
            <img
              className="grid-item"
              src={"https://drive.google.com/thumbnail?id=" + imageId + "&sz=w1200"}
              alt="porforlio full"
              referrerpolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageBox;
