import React from "react";
import "./StartPage.css";
import healthIcon from "./images/healthIcon.svg";
import chatBubbleIcon from "./images/chatBubbleIcon.svg";
import stepCount from "./images/stepCount.svg";
import mapBerlin from "./images/mapBerlin.svg";
import frame1 from "./images/frame1.svg";
import frame2 from "./images/frame2.svg";
import frame3 from "./images/frame3.svg";
import calender from "./images/calender.svg";

export const StartPage = () => {

  return (
    <div className="container">
      <ul className="list-container">
        <li className="table-list-item">
          <div className="item-header">
            <div className="title-container">
            <img src={healthIcon} alt="meaningful text" />
            <span className="title">Steps this month</span>
            </div>
            <button className="button">+ Add your steps</button>
          </div>
          <img src={stepCount} alt="meaningful text" />
          <img src={mapBerlin} alt="meaningful text" />
          <p>In total you have walked 488 km this month, good job! </p>
        </li>
        <li className="table-list-item">
        <div className="item-header">
          <div className="title-container">
            <img src={chatBubbleIcon} alt="meaningful text" />
            <span className="title">Wall</span>
          </div>
            <button className="button">+ Create new post</button>
          </div>
          <img src={frame1} alt="meaningful text" />
          <img src={frame2} alt="meaningful text" />
          <img src={frame3} alt="meaningful text" />
        </li>
        <li className="table-list-item">
        <div className="item-header">
          <div className="title-container">
            <img src={healthIcon} alt="meaningful text" />
            <span className="title">Calender</span>
          </div>
          </div>
            <img src={calender} alt="meaningful text" />
        </li>
      </ul>
    </div>

   );
};