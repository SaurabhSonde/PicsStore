import React, { useState, useContext } from "react";

import firebase from "firebase/app";
import { UserContext } from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import Title from "./Title";

const Signin = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);

        context.setUser({ email: response.user.email, uid: response.user.uid });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Title />
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Signin</h1>
        <div class="txtb">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span data-placeholder="Email"></span>
        </div>
        <div className="txtb">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span data-placeholder="Password"></span>
        </div>
        <input type="submit" className="logbtn" value="Signin" />

        <div className="bottom-text">
          Don't have account? <a href="signup">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Signin;
