import React from "react";
import Img from '../../assets/img.jpeg'
import "./Section.scss"
export default function Section() {
  let days=['450',"2500",'10',"365"]
  let descp=['туристов','часов катания','проф. тренеров','дней в году']
  return (
    <div className="Section">
      <div className="Section__Img">
        <img src={Img} alt="Img"></img>
      </div>
      <div className="Section__Img__Days" >
        {days.map(elem=><h1>{elem}</h1>
        )}
        
      </div>
      <div className="Section__Img__Descp" >
        {descp.map(elem=><p>{elem}</p>
        )}
        
      </div>
    </div>
  );
}
