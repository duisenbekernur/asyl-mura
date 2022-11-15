import React from "react";

import introImg from "../img/logotypes/biz-birgemiz-black.png";

const Intro = () => {
  return (
      <div className="intro">
        <div className="intro__media">
          <video
            autoPlay
            muted
            loop
            src={require("../img/other/videoback/1min.mp4")}
          />
        </div>
        <div className="intro__content">
          <img src={introImg} alt="" />
        </div>
      </div>
  );
};

export default Intro;
