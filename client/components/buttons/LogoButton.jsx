import React from 'react'
import { Link } from 'react-router-dom'

function AboutButton () {
  return (
    <>
      <Link to='/'>
        <img src='/images/logo.jpg' className='transform h-32 w-auto hover:transition duration-500 hover:scale-105 pl-10 pt-4'></img>
      </Link>
    </>
  )
}

export default AboutButton
