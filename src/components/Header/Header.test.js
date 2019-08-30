import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Header from "./Header";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
  it("It should render 3 divs without errors", () => {
    const component = mount(<Header />);
    const wrapper = component.find("div");
    expect(wrapper.length).toBe(3);
  });

  it("It should render logo without errors", () => {
    const component = shallow(<Header />);
    const wrapper = component.find({ alt: "logo" });
    expect(wrapper.length).toBe(1);
  });

  it("It should render shoppingcart without errors", () => {
    const component = shallow(<Header />);
    const wrapper = component.find({ alt: "shoppingcart" });
    expect(wrapper.length).toBe(1);
  });
});
