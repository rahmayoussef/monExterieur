import React from "react";
import "./boutique.style.css";
import SideBar from "../../components/landing/sidebar/SideBar.component";
import Products from "../../components/landing/products/Products.component";
import ProductCover from "../../components/landing/productCover/ProductCover.component";
import Separateur from "../../components/landing/separateur/Separateur.component";

const Boutique = () => {
  return (
    <div className="boutique">
      <div>
        <ProductCover />
      </div>
      <div className="categoriesProducts">
        <SideBar />
        <Products />
      </div>
      <Separateur className="sepBoutique" />
    </div>
  );
};
export default Boutique;
