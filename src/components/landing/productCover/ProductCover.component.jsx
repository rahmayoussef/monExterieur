import React from "react";
import "./productCover.style.css";
import productCoverPicture from "../../../assets/productCoverPicture.png";
import { ReactComponent as Back } from "../../../assets/back (1).svg";
const ProductCover = () => {
  return (
    <div className="ProductCover">
      <img src={productCoverPicture} alt="" />
      <div className="pc">
        <span className="NosProduits">Nos Produits</span> <br />
        <span className="AccBout">
          Accueil <Back className="back" /> Boutique
        </span>
      </div>
    </div>
  );
};

export default ProductCover;
