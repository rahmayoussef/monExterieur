import React from "react";
import "./toolBox.style.css";
import { ReactComponent as ToolBoxIcon } from "../../../assets/029-toolbox.svg";
import { ReactComponent as Left } from "../../../assets/arrow-left-verticale.svg";
import { ReactComponent as GroupeE } from "../../../assets/GroupeVerticale.svg";
const ToolBox = () => {
  return (
    <div className="toolbox">
      <div>
        {" "}
        <ToolBoxIcon id="toolboxIcon" />{" "}
      </div>
      <div className="title"> Configurez votre espace </div>
      <div className="content">
        {" "}
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidu.{" "}
      </div>
      <div className="leftICon">
        <GroupeE id="groupE" />
        <Left id="leftIcon" />
      </div>
    </div>
  );
};
export default ToolBox;
