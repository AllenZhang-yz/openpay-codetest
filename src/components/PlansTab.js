import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import Payments from "./Payments/Payments";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #ced5d4;
  &:hover,
  :active {
    text-decoration: underline;
    color: #2fc1dd;
  }
`;

const PlansTab = props => (
  <div>
    <nav>
      <Ul>
        <li>
          <StyledLink to="/">Weekly</StyledLink>
        </li>
        <li>
          <StyledLink to="/fortnightly">Fortnightly</StyledLink>
        </li>
        <li>
          <StyledLink to="/monthly">Monthly</StyledLink>
        </li>
      </Ul>
    </nav>
    <Route path="/" exact render={() => <Payments interval="weekly" />} />
    <Route
      path="/fortnightly"
      render={() => <Payments interval="fortnightly" />}
    />
    <Route path="/monthly" render={() => <Payments interval="monthly" />} />
  </div>
);

export default PlansTab;
