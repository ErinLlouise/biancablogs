import React from 'react'
import ConnectButton from './buttons/ConnectButton'
import AboutButton from './buttons/AboutButton'
import LogoButton from './buttons/LogoButton'
import BlogButton from './buttons/BlogButton'
import ProfileButton from './buttons/ProfileButton'

function Header () {
  return (
    <>
      <div className='flex justify-evenly headline shadow-lg font-serif'>
        <ProfileButton />
        <AboutButton />
        <LogoButton />
        <ConnectButton />
        <BlogButton />
      </div>
    </>
  )
}

export default Header
