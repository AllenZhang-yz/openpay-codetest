import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import CustomisePlanTitle from "./components/CustomisePlanTitle";
import PlansTab from "./components/PlansTab";
import PurchasePriceContext from "./context/purcasePrice-context";

const Main = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid #dddddd;
  margin: 0 auto;
  background-color: #d5e7f6;
`;

class App extends Component {
  state = {
    purchasePrice: 123.45
  };
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Header purchasePrice={this.state.purchasePrice} />
          <CustomisePlanTitle />
          <PurchasePriceContext.Provider
            value={{ purchasePrice: this.state.purchasePrice }}
          >
            <PlansTab />
          </PurchasePriceContext.Provider>
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
