import React from 'react'
import ReactDOM from 'react-dom'

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share.</p>}
      {props.isAuth ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view this page</p>
      )}
    </div>
  )
}

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share.</p>}
      {props.isAuth ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view this page</p>
      )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)

// requireAuthentication

const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info='These Details...' />,
//   document.querySelector('#app')
// )

ReactDOM.render(
  <AuthInfo isAuth={true} info='These Details...' />,
  document.querySelector('#app')
)
