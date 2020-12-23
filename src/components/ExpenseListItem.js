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
  <tr>
    <td className='description'>{description}</td>
    <td className='amount'>{numeral(amount / 100).format('$0, 0.00')}</td>

    <td className='created-at'>{moment(createdAt).format('MMMM Do YYYY')}</td>
    <td className='note'>{note}</td>
    <td className='edit-button'>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
    </td>
  </tr>
)

export default ExpenseListItem
