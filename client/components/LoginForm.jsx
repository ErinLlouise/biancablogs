import React, { useState } from 'react'

function LoginForm ({ Login, error }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '' })

  const submitHandler = e => {
    e.preventDefault()
    Login(details)
  }

  return (
    <>
      <form onSubmit={submitHandler} className='pt-20'>
        <div className="grid justify-center grid-flow-col grid-cols-12 grid-rows-12 gap-4x">
          <h2 className='col-start-6 col-span-2 row-start-1 font-hero-font font-serif text-7xl pb-4'>Log In</h2>
          {(error !== '') ? (<div className='error'>{error}</div>) : ''}
          <div className="col-start-6 col-span-2 row-start-3 pt-10">
            <div>
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
            <div className='col-start-6 col-span-2 row-start-4'>
              <input className="m-8 pt-4 pb-4 pl-6 pr-6 rounded-md text-black bg-white shadow-md hover:shadow-lg hover:text-yellow-200 transition ease-out duration-500 font-serif" type="submit" value="log in" />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginForm
