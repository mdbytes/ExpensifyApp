import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link, Route, Switch, NavLink } from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense)
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
        From my add expense component
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startAddExpense: expense => dispatch(startAddExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
