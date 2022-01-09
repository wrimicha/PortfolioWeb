import React, { useState, useEffect } from "react";
import "../styles/home.css";
import db from "../firebase";

export default function Home() {
  return (
    <>
      <div className="textIntro">
        <div className="homepageHeader">
          <h1>
            Hello! Please browse some of the recent projects which I have worked
            on.
          </h1>
        </div>
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import "./homepage.css";
// import db from "../firebase";

// export default function Portfolio() {
//   const [projectInfo, setProjectInfo] = useState([]);

//   useEffect(() => {
//     db.collection("projects").onSnapshot((snapshot) => {
//       setProjectInfo(snapshot.docs);
//     });
//   }, []);

//   return (
//     <>
//       <div className="textIntro">
//         <h1>
//           Hello! Please browse some of the recent projects which I have worked
//           on.
//         </h1>
//       </div>
//     </>
//   );
// }
