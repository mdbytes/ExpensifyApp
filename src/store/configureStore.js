import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import { addExpense } from '../actions/expenses'
import moment from 'moment'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  // Store Creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
