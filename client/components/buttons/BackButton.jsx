import React from 'react'
import { useHistory } from 'react-router-dom'

function BackButton () {
  const history = useHistory()
  return (
    <button className="shadow-md hover:shadow-lg m-8 pt-4 pb-4 pl-6 pr-6 rounded-md text-black hover:text-yellow-200 transition ease-out duration-500 font-serif" onClick={() => history.goBack()}>back</button>
  )
}

export default BackButton
