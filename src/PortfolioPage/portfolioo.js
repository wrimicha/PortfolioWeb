import React, { useState, useEffect } from "react";
import "./portfolio.css";
import PortfolioBox from "../Components/PortfolioBox";
//import aslImg from "../images/ASLRocket.jpg";
import aslImg from "../asl.jpg";
import Banking from "../banking.jpg";
import HealthKick from "../healthkick.jpg";
import db from "../firebase";

export default function Portfolio() {
  const [projectInfo, setProjectInfo] = useState([]);
  //const [rowOne, setRowOne] = useState([]);
  //const [rowTwo, setRowTwo] = useState([]);

  useEffect(() => {
    db.collection("projects").onSnapshot((snapshot) => {
      setProjectInfo(snapshot.docs);
    });
  }, []);

  // useEffect(() => {
  //   return projectInfo.map((info, i) => {
  //     i < 3
  //       ? setRowOne(...rowOne, {
  //           title: info.data().title,
  //           thumbnail: info.data().thumbnail,
  //           body: info.data().body,
  //         })
  //       : setRowOne(...rowTwo, {
  //           title: info.data().title,
  //           thumbnail: info.data().thumbnail,
  //           body: info.data().body,
  //         });
  //   });
  // }, [projectInfo]);

  // var gdRef = storage.refFromURL(
  //   "gs://portfolio-999f1.appspot.com/images/banking.jpg"
  // );

  // useEffect(() => {
  //   db.storage()
  //     .ref()
  //     .child("images/banking.jpg")
  //     .getDownloadURL()
  //     .then((url) => {
  //       console.log(url);
  //     });
  // }, []);

  return (
    //   <>
    //     {projectInfo.map((info, i) => {
    //       <div className="projectHolder">
    //         <div
    //           className="boxBg"
    //           style={{
    //             backgroundImage: `url(${info.data().thumbnail})`,
    //             backgroundPosition: "center",
    //             backgroundSize: "cover",
    //             backgroundRepeat: "no-repeat",
    //           }}
    //         >
    //           <div className="gradient">
    //             <PortfolioBox title={info.data().title} desc={info.data().body} />
    //           </div>
    //         </div>
    //       </div>;
    //     })}
    //   </>
    // );

    <>
      {/* <div className="textIntro">
        <h1>
          Hello! Please browse some of the recent projects which I have worked
          on.
        </h1>
        {console.log(projectInfo.title)}
      </div> */}
      {projectInfo.map((info, i) => {
        <div className="projectHolder">
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
              <PortfolioBox title={info.data().title} desc={info.data().body} />
            </div>
          </div>
        </div>;
      })}
      {/* //////////////////////////// */}

      {/* <div className="flex-container wrap">
        <div
          className="flex-item"
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
          className="flex-item"
          style={{
            backgroundImage: `url(${Banking})`,
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
          className="flex-item"
          style={{
            backgroundImage: `url(${HealthKick})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="gradient">
            <PortfolioBox title="HealthKick" />
          </div>
        </div>
        </div>
      <div className="row">
        <div
          className="flex-item"
          style={{
            backgroundImage: `url(${Banking})`,
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
          className="flex-item"
          style={{
            backgroundImage: `url(${Banking})`,
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
          className="flex-item"
          style={{
            backgroundImage: `url(${Banking})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="gradient">
            <PortfolioBox title="ASL" />
          </div>
        </div>
      </div> */}

      {/* //////////////////////// */}

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
    </div> */
    
    
    



    ////////
    



     // else {
    //   console.log(info.data().title);
    //   <div className="flex-container">
    //     <div
    //       className="flex-item"
    //       style={{
    //         backgroundImage: `url(${info.data().thumbnail})`,
    //         backgroundPosition: "center",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className="gradient">
    //         <PortfolioBox
    //           title={info.data().title}
    //           desc={info.data().body}
    //         />
    //       </div>
    //     </div>
    //     <div
    //       className="flex-item"
    //       style={{
    //         backgroundImage: `url(${info.data().thumbnail})`,
    //         backgroundPosition: "center",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className="gradient">
    //         <PortfolioBox
    //           title={info.data().title}
    //           desc={info.data().body}
    //         />
    //       </div>
    //     </div>
    //   </div>;
    // }
    // </>
  );

  // <div className="projectHolder">
  //   <div
  //     className="boxBg"
  //     style={{
  //       backgroundImage: `url(${info.data().thumbnail})`,
  //       backgroundPosition: "center",
  //       backgroundSize: "cover",
  //       backgroundRepeat: "no-repeat",
  //     }}
  //   >
  //     <div className="gradient">
  //       <PortfolioBox title={info.data().title} desc={info.data().body} />
  //     </div>
  //   </div>
  // </div>;
  //   })}
  //     </>
  //   );
}

// <>
//   {projectInfo.map((info, i) => {
//     <h1>{info.data().title}</h1>;

// <div className="projectHolder">
//   <div
//     className="boxBg"
//     style={{
//       backgroundImage: `url(${info.data().thumbnail})`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//     }}
//   >
//     <div className="gradient">
//       <PortfolioBox title={info.data().title} desc={info.data().body} />
//     </div>
//   </div>
// </div>;
// })}

{
  /* <div class="flex-container wrap">
        {projectInfo.map((info, i) => {
          console.log("Hello!!");

          // <div className="flex-item">{info.data().title}</div>;
          <div class="flex-item">1</div>;
        })}
      </div> */
}
{
  /* <div className="flex-container">
        {projectInfo.map((info, i) => {
          <div className="flex-item">{info.data().title}</div>;
        })}
      </div> */
}
// </>
    
    
    
    }
    </>
  );
}
