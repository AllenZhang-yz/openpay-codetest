import React from "react";
import Enzyme, { mount } from "enzyme";
import CustomisePlanTitle from "./CustomisePlanTitle";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("CustomisePlanTitle", () => {
  it("It should render 3 divs without errors", () => {
    const component = mount(<CustomisePlanTitle />);
    const wrapper = component.find("div");
    expect(wrapper.length).toBe(3);
  });
});
