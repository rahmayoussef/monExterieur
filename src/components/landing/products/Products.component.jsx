import React from "react";
import "./products.styles.css";
import ProductItem from "../products/product-item/Product-item.component";
import { connect } from "react-redux";
const Products = ({ products }) => {
  return (
    <div className="products">
      <div className="bar">
        <p id="nouv"> Nouveautés</p>
        <p className="item"> Populaires</p>
        <p className="item"> Meilleures ventes</p>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="botton">
        {" "}
        <p>Afficher plus</p>{" "}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.boutique.products,
});
export default connect(mapStateToProps)(Products);
