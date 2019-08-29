import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Payment = styled.div`
  width: 380px;
  border: 1px solid #ced5d4;
  margin: 2px auto;
  background-color: #fff;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  /* padding: 0 15px; */
`;

const P1 = styled.p`
  font-size: 20px;
  margin: 8px 15px;
  font-weight: bold;
`;

const P2 = styled.p`
  margin: 8px 15px;
  font-size: 15px;
  color: #9b9e9f;
`;

const payment = props => (
  <Payment>
    <P1>Finishes {props.date}</P1>
    <P2>
      {props.paymentCount} x $27.50 &#46; {props.interval} &#46; inc fee
    </P2>
  </Payment>
);

payment.propTypes = {
  date: PropTypes.string,
  paymentCount: PropTypes.string,
  interval: PropTypes.string
};

export default payment;
