import React from 'react'
import { useHistory } from 'react-router-dom'

function BackButton () {
  const history = useHistory()
  return (
    <button className="shadow-lg m-8 p-4 rounded-md" onClick={() => history.goBack()}>back</button>
  )
}

export default BackButton
