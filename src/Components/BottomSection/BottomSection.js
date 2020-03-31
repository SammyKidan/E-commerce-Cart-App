import React from "react";
import "./BottomSection.css";

const BottomSection = (props) => {

  return (
    <React.Fragment>
      <div id="commentSection">
        <p>Additional Comments</p>
        <form id="commentField">
          <textarea  type="text" onChange={props.handleComment} value={props.state.userComment} >
           {""}
          </textarea>
        </form>
      </div>

      <div id="deliveryInfo">
        <p id="deliveryInfo_Title">Delivery Info </p>
        <p id="deliveryInfo_Text">
          All orders will be sent by Special Delivery, which will be insured and
          will need to be signed for. Allow 4-6 weeks for delivery.
        </p>
      </div>

      <div id="prices">
        <div>
          <table>
            <tbody>
              <tr>
                <td>Sub Total</td>
                <td>${props.state.orderDetails.subTotal}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>${props.state.orderDetails.tax}</td>
              </tr>
              <tr id="total">
                <td>Total</td>
                <td>${props.state.orderDetails.totalOrderPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="checkoutSection">
          <button id={props.state.submit ? 'submittedBtn': "checkoutBtn" } onClick={props.handleSubmit}>
            <p>{props.state.submit ? 'Completed' : 'Checkout'}</p>
          </button>
          <p>
            or <span>Continue Shopping</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default BottomSection;
