import React from "react";
import "./product-item.styles.css";

const ProductItem = (props) => {
  console.log("props!!!!!!!!!", props);
  const { price, product_name, picture } = props.product;

  return (
    <div className="Product-item">
      <div className="imageProduct">
        <img alt="product" src={picture} />
      </div>
      <div className="details">
        <span className="product-name"> {product_name}</span> <br />
        <span className="price"> {price} </span>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div id="voirDetails"> Voir details</div>
    </div>
  );
};
export default ProductItem;
