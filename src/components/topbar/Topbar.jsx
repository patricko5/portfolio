import React from "react";
import "./topbar.scss";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          {/*it will redirect to its desired page. */}
          <a href="#intro">Intro</a>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Topbar;
