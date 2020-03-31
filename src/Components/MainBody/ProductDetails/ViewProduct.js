import React, { Component } from "react";
import "./ProductDetails.css";
import Remove from "../../../img/Cross.png";

class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = (e) => {
    e.preventDefault();
    const isEdit = this.state.isEdit;

    this.setState({
      isEdit: !isEdit
    });
  };

  render() {
    const isEdit = this.state.isEdit;
    return (
      <React.Fragment>
        <li className={isEdit ? "productListEditItem" : "productListItem"} key={this.props.cart.product.id} >
          <img src={this.props.cart.product.img} className="img" alt={this.props.cart.product.name} />

          <div className="productListRow">
            <div className="imgID">
              <p id="productName">{this.props.cart.product.name}</p>
              <p className="id">{this.props.cart.product.id}</p>
            </div>

            <div className="productInfo">
              <p>${this.props.cart.product.totalPrice}</p>
              <form>
                {isEdit ? (
                  <input
                    className="quantity"
                    name="quantity"
                    type="number"
                    min="0"
                    max="9"
                    value={this.props.cart.product.quantity}
                    onChange={(e) =>
                      this.props.handleChange(e, this.props.cart.product.id)
                    }
                  />
                ) : (
                  <input
                    className="quantityReadOnly"
                    name="quantity"
                    type="number"
                    min="0"
                    max="9"
                    readOnly
                    value={this.props.cart.product.quantity}
                    onChange={(e) =>
                      this.props.handleChange(e, this.props.cart.product.id)
                    }
                  />
                )}
                {isEdit ? (
                  <button type="submit" className="save" onClick={this.toggle}>
                    <h4>Save</h4>
                  </button>
                ) : (
                  <button className="update" onClick={this.toggle}>
                    <h4>Update</h4>
                  </button>
                )}
              </form>

              <img onClick={(e) => this.props.handleRemove(this.props.cart.product.id)}
                className="removeBtn"
                src={Remove}
                alt="remove"
              />
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default ViewProduct;
