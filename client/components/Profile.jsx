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
    if (details.email === AdminUser.email && details.password === AdminUser.password) {
      console.log('logged in as admin xo')
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      setError('details do not match')
    }
  }

  const Logout = () => {
    setUser({ name: '', email: '' })
  }
  return (
    <div>
      {(user.email !== '') ? (
        <div>
          <h1 className='flex justify-center pt-48'>Welcome,  <span>{user.name}</span></h1>
          <button className='flex justify-center' onClick={Logout}>logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  )
}

export default Profile
