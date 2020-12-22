import {
  setTextFilter,
  setSortByDate,
  setSortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
})

test('should generate set text filter to text input', () => {
  const action = setTextFilter('testing')
  expect(action).toEqual({
    type: 'SET_TEXT',
    newText: 'testing'
  })
})

test('should generate set text filter with no input', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT',
    newText: ''
  })
})

test('should generate object instructions to sort by date', () => {
  const action = setSortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should generate object instructions to sort by amount', () => {
  const action = setSortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})
