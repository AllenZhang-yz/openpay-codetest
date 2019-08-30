import React from "react";
import Enzyme, { mount } from "enzyme";
import Payment from "./Payment";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Payment", () => {
  it("It should render 2 ps without errors", () => {
    const component = mount(<Payment />);
    const wrapper = component.find("p");
    expect(wrapper.length).toBe(2);
  });
});
