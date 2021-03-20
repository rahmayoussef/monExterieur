import React from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Config } from "../../assets/config.svg";
import { ReactComponent as Layer } from "./Layer 2.svg";

const Header = () => {
  return (
    <div className="fixedNavBar">
      {/********************************Part1*********************************/}
      <div className="grid-container">
        <div className="logo">
          <img src={logo} alt={"logo"} />
        </div>
        <div className="search">
          <Layer className="iconSearch" />
          <p>Recherche</p>
        </div>
        <div className="magasin">
          <Location className="iconlocation" />
          <p>Notre magasin </p>
        </div>
        <div className="config">
          <div>
            <Config className="configIcon" />
            <label>Configurateur</label>
          </div>
        </div>
      </div>
      {/* *******************************Part2*********************************** */}

      <div className="grid-container1">
        <div className="accueil">
          <Link to="/" id="item">
            {" "}
            Acuueil
          </Link>
        </div>
        <div className="boutique">
          <Link to="/products" id="item">
            {" "}
            Boutique
          </Link>
        </div>
        <div className="realisation">Nos réalisations</div>
        <div className="contactez-nous">Contactez-nous</div>
      </div>
    </div>
  );
};
export default Header;
