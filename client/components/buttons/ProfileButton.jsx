import React from 'react'
import { Link } from 'react-router-dom'

function ProfileButton () {
  return (
    <>
      <Link to='/profile'>
        <button className='p-10 text-black hover:text-yellow-200 transition ease-out duration-500 active:text-pink-200'>profile</button>
      </Link>
    </>
  )
}

export default ProfileButton
