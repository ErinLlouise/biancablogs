import React from 'react'
import { Link } from 'react-router-dom'

function ConnectButton () {
  return (
    <>
      <Link to='/connect'>
        <button className='p-10 text-black hover:text-yellow-200 transition ease-out duration-500 active:text-pink-200'>connect</button>
      </Link>
    </>
  )
}

export default ConnectButton
