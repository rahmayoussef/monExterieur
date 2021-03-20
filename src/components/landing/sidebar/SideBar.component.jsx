import React from "react";
import ToolBox from "../toolbox/ToolBox.components";
import "./sideBar.style.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="categories">
        <div className="Categorietem">
          {" "}
          <p>CATEGORIES</p>
        </div>
        <div className="lameBois">
          {" "}
          <p>Lame Bois</p>
        </div>
        <div className="item">
          {" "}
          <p>Lame Composite</p>
        </div>
        <div className="item">
          {" "}
          <p>Panneau Bois</p>
        </div>
        <div className="item">
          {" "}
          <p>Grille Rigide</p>
        </div>
        <div className="item">
          {" "}
          <p>Gabion</p>
        </div>
      </div>
      <ToolBox />
    </div>
  );
};
export default SideBar;
