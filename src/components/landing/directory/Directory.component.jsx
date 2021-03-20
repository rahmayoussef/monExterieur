import React from "react";
import "./directory.style.css";
import i1 from "../../../assets/i1.png";
import i2 from "../../../assets/i2.png";
import i3 from "../../../assets/i2.png";
import i4 from "../../../assets/i3.png";
import i5 from "../../../assets/i4.png";
import { ReactComponent as Notice } from "../../../assets/notice&installation.svg";
import { ReactComponent as E } from "../../../assets/E.svg";
const Directory = () => {
  return (
    <div className="Directory">
      <div className="overlay2">
        <Notice id="notice" />
        <div id="titre">
          Notice & <br />
          Installation
        </div>
        <div id="textnotice">
          Avant de commencer, calculez la quantité <br />
          de bois, de béton et de quincaillerie <br />
          dont vous aurez besoin.
        </div>
        <div id="EnsavoirPlus">En savoir plus</div>
      </div>
      <img src={i1} alt="i1" />
      <img src={i2} alt="i2" />
      <img src={i3} alt="i3" />
      <img src={i4} alt="i4" />
      <img src={i5} alt="i5" />
      <E className="EIcon" />
    </div>
  );
};
export default Directory;
