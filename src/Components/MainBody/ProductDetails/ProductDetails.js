import React from "react";
import "./ProductDetails.css";
import ViewProduct from "./ViewProduct";

const ProductDetails = (props) => {
  return (
    <div className="box" id="productDetails">
      <div id="productListContainer">
        <ul id="productListHeadings">
          <li>Product Name</li>
          <li>Price</li>
          <li>Quantity</li>
          <li id="removeHeading">Remove</li>
        </ul>
      </div>

      <ul id="productList">
        {props.state.map((cart) => {
          return (
            <ViewProduct
              key={cart.product.id}
              cart={cart}
              handleChange={props.handleChange}
              state={props.state}
              handleSubmit={props.handleSubmit}
              handleRemove={props.handleRemove}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductDetails;
