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
          <h1 className='flex justify-center pt-36 font-hero-font font-serif text-7xl'>Welcome,  <span> {user.name}</span></h1>
          <h2><em>What would you like to do?</em></h2>
          <div className='flex justify-center'>
            <button className='shadow-md hover:shadow-lg m-8 pt-4 pb-4 pl-6 pr-6 rounded-md text-black hover:text-yellow-200 transition ease-out duration-500 font-serif'>submit content</button>
            <button className='shadow-md hover:shadow-lg m-8 pt-4 pb-4 pl-6 pr-6 rounded-md text-black hover:text-yellow-200 transition ease-out duration-500 font-serif'>update content</button>
          </div>
          <button className='fixed inset-x-0 bottom-0' onClick={Logout}>logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  )
}

export default Profile
