import React from "react";

const Model = ({ selectedImg, setSelectedImg }) => {
  //handling the click event to close the model
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="larged pic" />
    </div>
  );
};

export default Model;
