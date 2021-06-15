import React from 'react'
import { Link } from 'react-router-dom'

function BlogButton () {
  return (
    <>
      <Link to='/blog'>
        <button className=''>blog</button>
      </Link>
    </>
  )
}

export default BlogButton
