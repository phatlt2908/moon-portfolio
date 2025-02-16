import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./portfolio.styles.scss";
import ImageBox from "../../components/image-box/image-box.component";
import { useState } from "react";
import { useEffect } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Portfolio = () => {
  const [imageList, setImageList] = useState([]);

  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  let type = useQuery().get("type") || "character";

  useEffect(() => {
    setImageList([]);
    
    switch (type) {
      case "character":
        setImageList([
          {
            id: "1wdKBPSmUkhyKk-CBAMQ7WSWgxT79dBxK",
            title: "Animal character",
          },
          {
            id: "1z6fPEMqqGyq49Ew8cFtYbpQpu8hIKsXb",
            title: "Human character",
          }
          
        ]);
        break;

      case "illustration":
        setImageList([
          {
            id: "1U6lmOi_qjq3tmE5G1xYSCJtZ2CRBzLDv",
            title: "Side scrolling game",
          },
          {
            id: "1pfoXLsu9JO7nw5kK9R6mzddca_K-RGJh",
            title: "Illustration",
          },
          {
            id: "1pPlvgGGp6ugey4r0KEeJqWqtqxSSptDU",
            title: "Southwestern region mood",
          },
          {
            id: "1XifAe_DXMNN0rk-Kalq-vfdtcGmh-rFF",
            title: "Interior mood",
          },
          {
            id: "193GNfp0Ed7mp3Tlqq5nqSrRCE5uJYyRm",
            title: "Viking mood with different weather and seasons",
          },
          {
            id: "1rqM_40sQH43TnY-8Ej2ST7XbV_TGiDbQ",
            title: "The forest",
          },
          {
            id: "1cHLUao-pdZ4rvpBvCgIEjio3QLKMzZhc",
            title: "Plan of the kingdom",
          }
        ]);
        break;

      case "casual-props":
        setImageList([
          {
            id: "1pLOQ5YH7pYZz7USMzhMXdzi2GS1BuAZI",
            title: "UI",
          },
          {
            id: "1ioiKf6sO2vtFuclDNQXmP5dmrPMRZsE3",
            title: "Topography and geology",
          },
          {
            id: "1yUSf74ZlCjseE1ZIh_Sjn-UJrcLVTHQv",
            title: "Building",
          },
          {
            id: "11u788dL0pQ0oCzYfj6a8TjvhrxnDL56M",
            title: "Restaurant casual",
          },
          {
            id: "1QZxRW0qydhBhwFRnLu8DBaByrguu9DQV",
            title: "Casual game",
          }
        ]);
        break;

      default:
        break;
    }
  }, [type]);

  return (
    <div className="portfolio-container">
      <div className="tabs is-centered">
        <ul>
          <li className={type === "character" ? "is-active" : ""}>
            <Link to="/portfolio?type=character">Character</Link>
          </li>
          <li className={type === "illustration" ? "is-active" : ""}>
            <Link to="/portfolio?type=illustration">Illustration</Link>
          </li>
          <li className={type === "casual-props" ? "is-active" : ""}>
            <Link to="/portfolio?type=casual-props">Casual Props</Link>
          </li>
        </ul>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {imageList.map((image, index) => {
            return <ImageBox key={index} image={image} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Portfolio;
