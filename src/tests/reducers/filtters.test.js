import filtersReducer from "../../reducers/filters";
import moment from "moment";

test('Should setup default Filter Values', () => {
   const state = filtersReducer(undefined,{type: '@@init'})
   expect(state).toEqual({
       text: '',
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month')
   }); 
});

test('Should set sortBy amount', ()=> {
    const state = filtersReducer(undefined,{ type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy Date', ()=> {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState,{ type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('Should Set Text Filter', () => {
    const action = {type: 'SET_TEXT_FILTER',text: 'water'}
    const state = filtersReducer(undefined, action)
    expect(state.text).toEqual(action.text)
 })
 
 test('Should Set Start Date Filter', () => {
    const action = {type: 'SET_START_DATE',startDate: moment()}
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(action.startDate)
 })

 test('Should Set Start Date Filter', () => {
    const action = {type: 'SET_END_DATE',endDate: moment()}
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(action.endDate)
 })
