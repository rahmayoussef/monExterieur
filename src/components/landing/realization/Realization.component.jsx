import React from "react";
import "./realization.style.css";
import realisation from "../../../assets/realisation.png";
import { ReactComponent as Left } from "../../../assets/arrow-left-line.svg";
import { ReactComponent as Right } from "../../../assets/arrow-left1.svg";
import { ReactComponent as E } from "../../../assets/E.svg";

const Realization = () => {
  return (
    <div className="realization">
      <div className="panneauBois">
        <div id="titleContainer">Nos Réalisation</div>
        <div id="pb">
          <p id="title2">Panneau bois</p>
          <p id="text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasdundefined
          </p>
          <div id="slide">
            <div>
              <Left id="lf" />
            </div>
            <div>
              <Right />
            </div>
          </div>
        </div>
      </div>
      <div className="realisationImage">
        <img src={realisation} alt="realisation" />
        {/* <E id="EE" /> */}
      </div>
    </div>
  );
};
export default Realization;
