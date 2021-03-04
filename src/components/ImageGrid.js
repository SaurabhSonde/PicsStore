import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  //returning docs which is present in collection
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} alt="failed to load images" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
