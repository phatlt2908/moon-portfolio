import "./image-box.styles.scss";

const ImageBox = ({ imageUrl }) => {
  return (
    <div className="image-box-container">
      <img class='grid-item' src={imageUrl} alt="porforlio" />
      <p>ABC</p>
    </div>
  );
};

export default ImageBox;
