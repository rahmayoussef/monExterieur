import React from "react";
import "./footer.styless.css";
import logo from "../../assets/logo.jpg";
import { ReactComponent as Time } from "../../assets/time.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        {" "}
        <img src={logo} alt={"logo"} />{" "}
      </div>
      <div className='lienutils'>
        <p id="footerTitles">Lien Utiles</p>
        <div id="itm">
          <p>Configurateur</p>
          <p>Notre magasin</p>
          <p>Notice et installation</p>
          <p>Livraison Transport</p>
        </div>
      </div>
      <div id="contact">
        <p id="footerTitles">Nous Contacter </p>
        <p id="footerAdress">Adress:</p>
        <p id="itmes">
          {" "}
          3 rue de champ de verger allones, <br /> Pays de la loire, France{" "}
          <br></br>{" "}
        </p>
        <p id="footerTel">Téléphone </p>
        <p id="numberphone">+33 2 43 57 00 87 </p>
      </div>
      <div className="time">
        <p id="footerTitles">Horaires </p>
        <p id="footerWeek">Lundi à vendredi </p>
        <Time /> 7:30-12:00 <br></br>
        <Time /> 13:30-18:00 <br></br>
        <p id="samedi">Samedi</p>
        (Fermé les samedis de janvier et février) <br></br>
        <Time /> 09:00-12:00
      </div>
    </div>
  );
};
export default Footer;
