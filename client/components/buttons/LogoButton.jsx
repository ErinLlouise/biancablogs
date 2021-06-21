import React from 'react'
import { Link } from 'react-router-dom'

function AboutButton () {
  return (
    <>
      <Link to='/'>
        <img src='/images/logo.jpg' className='h-24 p-4'></img>
      </Link>
    </>
  )
}

export default AboutButton
