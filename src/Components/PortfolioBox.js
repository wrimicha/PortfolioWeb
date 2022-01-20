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
  video,
  sourceCode,
  videoAvail,
  whatItDoes,
}) {
  const viewProject = () => {};

  return (
    <div className="boxContainer">
      {/* <div className="bg-container"> */}
      <button
        className="boxBg"
        style={{
          background: `url(${thumbnail})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => window.open("viewproject/" + index, "_self")}
      >
        <div className="boxDesc">
          <div className="guide-holer">
            <div id="click-me-guide">Click Me!</div>
          </div>
        </div>
      </button>
      {/* <h1>HELLO</h1> */}
      <div className="boxDesc">
        <h1 className="title">{title}</h1>
        <p className="desc">{desc}</p>
        {/* <div className="portfolio-box-buttons">
          <button>Watch Video</button>
          <button>Watch Video</button>
        </div> */}

        <div className="portfolio-box-buttons">
          <button
            style={{ display: videoAvail }}
            onClick={() => window.open(video, "_blank")}
          >
            Play Video
          </button>
          <div style={{ display: videoAvail, width: "10px" }}></div>
          <button onClick={() => window.open(sourceCode, "_blank")}>
            Source Code
          </button>
        </div>
        <p style={{ marginLeft: "10px" }}>Built With:</p>
        <div className="iconsHolder">
          {icons.map((info, i) => {
            return (
              <img key={i} className="tech-icon" src={info} alt="" width="40" />
            );
          })}
        </div>
      </div>
    </div>
  );
}
