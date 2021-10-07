import expensesReducer from "../../reducers/expenses"
import expenses from '../fixtures/expenses';

test('Should Set Default State', () => {
    const state = expensesReducer(undefined, {type: '@@init'});
    expect(state).toEqual([]);
});

test('Should remove expense by id',() => {
  const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
  }
 const state = expensesReducer(expenses,action);
 expect(state).toEqual([expenses[0],expenses[2]])
})

test('Should not remove expense id not found',() => {
  const action = {
      type: 'REMOVE_EXPENSE',
      id: -1
  }
 const state = expensesReducer(expenses,action);
 expect(state).toEqual(expenses)
})


test('Should Add an Expense',() => {
  const action = {
      type: 'ADD_EXPENSE',
      expense: {
          id:109,
          decription: "Laptop",
          note: '',
          createdAt: 24554,
          amount: 678
      }
  }
 const state = expensesReducer(expenses,action);
 expect(state).toEqual([...expenses,action.expense])
})

test('Should Edit an Expense',() => {
    const action = {
        type: 'EDIT_EXPENSE',
         id:expenses[1].id,
        updates: {
         description:"mango"
        }
    }
   const state = expensesReducer(expenses,action);
   expect(state[1].decription).toEqual(action.updates.decription)
  })

  test('Should Not Edit an Expense',() => {
    const action = {
        type: 'EDIT_EXPENSE',
         id:-41,
        updates: {
         description:"mango"
        }
    }
   const state = expensesReducer(expenses,action);
   expect(state).toEqual(expenses)
  })

