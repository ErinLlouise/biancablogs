import React from 'react'
import { Link } from 'react-router-dom'

function ConnectButton () {
  return (
    <>
      <Link to='/connect'>
        <button className='p-10'>connect</button>
      </Link>
    </>
  )
}

export default ConnectButton
