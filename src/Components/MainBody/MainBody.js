import React from "react";
import "./MainBody.css";
import ProductDetails from "./ProductDetails/ProductDetails";
import Svg from "./svg";
import BottomSection from "../BottomSection/BottomSection";

const MainBody = (props) => {
  return (
    <div className="mainBodyContainer">
      <h1 className="yourCart"> Your Cart </h1>

      <div className="breadCrumb">
        <Svg />
      </div>

      <ProductDetails
        state={props.state.cartProducts}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        handleRemove={props.handleRemove}
      />

      <div className="box" id="bottomSection">
        <BottomSection
          state={props.state}
          handleComment={props.handleComment}
          handleSubmit={props.handleSubmit}
        />
      </div>
    </div>
  );
};

export default MainBody;
