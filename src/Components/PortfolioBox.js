import React, { useState, useEffect } from "react";
import "../styles/PortfolioBox.css";
import ViewProject from "../Pages/ViewProject";
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

  // var [iconsList, setIconsList] = useState([]);

  // useEffect(() => {
  //   setIconsList(icons);
  //   // icons.map((info, i) => {
  //   //   console.log(info);
  //   // });
  // }, []);

  return (
    <button
      className="boxContainer"
      onClick={() => window.open("viewproject/" + index, "_self")}
    >
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
        <div className="iconsHolder">
          {icons.map((info, i) => {
            return <img  className="tech-icon" src={info} alt="" width="40" />;
          })}
        </div>
        {/* <Link
            to={"/viewproject/" + id}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="viewProjBtn">View Project</div>
          </Link> */}
        </div>
      </div>
    </button>
  );
}
