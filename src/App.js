import React, { Component } from "react";
import Header from "./Components/Header/Header";
import MainBody from "./Components/MainBody/MainBody";
import "./styles.css";
import jetSki from "./img/image.png";
import bubbleWrap from "./img/image2.png";
import crockPot from "./img/image3.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [
        {
          product: {
            name: "Jet Ski",
            id: 434556256,
            img: jetSki, // figure out how to solve mapping this iamge in product details
            unitPrice: 1500,
            quantity: 2,
            totalPrice: 3000
          },
          isEdit: false,
          remove: false
        },
        {
          product: {
            name: "Bubble Wrap",
            id: 345245865,
            img: bubbleWrap,
            unitPrice: 440,
            quantity: 2,
            totalPrice: 880
          },
          isEdit: false,
          remove: false
        },
        {
          product: {
            name: "Crock-Pot",
            id: 987123654,
            img: crockPot,
            unitPrice: 55,
            quantity: 1,
            totalPrice: 55
          },
          isEdit: false,
          remove: false
        }
      ],
      userComment: "",
      orderDetails: {
        subTotal: "3944",
        tax: "0", // in this case tax 0
        totalOrderPrice: "3944"
      },
      submit: false,
      orderSummary: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }



  // Handles input Changes in product quantity
  handleChange = (e, id) => {
    const cartProductIndex = this.state.cartProducts.findIndex((p) => {
      return p.product.id === id;
    });

    const cartProduct = { ...this.state.cartProducts[cartProductIndex] };
    cartProduct.product.quantity = e.target.value.substr(0, 1);


    const totalPrice =
      cartProduct.product.unitPrice * cartProduct.product.quantity;
    cartProduct.product.totalPrice = totalPrice;

    const cartProducts = [...this.state.cartProducts];
    cartProducts[cartProductIndex] = cartProduct;


    const orderDetails = { ...this.state.orderDetails };
    const totalOrderPrice = cartProducts.reduce(
      (a, b) => a + b.product.totalPrice,
      0
    );

    const tax = 0;
    orderDetails.totalOrderPrice = totalOrderPrice + tax;
    orderDetails.subTotal = totalOrderPrice - tax;


    this.setState({
      cartProducts: cartProducts,
      orderDetails: orderDetails
    });
  };



// Handles user input for comment section
  handleComment = (e) => {
    const userComment = e.target.value;

    this.setState({
      userComment: userComment
    });
  };


// Console logs a summary of the order
  handleSubmit = (e) => {
    e.preventDefault();
    const cartProducts = this.state.cartProducts.map((item) => {
      return item.product;
    });

    const orderSummary = this.state.orderSummary;
    orderSummary.cart = cartProducts;
    orderSummary.orderDetails = this.state.orderDetails;
    orderSummary.comment = this.state.userComment;

    this.setState({
      orderSummary: orderSummary,
      submit: true
    });

    console.log("Order Complete", this.state.orderSummary);
  };



// Removes product items and re-calculates order summary
  handleRemove = (id) => {
    const cartItems = [...this.state.cartProducts];
    const updatedList = cartItems.filter((item) => {
      return item.product.id !== id;
    });

    const orderDetails = { ...this.state.orderDetails };
    const totalOrderPrice = updatedList.reduce(
      (a, b) => a + b.product.totalPrice,
      0
    );

    const tax = 0;
    orderDetails.totalOrderPrice = totalOrderPrice + tax;
    orderDetails.subTotal = totalOrderPrice - tax;

    this.setState({ cartProducts: updatedList, orderDetails: orderDetails });
    console.log(this.state.cartProducts);
  };


  render() {

    return (
      <div className="App">
       <Header cartCount={this.state.cartProducts.length}/>
        <MainBody
          handleChange={this.handleChange}
          state={this.state}
          handleComment={this.handleComment}
          handleSubmit={this.handleSubmit}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
