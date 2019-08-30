import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Checked from "../../UI/Checked";
import PurcasePriceContext from "../../../context/purcasePrice-context";

const PaymentList = styled.div`
  width: 380px;
  border: 1px solid #ced5d4;
  margin: 2px auto;
  background-color: #fff;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.p`
  font-size: 20px;
  margin: 8px 15px;
  font-weight: bold;
`;

const PaymentMethod = styled.p`
  margin: 8px 15px;
  font-size: 15px;
  color: #9b9e9f;
`;

const payment = props => (
  <PaymentList onClick={props.choosePayment}>
    <div>
      <Date>Finishes {props.date}</Date>
      <PurcasePriceContext.Consumer>
        {context => (
          <PaymentMethod>
            {props.paymentCount} x $
            {(context.purchasePrice / props.paymentCount).toFixed(2)} &#46;{" "}
            {props.interval} &#46; inc fee
          </PaymentMethod>
        )}
      </PurcasePriceContext.Consumer>
    </div>
    {props.selected && <Checked />}
  </PaymentList>
);

payment.propTypes = {
  date: PropTypes.string,
  paymentCount: PropTypes.string,
  interval: PropTypes.string,
  choosePayment: PropTypes.func,
  selected: PropTypes.bool
};

export default payment;
