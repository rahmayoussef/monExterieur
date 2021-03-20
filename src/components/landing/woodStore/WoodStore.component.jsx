import React from "react";
import "./woodStore.style.css";
import imagexx from "../../../assets/imagexx.png";
import imageyy from "../../../assets/imageyy.png";

const WoodStore = () => {
  return (
    <div className="woodStore">
      <div className="part1">
        <img src={imageyy} alt="imageyy" className="img1" />
      </div>
      <div className="part2">
        <div id="notremagasin">Notre magasin</div>
        <div className="img2">
          {" "}
          <img src={imagexx} alt="imagexx" />{" "}
        </div>

        <p>
          Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </p>
        <div id="savoirPlus">en savoir plus</div>
      </div>
    </div>
  );
};
export default WoodStore;
