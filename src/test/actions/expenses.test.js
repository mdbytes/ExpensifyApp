import configureMockStore from 'redux-mock-store'
import database from '../../firebase/firebase'
import thunk from 'redux-thunk'
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

beforeEach(done => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  database
    .ref('expenses')
    .set(expensesData)
    .then(() => {
      done()
    })
})

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should remove expense from firebase', done => {
  const store = createMockStore({})
  const id = expenses[1].id
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      })
      return database.ref(`expenses/${id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy()
      done()
    })
})

test('Should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'new note' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { note: 'new note' }
  })
})

test('should edit expense from firebase', done => {
  const store = createMockStore({})
  const id = expenses[0].id
  const updates = { amount: 21045 }
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      })
      return database.ref(`expenses/${id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val().amount).toBe(updates.amount)
      done()
    })
})

test('Should setup add expense action object with provided value', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', done => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    database
      .ref(`expenses/${actions[0].expense.id}`)
      .once('value')
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
      })
  })
})

test('should add expense with default to database and store', () => {})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch expenses from firebase', done => {
  const store = createMockStore()
  store.dispatch(startSetExpenses()).then(() => {
    const action = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
  })
  done()
})
