import moment from "moment";
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";

test('Should Generate set Start Date action object', () => {
   const action = setStartDate(moment(0));
   expect(action).toEqual({
       type: 'SET_START_DATE',
       startDate: moment(0)
   });
});

test('Should generate set End Date action Object',() => {
   const action = setEndDate(moment(0));
   expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
});
});

test('Should setup text filter object with provided value', () => {
    const action = setTextFilter('Water');
    expect(action).toEqual ({
        type: 'SET_TEXT_FILTER',
        text: 'Water'
    })
})

test('Should setup text filter object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual ({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('Should setup sort by date object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});

test('Should setup sort by amount object', () => {
   expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});