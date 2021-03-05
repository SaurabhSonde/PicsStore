import React, { useState, useContext } from "react";
import firebase from "firebase/app";
import { UserContext } from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
const Signup = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);

        context.setUser({ email: response.user.email, uid: response.user.uid });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Signup</h1>
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
        <input type="submit" className="logbtn" value="Signup" />

        <div className="bottom-text">
          Have an account? <a href="signin">Sign in</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
