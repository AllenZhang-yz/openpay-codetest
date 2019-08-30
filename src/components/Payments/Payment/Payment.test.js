import React from "react";
import Enzyme, { mount } from "enzyme";
import Payment from "./Payment";
import Adapter from "enzyme-adapter-react-16";
import Checked from "../../UI/Checked";

Enzyme.configure({ adapter: new Adapter() });

describe("Payment", () => {
  let component;
  beforeEach(() => {
    component = mount(<Payment />);
  });

  it("It should render 2 ps without errors", () => {
    const wrapper = component.find("p");
    expect(wrapper.length).toBe(2);
  });

  it("It should render <Checked /> when selected", () => {
    component.setProps({ selected: true });
    const wrapper = component.find(Checked);
    expect(wrapper.length).toBe(1);
  });
});
