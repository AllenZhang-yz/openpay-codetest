import React from "react";
import Enzyme, { shallow } from "enzyme";
import PlansTab from "./PlansTab";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("PlansTab", () => {
  it("It should render 3 lis without errors", () => {
    const component = shallow(<PlansTab />);
    const wrapper = component.find("li");
    expect(wrapper.length).toBe(3);
  });
});
