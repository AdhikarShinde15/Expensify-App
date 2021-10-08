import React from "react";
import NotFoundPage from "../../components/NotFoundPage"
import { shallow } from "enzyme";

test('Should Render Expense DashBoard Correctly', () => {
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();
})