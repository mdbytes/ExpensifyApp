import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch, NavLink } from 'react-router-dom'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { addExpense } from './actions/expenses'
import { setTextFilter, setSortByDate } from './actions/filters'
import { getVisibleExpenses } from './selectors/expenses'

const store = configureStore()

// store.subscribe(() => {
//   const state = store.getState()
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//   console.log(visibleExpenses)
// })

store.dispatch(
  addExpense({ description: 'Water bill', amount: 3000, createdAt: 4500 })
)

store.dispatch(
  addExpense({ description: 'Gas bill', amount: 100, createAt: -1000 })
)

store.dispatch(
  addExpense({ description: 'Rent', amount: 109500, createdAt: 101100 })
)

store.dispatch(
  addExpense({ description: 'Judgement', amount: 100000000, createdAt: -2000 })
)
// store.dispatch(setSortByDate())

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'))
// }, 3000)

const appTarget = document.querySelector('#app')

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, appTarget)
