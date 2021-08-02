import React from 'react'
import { Link } from 'react-router-dom'

function BlogButton () {
  return (
    <>
      <Link to='/blog'>
        <button className='p-10 pr-16 text-black hover:text-yellow-200 transition ease-out duration-500 active:text-pink-200'>blog</button>
      </Link>
    </>
  )
}

export default BlogButton
