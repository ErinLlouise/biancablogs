import React from 'react'
import ConnectButton from './buttons/ConnectButton'
import AboutButton from './buttons/AboutButton'
import LogoButton from './buttons/LogoButton'
import BlogButton from './buttons/BlogButton'

function Header () {
  return (
    <>
      <AboutButton />
      <ConnectButton />
      <LogoButton />
      <BlogButton />
    </>
  )
}

export default Header
