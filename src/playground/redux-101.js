import { createStore } from "redux";

// Action Generators
// const add = ({ a, b }, c) => {
//     return a + b + c;
// }

// console.log(add({ a: 1 , b: 10 }, 100))

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decerementCount = ({ decrementBy = 1 } = {}) => ({
    type:'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({count}) => ({
    type : 'SET',
    count
})
 
const countReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
             return {
                 count: state.count + action.incrementBy
             };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        case 'SET':
            return {
                count: action.count
            };

        case 'RESET':
            return {
                count: 0
            } ;

        default :
            return state;     
    }
};
const store = createStore(countReducer);
//Actions - is an object taht get sent to the state
//increment ,decrement,reset
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});



store.dispatch(incrementCount({ incrementBy: 50 }))

store.dispatch(decerementCount({ decrementBy: 5 }))



store.dispatch(resetCount());

store.dispatch(setCount({ count: 85000 }));