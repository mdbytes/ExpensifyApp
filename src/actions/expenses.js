import uuid from 'uuid'

// Add expense action
export const addExpense = ({
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
