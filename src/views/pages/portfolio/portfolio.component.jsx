import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./portfolio.styles.scss";
import ImageBox from "../../components/image-box/image-box.component";
import { useState } from "react";
import { useEffect } from "react";

const Portfolio = () => {
  const [idList, setIdList] = useState([
    "1sEkANgIuVb48HUiO3fDvhuBLYgZUr5T5",
    "1vvP0PoASh54YGBhuQngwFMlwZSuHeOAr",
  ]);

  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  let type = useQuery().get("type") || "illustration";

  useEffect(() => {
    switch (type) {
      case "illustration":
        setIdList([
          "1Z5FHlAxtplC6Y8d8HT67PQ6TOW2YcUHv",
          "14ibQ6hva0u8HUu5zFY8qlIuRG2XLTGRf",
          "1WgJH6zR1U2wMb0YiLdZs6t18rtH9_8T1",
          "1VNA3XIazcnibsYMwCs0Jz8ZSbttmPtrt",
          "1YzE_Vm4GUkNUvsCgTSUBytpy5Xzj6cV5",
        ]);
        break;

      case "ui":
        setIdList([
          "1vvP0PoASh54YGBhuQngwFMlwZSuHeOAr",
          "1A_6Bc29r7pcf4tYcao-_SnbZnhqBTQ-5",
          "1YRwScdJx3PR8-rdTji9QnTAeOm32bu9X",
          "1OMNxKTT5e_BIP5IXem08EsWNV_1cNYJR",
          "1OMNxKTT5e_BIP5IXem08EsWNV_1cNYJR",
        ]);
        break;

      case "game-art":
        setIdList([
          "1sEkANgIuVb48HUiO3fDvhuBLYgZUr5T5",
          "12Jkcl-HiCIiHZuP7tBKDBVt9b4oQ0Nzf",
          "1yMY7hTHZ3ZyWQHlOtRGnYjarZIinfbH1",
          "1dyqy9km2ewDviOWFQL55Zf_QNI8sQZLS",
          "1vMJJNBscreahhyPisDl8EWJTnLJy3IzH",
          "13fPDk4p6TE4a1mgGhoRdjKaSjlsu5G4K",
          "1FC-OCuIOFqWcEfL4c5l_ku5UdG2z9iTC",
          "1oB3SCOdB_SPePWxOSJ1vaOYGCqrdtMLi",
          "1pZieg82AWjdIrxkd3GzsMz6aDDCSR8Xh",
          "10FmSgh2fBPJrIEVa1coLc-nn-FEaoiVu",
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
          <li className={type === "illustration" ? "is-active" : ""}>
            <Link to="/portfolio?type=illustration">Illustration</Link>
          </li>
          <li className={type === "ui" ? "is-active" : ""}>
            <Link to="/portfolio?type=ui">UI</Link>
          </li>
          <li className={type === "game-art" ? "is-active" : ""}>
            <Link to="/portfolio?type=game-art">Game Art</Link>
          </li>
        </ul>
      </div>
      <div className="image-list">
        {idList.map((imageId, index) => {
          return <ImageBox key={index} imageId={imageId} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
