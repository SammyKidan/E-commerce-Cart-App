import React from 'react';

import logo from "../../img/ORDERFORM.png";

const Header = (props) => {
    return (
        <div className="box" id="header">
        <div id="logoDiv">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div id="cartIcon">
          <p>Cart</p>
          <p>{props.cartCount}</p>
        </div>
      </div>
    );
}
export default Header