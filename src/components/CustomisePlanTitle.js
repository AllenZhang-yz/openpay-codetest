import React from "react";
import styled from "styled-components";

const Back = styled.div`
  margin: 20px;
  font-weight: bold;
  font-family: sans-serif;
`;

const Title = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin: 20px;
  color: #484949;
`;

const customisePlanTitle = props => (
  <div>
    <Back>&#60; Back</Back>
    <Title>Customise your plan</Title>
  </div>
);

export default customisePlanTitle;
