import { Outlet } from "react-router-dom";
import "./full-layout.styles.scss";
import Nav from "../navigation-bar/navigation-bar.component";

const FullLayout = () => {
  return (
    <div className="full-layout-container">
      <Nav />
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default FullLayout;
