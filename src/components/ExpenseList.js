import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectedExpenses from '../selectors/expenses'

export const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <table>
      <thead>
        <tr>
          <th className='description'>Description</th>
          <th className='amount'>Amount</th>
          <th className='created-at'>Created</th>
          <th className='note'>Note</th>
          <th className='edit-button'></th>
        </tr>
      </thead>
      <tbody>
        {props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />
        })}
      </tbody>
    </table>
  </div>
)

const mapStateToProps = state => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
