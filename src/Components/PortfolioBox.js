import React from "react";
import "./PortfolioBox.css";
import ViewProject from "../ViewProjectPage/ViewProject";
import { Link } from "react-router-dom";

export default function PortfolioBox({ id, title, desc }) {
  const viewProject = () => {};

  return (
    <div className="container">
      {/* <img src={aslImg} alt="" /> */}
      <h1 className="title">{title}</h1>
      <p className="desc">{desc}</p>
      <Link to={"/viewproject" + id} class="link">
        <div className="viewProjBtn">View Project</div>
      </Link>
    </div>
  );
}
