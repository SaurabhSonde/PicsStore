import React, { useState, useEffect } from "react";
import { projStorage, projFirestore, timestamp } from "../firebase/config";

const useStorage = (file) => {
  //progress of the upload
  const [progress, setProgress] = useState(0);

  //if there is any error
  const [error, setError] = useState(null);

  //url of the image which we get from storage after upload
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = projStorage.ref(file.name);
    const collectionRef = projFirestore.collection("images");

    //uploading file to reference
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
