import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('Should setup remove expense action Object', () => {
    const action = removeExpense({ id: '124dsds' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '124dsds'
    })
})

test('Should setup editExpense action Object', () => {
    const action = editExpense('1010qq', { note: 'jshjk' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1010qq',
        updates: { note: 'jshjk' }
    })
})

test('should setup add expense action object with provided value ', () => {
  const expenseData = {
      description: 'Rent' ,
      amount: 109500,
      createdAt: 10000,
      note: 'This was last months rent'
  };
  const action =addExpense(expenseData);
  expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
          ...expenseData,
          id: expect.any(String)
      }
  });
});

test('should setup add expense action object with default values', () => {
    const action  =  addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: "",
            amount: 0,
            note: "",
            createdAt: 0
        }
    })
})