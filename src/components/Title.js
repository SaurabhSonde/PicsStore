import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Title = () => {
  const context = useContext(UserContext);

  return (
    <div className="title">
      <h1>PicsStore</h1>
      <h1>
        {context.user ? (
          <p
            tag={Link}
            onClick={() => {
              context.setUser(null);
            }}
            className="text-red"
          >
            Logout
          </p>
        ) : (
          <div></div>
        )}
      </h1>
      <h2>Your Pictures</h2>
      <p>All your beautiful pictures at one place.</p>
      <p>{context.user?.email ? context.user.email : ""}</p>
    </div>
  );
};

export default Title;
