import React, { useState, useEffect } from "react";
import db from "../firebase";

export default function ViewProject(props) {
  const [projectInfo, setProjectInfo] = useState([]);

  const { id } = props.match.params;
  console.log(id);

  useEffect(() => {
    db.collection("project-details")
      .doc(id)
      .get()
      .then((doc) => setProjectInfo(doc.data()))
      .catch(() => console.log("could not get data"));
  }, []);

  return (
    <div>
      <h1>{projectInfo.title}</h1>
    </div>
  );
}
