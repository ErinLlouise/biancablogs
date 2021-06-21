import React from 'react'
import { Link } from 'react-router-dom'

function AboutButton () {
  return (
    <>
      <Link to='/about'>
        <button className='p-10'>about</button>
      </Link>
    </>
  )
}

export default AboutButton
