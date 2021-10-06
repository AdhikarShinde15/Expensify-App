import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('Should setup remove expense action Object',() => {
   const action = removeExpense({ id:'124dsds' });
   expect(action).toEqual({
       type: 'REMOVE_EXPENSE',
       id: '124dsds'
   })
})

test('Should setup editExpense action Object', () => {
    const action = editExpense('1010qq',{note:'jshjk'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '1010qq',
        updates: {note:'jshjk'}
    })
})