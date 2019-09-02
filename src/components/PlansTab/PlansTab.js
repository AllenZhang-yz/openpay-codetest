import React from "react";
import styled from "styled-components";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Payments from "../Payments";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #a5a6a7;
  &.active {
    text-decoration: underline;
    color: #1589e7;
  }
`;

const plansTab = props => (
  <div>
    <nav>
      <Ul>
        <li>
          <StyledLink to="/weekly">Weekly</StyledLink>
        </li>
        <li>
          <StyledLink to="/fortnightly">Fortnightly</StyledLink>
        </li>
        <li>
          <StyledLink to="/monthly">Monthly</StyledLink>
        </li>
      </Ul>
    </nav>
    <Switch>
      <Route path="/weekly" render={() => <Payments interval="weekly" />} />
      <Route
        path="/fortnightly"
        render={() => <Payments interval="fortnightly" />}
      />
      <Route path="/monthly" render={() => <Payments interval="monthly" />} />
      <Redirect from="/" to="/weekly" />
    </Switch>
  </div>
);

export default plansTab;
