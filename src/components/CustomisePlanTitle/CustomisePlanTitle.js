import React, { Fragment } from "react";
import styled from "styled-components";

const Back = styled.div`
  margin: 20px;
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 20px;
  color: #484949;
`;

const customisePlanTitle = props => (
  <Fragment>
    <Back>&#60; Back</Back>
    <Title>Customise your plan</Title>
  </Fragment>
);

export default customisePlanTitle;
