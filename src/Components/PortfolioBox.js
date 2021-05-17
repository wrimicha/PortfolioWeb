import React from "react";
import "./PortfolioBox.css";
// const image = "../images/ASLRocket.jpg";

export default function PortfolioBox({ title }) {
  return (
    <div className="container">
      {/* <img src={aslImg} alt="" /> */}
      <h1 className="title">{title}</h1>
    </div>
  );
}
