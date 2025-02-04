import "./image-loading.styles.scss";

const ImageLoading = () => {

  const randomHeight = Math.floor(Math.random() * (500 - 300 + 1) + 300);
  
  return (
    <div
      className="linear-background mb-4"
      style={{ height: `${randomHeight}px` }}
    ></div>
  );
}

export default ImageLoading;
