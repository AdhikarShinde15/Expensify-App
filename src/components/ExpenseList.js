import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
              <p>No Eepenses</p>
            ): (
                React.Children.toArray(
                    props.expenses.map((expense) => (
                        <ExpenseListItem {...expense}/>
                    ))
                )
            )
        }
       
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters),
    }
}

export default connect(mapStateToProps)(ExpenseList);
