import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

class ExpenseDashboardPage extends React.Component {
  render () {
    return (
      <div>
        <p>Dashboard Page</p>
        <div>
          <ExpenseListFilters />
          <ExpenseList />
        </div>
      </div>
    )
  }
}

export default ExpenseDashboardPage
