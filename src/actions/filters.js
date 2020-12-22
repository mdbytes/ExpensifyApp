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

module.exports = {
  setTextFilter,
  setSortByDate,
  setSortByAmount,
  setStartDate,
  setEndDate
}
