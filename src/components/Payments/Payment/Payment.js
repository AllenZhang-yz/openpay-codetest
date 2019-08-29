import React from "react";
import styled from "styled-components";

const Plan = styled.div`
  width: 350px;
  border: 1px solid #ced5d4;
  margin: 2px auto;
  background-color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const P1 = styled.p`
  font-size: 20px;
  margin: 10px 0;
  font-weight: bold;
`;

const plan = props => (
  <Plan>
    <P1>Finishes {props.date}</P1>
    <p>
      {props.paymentCount} x $27.50 &#46; {props.interval} &#46; inc fee
    </p>
  </Plan>
);

export default plan;
