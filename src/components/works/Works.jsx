import React from "react";
import "./works.scss";
import { ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
const Works = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const dataSlider = [
    {
      id: "1",
      icon: "./assets/weather.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: "2",
      icon: "./assets/weather.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentCard(currentCard > 0 ? currentCard - 1 : 2)
      : setCurrentCard(
          currentCard < dataSlider.length - 1 ? currentCard + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentCard * 100}vw)` }}
      >
        {dataSlider.map((dataSelected) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftCotainer">
                  <div className="imageContainer">
                    <img src={dataSelected.icon} alt="esr" />
                  </div>
                  <h2>{dataSelected.title}</h2>
                  <p>{dataSelected.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="assets/featureApp6.jpg" alt="" />
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      
      <ArrowForwardIos
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIos
        className="arrow right"
        onClick={() => handleClick()}
      />
      
    </div>
  );
};

export default Works;
