import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import Header from "./components/Header/Header";
import CustomisePlanTitle from "./components/CustomisePlanTitle/CustomisePlanTitle";
import PlansTab from "./components/PlansTab/PlansTab";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("It should render Header without errors", () => {
    const wrapper = component.find(Header);
    expect(wrapper.length).toBe(1);
  });

  it("It should render CustomisePlanTitle without errors", () => {
    const wrapper = component.find(CustomisePlanTitle);
    expect(wrapper.length).toBe(1);
  });

  it("It should render PlansTab without errors", () => {
    const wrapper = component.find(PlansTab);
    expect(wrapper.length).toBe(1);
  });
});
