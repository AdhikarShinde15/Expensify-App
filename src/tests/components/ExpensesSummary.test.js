import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test('Should correctly render ExpenseSummary with 1 expense ',() => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235}/>)
  expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpenseSummary with multiple expense ',() => {
  const wrapper = shallow(<ExpensesSummary expenseCount={21} expenseTotal={23124455}/>)
  expect(wrapper).toMatchSnapshot();
});