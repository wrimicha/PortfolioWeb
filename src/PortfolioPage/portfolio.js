import React, { useState, useEffect } from "react";
import "./portfolio.css";
import PortfolioBox from "../Components/PortfolioBox";
//import aslImg from "../images/ASLRocket.jpg";
import aslImg from "../asl.jpg";
import db from "../firebase";

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

  // useEffect(() => {
  //   for (let i = 0; i < 8; i++) {
  //     console.log(count);
  //     if (count < 2) setCount(count + 1);
  //   }
  // }, [count]);

  // for (let i = 0; i < 8; i++) {
  //   setCount(count + 1);
  // }
  // let newCar = {
  //   name: "Benz" + i,
  // };

  // let updatedCarsArray = [...cars, newCar];

  // setCars(updatedCarsArray);
  // };

  // useEffect(() => {
  //   for (let i = 0; i < 3; i++) {
  //     const newCar = {
  //       name: "Benz",
  //       type: "sedan",
  //     };

  //     const updatedCarsArray = [...cars, newCar];

  //     setCars(updatedCarsArray);
  //   }
  //   console.log(cars);
  // }, []);

  // useEffect(() => {
  //   for (let i = 0; i < 3; i++) {
  //     const rowOneInfo = [...rowOne, { title: "Hello" }]; // new array need to update
  //     setRowOne(rowOneInfo);
  //     // let file = { title: "Hello" + i };
  //     // setRowOne([file]);
  //   }
  //   console.log(rowOne);
  // }, []);

  //console.log(projectInfo);

  return (
    <>
      <div className="textIntro">
        <h1>
          Hello! Please browse some of the recent projects which I have worked
          on.
        </h1>
        {console.log(projectInfo.title)}
      </div>
      <div className="project-holder">
        {projectInfo.map((info, i) => {
          if (i < 3) {
            console.log(info.data().title);
            return (
              <div
                className="boxBg"
                style={{
                  backgroundImage: `url(${info.data().thumbnail})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="gradient">
                  <PortfolioBox
                    title={info.data().title}
                    desc={info.data().body}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="project-holder">
        {projectInfo.map((info, i) => {
          if (i > 2 && i < 6) {
            console.log(info.data().title);
            return (
              <div
                className="boxBg"
                style={{
                  backgroundImage: `url(${info.data().thumbnail})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="gradient">
                  <PortfolioBox
                    title={info.data().title}
                    desc={info.data().body}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
