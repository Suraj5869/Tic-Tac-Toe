import React from 'react'
import "./Reset.css"

export const Rest = ({resetboard}) => {
  return (
    <button className='reset' onClick={resetboard}>Reset</button>
  )
}
