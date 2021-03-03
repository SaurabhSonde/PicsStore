import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  //seting files
  const [file, setFile] = useState(null);

  //errors
  const [error, setError] = useState(null);

  //restricting user to upload only png and jpeg files
  const imageTypes = ["image/png", "image/jpeg"];

  //handling the change
  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && imageTypes.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
