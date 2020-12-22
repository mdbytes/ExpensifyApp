import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({
  dispatch,
  id,
  description,
  note,
  amount,
  createdAt
}) => (
  <div>
    <p>description: {description}</p>

    <p>note: {note}</p>
    <p>amount: {amount}</p>
    <p>created: {createdAt}</p>
    <button>
      <Link to={`/edit/${id}`}>Edit</Link>
    </button>
  </div>
)

export default connect()(ExpenseListItem)
