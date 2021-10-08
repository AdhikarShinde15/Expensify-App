import React from "react";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

test('Should Render Expense List Item With one of the Item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot();
})