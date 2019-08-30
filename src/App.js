import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CustomisePlanTitle from "./components/CustomisePlanTitle/CustomisePlanTitle";
import PlansTab from "./components/PlansTab/PlansTab";

const Main = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid #dddddd;
  margin: 0 auto;
  background-color: #d5e7f6;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Header />
          <CustomisePlanTitle />
          <PlansTab />
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
