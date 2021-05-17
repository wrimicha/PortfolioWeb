import React from "react";
import "./PortfolioBox.css";
// const image = "../images/ASLRocket.jpg";

export default function PortfolioBox({ title, desc }) {
  return (
    <div className="container">
      {/* <img src={aslImg} alt="" /> */}
      <h1 className="title">{title}</h1>
      <p className="desc">{desc}</p>
      <div className="viewProjBtn">View Project</div>
    </div>
  );
}
