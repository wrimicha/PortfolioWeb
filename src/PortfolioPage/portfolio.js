import React from "react";
import "./portfolio.css";
import PortfolioBox from "../Components/PortfolioBox";
//import aslImg from "../images/ASLRocket.jpg";
import aslImg from "../asl.jpg";

export default function portfolio() {
  return (
    <>
      <div className="row">
        <div
          className="boxBg"
          style={{
            backgroundImage: `url(${aslImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="gradient">
            <PortfolioBox
              title="ASL Rocket to Space"
              desc="Hackville 2021 First Place Winning Project"
            />
          </div>
        </div>
        <div
          className="boxBg"
          style={{
            backgroundImage: `url(${aslImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="gradient">
            <PortfolioBox title="ASL" />
          </div>
        </div>
        <div
          className="boxBg"
          style={{
            backgroundImage: `url(${aslImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="gradient">
            <PortfolioBox title="ASL" />
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="boxBg"
          style={{
            backgroundImage: `url(${aslImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="gradient">
            <PortfolioBox title="ASL" />
          </div>
        </div>
        <div
          className="boxBg"
          style={{
            backgroundImage: `url(${aslImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="gradient">
            <PortfolioBox title="ASL" />
          </div>
        </div>
        <div
          className="boxBg"
          style={{
            backgroundImage: `url(${aslImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="gradient">
            <PortfolioBox title="ASL" />
          </div>
        </div>
      </div>

      {/* <div className="row row2">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
      </div> */}

      {/* <div
    className="box box1"
    style={{
        backgroundImage: `url(${aslImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }}
    >
    <PortfolioBox />
    </div> */}
    </>
  );
}
