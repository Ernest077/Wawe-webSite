import React from "react";
import "./Commanda.scss";
import coachData from "../../data";
import H1 from "../../UI/H1/H1";
export default function Commanda() {
  return (
    <div className="Commanda">
      <div className="Commanda__Title">
        <H1 h1={'НАША КОМАНДА'} />
      </div>
      <div className="MainComm">

        {coachData.map((elem) => (
          <div key={elem.id} className="Commanda__Coach">
            <img
              src={elem.img}
              alt={elem.name}
              className="Commanda__CoachImage"
            />
            <h2 className="Commanda__CoachName">{elem.name}</h2>
            <p className="Commanda__CoachRole">{elem.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
