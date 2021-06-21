import React from 'react'
import { Link } from 'react-router-dom'

function ProfileButton () {
  return (
    <>
      <Link to='/profile'>
        <button className='p-10'>profile</button>
      </Link>
    </>
  )
}

export default ProfileButton
