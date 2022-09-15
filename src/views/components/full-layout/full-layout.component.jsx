import { Outlet } from "react-router-dom";
import "./full-layout.styles.scss";
import Nav from "../navigation-bar/navigation-bar.component";

import headerImg from "../../../assets/images/header.png";

const FullLayout = () => {
  return (
    <div className="full-layout-container">
      <div className="header-img">
        <img src={headerImg} alt="header" />
      </div>
      <div className="sticky-header"><Nav /></div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default FullLayout;
