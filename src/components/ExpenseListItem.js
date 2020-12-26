import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export const ExpenseListItem = ({
  id,
  description,
  note,
  amount,
  createdAt
}) => (
  <div>
    <p className='description'>{description}</p>
    <p className='amount'>{numeral(amount / 100).format('$0, 0.00')}</p>

    <p className='created-at'>{moment(createdAt).format('MMMM Do YYYY')}</p>
    <p className='note'>{note}</p>
    <p className='edit-button'>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
    </p>
    <br />
  </div>
)

export default ExpenseListItem
