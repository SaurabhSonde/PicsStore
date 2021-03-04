import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Model from "./components/Model";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  //to select the image for work of the model
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      <Model selectedImg={selectedImg} />
    </div>
  );
}

export default App;
