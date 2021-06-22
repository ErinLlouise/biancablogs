import React, { useState } from 'react'

function LoginForm ({ Login, error }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '' })

  const submitHandler = e => {
    e.preventDefault()
    Login(details)
  }

  return (
    <>
      <form onSubmit={submitHandler} className='flex justify-center pt-48'>
        <div className="form-inner">
          <h2>Log In</h2>
          {/* err.msg */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value }) } value={details.name}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value }) } value={details.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="passwork">Password:</label>
            <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value }) } value={details.password}/>
          </div>
          <input type="submit" value="log in" />
        </div>
      </form>
    </>
  )
}

export default LoginForm
