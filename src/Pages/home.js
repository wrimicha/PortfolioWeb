import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";
import PortfolioBox from "../Components/PortfolioBox";
//import aslImg from "../images/ASLRocket.jpg";
//import aslImg from "../asl.jpg";
import db from "../firebase";
import linkedin from "../images/linkedin.png";
import resume from "../images/resume.png";
import github from "../images/github.png";
import resumefile from "../files/resume.pdf";

export default function Portfolio() {
  const [projectInfo, setProjectInfo] = useState([]);
  const [rowOne, setRowOne] = useState([]);
  const [rowTwo, setRowTwo] = useState([]);
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    db.collection("projects").onSnapshot((snapshot) => {
      setProjectInfo(snapshot.docs);
    });
  }, []);

  return (
    <div className="bg">
      <div className="mainContent">
        <div className="textIntro wrapper">
          <h1 className="typing-demo">Hello World!</h1>
          <h1>My name is Michael Wright.</h1>
          <p id="about-me">
            I am a 3rd year Computer Science student at Sheridan College
            inerested in web and mobile application development. I am passionate
            about creating beautiful and intuitive user experiences.
            <br />
          </p>
          {/* <div>
          <img
            src={linkedin}
            alt="linkedin icon"
            className="about-me-icon"
            width="30"
            onClick={() =>
              window.open("https://www.linkedin.com/in/wrimicha/", "_blank")
            }
          />
          <img
            src={github}
            alt="linkedin icon"
            className="about-me-icon"
            width="30"
            onClick={() => window.open("https://github.com/wrimicha", "_blank")}
          />
          <img
            src={resume}
            alt="linkedin icon"
            className="about-me-icon"
            width="33"
            href={resumefile}
            download
          />
        </div> */}
          {/* <p id="about-me">Check out some of of my recent projects:</p> */}
          <p id="about-me"></p>
        </div>
        <div className="project-holder">
          {projectInfo.map((info, i) => {
            return (
              <PortfolioBox
                key={i}
                index={i}
                thumbnail={info.data().thumbnail}
                id={i}
                title={info.data().title}
                desc={info.data().body}
                icons={info.data().icons}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
