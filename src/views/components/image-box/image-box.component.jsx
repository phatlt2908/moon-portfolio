import "./image-box.styles.scss";

const ImageBox = ({ imageUrl }) => {
  return (
    <div className="image-box-container">
      <div>
        <img class="grid-item" src={imageUrl} alt="porforlio" />
        <p>ABC</p>
      </div>
    </div>
  );
};

export default ImageBox;
