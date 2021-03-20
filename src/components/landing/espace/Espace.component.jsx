import React from "react";
import "./espace.style.css";
import { ReactComponent as Esp } from "../../../assets/espace.svg";
import { ReactComponent as Config } from "../../../assets/config.svg";
import { ReactComponent as Left } from "../../../assets/IconRight.svg";
import { ReactComponent as E } from "../../../assets/Groupe 25.svg";

const Espace = () => {
  return (
    <div className="espace">
      <div className="contenu">
        <div className="config">
          <E id="E" />
        </div>
        <div id="containerEspace">
          <div>
            {" "}
            <Config id="configIcon" />{" "}
          </div>
          <div>
            <span id="configEspace"> Configurez votre espace </span>
            <p id="paragraphe">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidu.
            </p>
          </div>
        </div>
        <div className="left">
          <Left />
        </div>
      </div>
      <Esp className="esp" />
    </div>
  );
};
export default Espace;
