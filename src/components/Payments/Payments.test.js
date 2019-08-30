import React from "react";
import Enzyme, { shallow } from "enzyme";
import Payments from "./Payments";
import Adapter from "enzyme-adapter-react-16";
import Spinner from "../UI/Spinner/Spinner";

Enzyme.configure({ adapter: new Adapter() });

describe("Payments", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Payments />);
  });
  it("It should spinner when loading", () => {
    component.setState({ loading: true });
    const wrapper = component.find(Spinner);
    expect(wrapper.length).toBe(1);
  });

  it("It should render err when error is true", () => {
    component.setState({ error: true, loading: false });
    const wrapper = component.find("p");
    expect(wrapper.length).toBe(1);
  });
});
