import React, { useState, useEffect } from "react";
import db from "../firebase";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ViewProject.css";

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
      <>
        <div className="slider">
          {projectInfo.images.map((info, i) => {
            return (
              // <img src={info} alt='slide' className='image' />
              <div className={i === current ? "slide active" : "slide"} key={i}>
                {i === current && (
                  <img src={info} alt="slide" className="image" />
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
        <div className="textArea">
          <h1>{projectInfo.title}</h1>
          <h1>{projectInfo.images.length}</h1>
        </div>
      </>
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
