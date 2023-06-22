import React from 'react'
import './Scoreboard.css'

export const ScoreBoard = ({ scores, xplaying }) => {
  const { xscore, oscore, tiescore } = scores
  return (
    <div className='scoreboard'>
      <span className={`score x-score ${!xplaying && "inactive"}`}>X - {xscore}</span>
      <span className={`score o-score ${xplaying && "inactive"}`}>O - {oscore}</span>
    </div>
  )
}