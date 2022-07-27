import React from "react";
import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      cursorChar: "|",
      strings: ["Software Developer", "UI Designer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/intro-removebg.png" alt="intro" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello World, I'm</h2>
          <h1>Patrick Orihuela</h1>
          <h2>
            <span ref={textRef}></span>
          </h2>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
