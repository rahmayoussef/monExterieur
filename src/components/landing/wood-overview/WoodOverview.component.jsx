import React from "react";
import "./woodOverview.style.css";
import img from "../../../assets/img.png";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
const WoodOverview = () => {
  return (
    <div className="woodOverview">
      {/****************************************** */}
      <div className="container">
        <img src={img} alt={"img"} className="image" />
        <div className="overlay">
          <div className="texte">
            Lame <br />
            Commposite
          </div>
        </div>
      </div>
      {/***************************************** */}
      <div className="container">
        <img src={img3} alt={"img3"} className="image" />
        <div className="overlay">
          <div className="texte">
            Lame <br />
            en bois
          </div>
        </div>
      </div>

      {/***************************************** */}
      <div className="container">
        <img src={img2} alt={"img2"} className="image" />
        <div className="overlay">
          <div className="texte">
            Panneau <br /> bois
          </div>
        </div>
      </div>
      {/***************************************** */}
      <div className="container">
        <img src={img1} alt={"img1"} className="image" />
        <div className="overlay">
          <div className="texte">
            Grille <br /> rigide
          </div>
        </div>
      </div>
      {/***************************************** */}
      <div className="container">
        {" "}
        <img src={img4} alt={"img4"} className="image" />
        <div className="overlay">
          <div className="texte">Gabion</div>
        </div>
      </div>
    </div>
  );
};
export default WoodOverview;
