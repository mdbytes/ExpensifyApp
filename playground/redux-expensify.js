import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Add expense action
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
}
// Edit expense

const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}

// Remove expense action
const removeExpense = ({ id }) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

// Expenses reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]

    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id)

    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })

    default:
      return state
  }
}

// Setting text filter
const setTextFilter = (newText = '') => {
  return {
    type: 'SET_TEXT',
    newText
  }
}

// Setting sortBy to date
const setSortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  }
}

// Setting sortBy to amount
const setSortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  }
}

// Setting start date
const setStartDate = (date = undefined) => {
  return {
    type: 'SET_START_DATE',
    date
  }
}

// Setting end date
const setEndDate = (date = undefined) => {
  return {
    type: 'SET_END_DATE',
    date
  }
}

// Filter reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.newText }

    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }

    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }

    case 'SET_START_DATE':
      return { ...state, startDate: action.date }

    case 'SET_END_DATE':
      return { ...state, endDate: action.date }

    default:
      return state
  }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase())
      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
    })
}

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

const demoState = {
  expenses: [
    {
      id: 'a;lk;jfadlskdjaslfj',
      description: 'January Rent',
      note: 'Final payment for this address',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}

// Add expense, remove expense, edit e  xpense
// Set text filter, sortby, start and end date

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 300, createdAt: 1000 })
)

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100, createAt: -1000 })
)

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 400 }))
//store.dispatch(setTextFilter('text'))
// store.dispatch(setSortByAmount())
// store.dispatch(setSortByDate())

//store.dispatch(setStartDate(150))

// store.dispatch(setStartDate())
// store.dispatch(setEndDate(130))
// store.dispatch(setEndDate())
