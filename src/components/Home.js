import React, { useState, useContext } from "react";
import ImageGrid from "./ImageGrid";
import Model from "./Model";
import Title from "./Title";
import UploadForm from "./UploadForm";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Home = () => {
  const context = useContext(UserContext);
  const [user, setUser] = useState(null);

  //to select the image for work of the model

  const [selectedImg, setSelectedImg] = useState(null);
  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }
  return (
    <div>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Home;
