import React from "react";
import styled from "styled-components";

const Checked = styled.div`
  color: #3fef41;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;

const checked = props => <Checked>√</Checked>;

export default checked;
