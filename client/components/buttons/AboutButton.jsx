import React from 'react'
import { Link } from 'react-router-dom'

function AboutButton () {
  return (
    <>
      <Link to='/about'>
        <button className='p-10 text-black hover:text-yellow-200 transition ease-out duration-500 active:text-pink-200'>about</button>
      </Link>
    </>
  )
}

export default AboutButton
