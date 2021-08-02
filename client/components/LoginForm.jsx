import React, { useState } from 'react'

function LoginForm ({ Login, error }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '' })

  const submitHandler = e => {
    e.preventDefault()
    Login(details)
  }

  return (
    <>
      <form onSubmit={submitHandler} className='flex justify-center items-center pt-36'>
        <div className="form-inner justify-center">
          <h2 className='flex justify-center'>Log In</h2>
          {(error !== '') ? (<div className='error'>{error}</div>) : ''}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input className='bg-gray-100' type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value }) } value={details.name}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input className='bg-gray-100' type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value }) } value={details.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input className='bg-gray-100' type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value }) } value={details.password}/>
          </div>
          <input className="flex justify-center m-8 pt-4 pb-4 pl-6 pr-6 rounded-md text-black bg-white shadow-md hover:shadow-lg hover:text-yellow-200 transition ease-out duration-500 font-serif" type="submit" value="log in" />
        </div>
      </form>
    </>
  )
}

export default LoginForm
