import React from "react";
import styled from "styled-components";
import logo from "../img/openpay-logo.png";
import shoppingcart from "../img/shoppingcart-logo.png";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f7f8;
`;

const ImgLogo = styled.img`
  height: 70px;
  width: auto;
`;

const ImgCart = styled.img`
  height: 40px;
  width: auto;
`;

const ShoppingCart = styled.div`
  display: flex;
  align-items: center;
  font-family: sans-serif;
  margin-right: 15px;
`;

const header = props => (
  <Header>
    <div>
      <ImgLogo src={logo} alt="logo" />
    </div>
    <ShoppingCart>
      <ImgCart src={shoppingcart} alt="shoppingcart" />
      <p>$123.45</p>
    </ShoppingCart>
  </Header>
);

export default header;
