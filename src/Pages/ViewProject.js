import React, { useState, useEffect } from "react";
import db from "../firebase";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../styles/ViewProject.css";
import CoolVideo from "../videos/chamealeon.mp4";

export default function ViewProject(props) {
  const [projectInfo, setProjectInfo] = useState([]);
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState();

  const { id } = props.match.params;
  //console.log(id);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    db.collection("project-details")
      .doc(id)
      .get()
      .then((doc) => setProjectInfo(doc.data()))
      .catch(() => console.log("could not get data"));
  }, []);

  const displayImages = () => {
    try {
      var imageCount = projectInfo.images.length;
      if (imageCount !== length) {
        setLength(imageCount);
      }
      // setLength(projectInfo.images.length);
      return true;
    } catch {
      console.log("FAILED");
      return false;
    }
  };

  let show = displayImages();

  if (show) {
    return (
      <div className="bg2">
        <div className="test">
          <div className="slider">
            {/* <div>
              <video
                autoPlay
                loop
                muted
                style={{
                  marginTop: "200px",
                  width: "100%",
                  left: "50%",
                  top: "50%",
                  height: "50%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <source src={CoolVideo} type="video/mp4" />
              </video>
            </div> */}

            <div className="project-images">
              {projectInfo.images.map((info, i) => {
                return (
                  // <img src={info} alt='slide' className='image' />
                  <div
                    className={i === current ? "slide active" : "slide"}
                    key={i}
                  >
                    {i === current && (
                      <img src={info} alt="" className="image" />
                    )}
                    <FaArrowAltCircleLeft
                      className="left-arrow"
                      onClick={prevSlide}
                    />
                    <FaArrowAltCircleRight
                      className="right-arrow"
                      onClick={nextSlide}
                    />
                  </div>
                );
              })}
            </div>

            <div className="tags-playvideo">
              {/* div for tags */}
              <div className="tags">
                {projectInfo.tags.map((info, i) => {
                  return <div className="project-tag">{info}</div>;
                })}
              </div>
              {/* div for watch video button */}
              <div className="play-btn-holder">
                <div
                  className="play-btn"
                  onClick={() => window.open(projectInfo.video, "_blank")}
                >
                  Play Video
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-area">
          <h1 className="title-text">{projectInfo.title}</h1>
          <p className="text">{projectInfo.maindesc}</p>
          <h1 className="title-text">Technology Used</h1>
          <p className="text">{projectInfo.techused}</p>
          <h1 className="title-text">What I Learned</h1>
          <p className="text">{projectInfo.learned}</p>
        </div>
      </div>
    );
  }
  return <h1>{projectInfo.title}</h1>;
}

// return (
//   <div>
//     <h1>{projectInfo.title}</h1>
//     {(show = displayImages())}
//     {console.log(show)}
//     {show ? {console.log("Hello")} : console.log("Goodbye")}
//     {/* <h1>{projectInfo.images.length}</h1> */}
//     {/* {console.log(projectInfo.images.length)} */}
//   </div>
// );
// }
