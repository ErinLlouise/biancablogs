import React from 'react'
import { Link } from 'react-router-dom'

function AboutButton () {
  return (
    <>
      <Link to='/'>
        <img src='/images/logo.jpg' className='transform h-36 w-auto sm:h-16 sm:w-auto md:h-36 md:w-auto lg:h-40 lg:w-auto hover:transition duration-500 hover:scale-105 pl-10 pt-4'></img>
      </Link>
    </>
  )
}

export default AboutButton
