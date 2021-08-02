import React from 'react'
import ConnectButton from './buttons/ConnectButton'
import AboutButton from './buttons/AboutButton'
import LogoButton from './buttons/LogoButton'
import BlogButton from './buttons/BlogButton'
import ProfileButton from './buttons/ProfileButton'

function Header () {
  return (
    <>
      <div className='flex items-center justify-between font-serif text-lg'>
        <LogoButton />
        <div className='flex'>
          <ProfileButton />
          <AboutButton />
          <ConnectButton />
          <BlogButton />
        </div>
      </div>
    </>
  )
}

export default Header
