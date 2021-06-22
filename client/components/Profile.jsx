import React, { useState } from 'react'
import LoginForm from './LoginForm'

function Profile () {
  const AdminUser = {
    email: 'admin@admin.co.nz',
    password: 'admin123'
  }

  const [user, setUser] = useState({ name: '', email: '' }) // logs user in
  const [error, setError] = useState('') // ensures user details are correct

  const Login = details => {
    console.log(details)
  }

  const Logout = () => {
    console.log('logout')
  }
  return (
    <div>
      {(user.email !== '') ? (
        <div>
          <h1>Welcome, <span>{user.name}</span></h1>
          <button>logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  )
}

export default Profile
