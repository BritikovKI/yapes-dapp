import React from "react";
import "./Start.css";

const Start = () => {
  return (
    <div className="wrapper start-wrapper">
      <div className="start__image-container">
        <div
          className="start__image-container-inner"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/ape_01.png)`,
          }}
        ></div>
      </div>
      <div className="start__text-container">
        <p className="start__text">
          Connect your wallet please to interact with rewards page.
        </p>
      </div>
    </div>
  );
};

export default Start;
