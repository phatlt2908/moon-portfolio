import { useState } from "react";
import "./image-box.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageLoading from "../image-loading/image-loading";

const ImageBox = ({ image }) => {
  const [isFullImage, setBoxClass] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const onClickImg = () => {
    setBoxClass(!isFullImage);
  };

  const onImageLoaded = () => {
    setLoading(false);
  };

  return (
    <div
      className={"image-box-container " + (isFullImage ? "full" : "")}
      onClick={onClickImg}
    >
      <div className="content">
        {isLoading && <ImageLoading />}
        <img
          className="grid-item"
          src={"https://drive.google.com/thumbnail?id=" + image.id + "&sz=w500"}
          alt="porforlio thumbnail"
          referrerPolicy="no-referrer"
          onLoad={onImageLoaded}
          onError={onImageLoaded}
        />

        <p>{image.title}</p>
      </div>

      {isFullImage && (
        <div className="full">
          <div className="full-image">
            <div className="closeBtn">
              <FontAwesomeIcon className="fa-lg" icon="fa-solid fa-x" />
            </div>
            <img
              className="grid-item"
              src={
                "https://drive.google.com/thumbnail?id=" +
                image.id +
                "&sz=w1200"
              }
              alt="porforlio full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageBox;
