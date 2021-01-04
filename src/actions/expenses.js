import uuid from 'uuid'
import database from '../firebase/firebase'

// Add expense action
export const addExpense = expense => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
}

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = {
      description,
      note,
      amount,
      createdAt
    }
    return database
      .ref('expenses')
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        )
      })
  }
}

// Edit expense

export const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}

// Remove expense action
export const removeExpense = ({ id }) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}
