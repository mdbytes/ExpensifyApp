import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 }) => {
  return {
    type: 'INCREMENT_COUNT',
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
  }
}

const decrementCount = ({ decrementBy = 1 }) => {
  return {
    type: 'DECREMENT_COUNT',
    decrementBy: typeof decrementBy === 'number' ? decrementBy : 1
  }
}

const setCount = ({ setCount = 0 }) => {
  return {
    type: 'SET',
    setCount: typeof setCount === 'number' ? setCount : 1
  }
}

const resetCount = ({ reCount = 0 }) => {
  return {
    type: 'RESET_COUNT',
    reCount: typeof reCount === 'number' ? reCount : 1
  }
}

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      const incrementBy =
        typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + action.incrementBy
      }

    case 'DECREMENT_COUNT':
      const decrementBy =
        typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }

    case 'SET':
      const newCount = typeof action.setCount === 'number' ? action.setCount : 1
      return {
        count: newCount
      }

    case 'RESET_COUNT':
      const reCount = typeof action.reCount === 'number' ? action.reCount : 1
      return {
        count: reCount
      }

    default:
      return state
  }
}

const store = createStore(countReducer)

store.dispatch(incrementCount({ incrementBy: 50 }))

console.log(store.getState())

store.dispatch(decrementCount({ decrementBy: 30 }))

console.log(store.getState())

store.dispatch(setCount({ setCount: 1500 }))

console.log(store.getState())

store.dispatch(resetCount({ reCount: 200 }))

console.log(store.getState())
