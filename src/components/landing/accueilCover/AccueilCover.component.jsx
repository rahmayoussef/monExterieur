import React from "react";
import "./accueilCover.style.css";
import photoCouverture from "../../../assets/photoCouverture.png";
export const AccueilCover = () => {
  return (
    <div className="accueilCover">
      <img
        id="imgCouv"
        src={photoCouverture}
        alt={"photoCouverture"}
        className=" imgCouverture"
      />
    </div>
  );
};
export default AccueilCover;
