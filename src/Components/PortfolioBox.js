import React, { useState, useEffect } from "react";
import "./PortfolioBox.css";
import ViewProject from "../ViewProjectPage/ViewProject";
import { Link } from "react-router-dom";
import { FaVenusMars } from "react-icons/fa";

export default function PortfolioBox({
  id,
  title,
  desc,
  thumbnail,
  icons,
  index,
}) {
  const viewProject = () => {};

  var [iconsList, setIconsList] = useState([]);

  useEffect(() => {
    setIconsList(icons);
    // icons.map((info, i) => {
    //   console.log(info);
    // });
  }, []);

  return (
    <div className="boxContainer">
      <div
        className="boxBg"
        style={{
          backgroundImage: thumbnail,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="boxDesc">
        <h1 className="title">{title}</h1>
        <p className="desc">{desc}</p>
        <div className="descBottom">
          <div className="iconsHodler">
          {iconsList.map((info, i) => {
              return (
              <img src={info} alt="" width="50"/>
              );
            })}
          </div>
          <Link
            to={"/viewproject/" + id}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="viewProjBtn">View Project</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
