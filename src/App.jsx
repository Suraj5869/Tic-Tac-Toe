import React,{ useState } from 'react'
import './App.css'
import { Board } from './components/Board'
import { ScoreBoard } from './components/ScoreBoard'
import { Rest } from './components/Rest'
import { Title } from './components/Title'

function App() {
  const win_condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xplaying, setxplaying] = useState(true)
  const [scores, setscores] = useState({ xscore: 0, oscore: 0, tiescore:0 })
  const [gameover, setGameover] = useState(false)

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xplaying === true ? "X" : "O"
      } else {
        return value
      }
    })

    const winner = check_winner(updatedBoard)

    if (winner) {
      if (winner === "O") {
        let { oscore } = scores
        oscore += 1
        setscores({ ...scores, oscore })
      } else if(winner === 'X'){
        let { xscore } = scores
        xscore += 1
        setscores({ ...scores, xscore })
      } else {
      let { tiescore } = scores
      tiescore += 1
      setscores({...scores, tiescore})
      }
    }
      setBoard(updatedBoard)

      setxplaying(!xplaying)
    }
  
  

  const check_winner = (board) => {
    for (let i = 0; i < win_condition.length; i++){
      const [x, y, z] = win_condition[i]
      
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameover(true)
        return board[x]
      }
      // else {
      //   return !winner
      // }
    }
  }

  const resetboard = () => {
    setGameover(false)
    setBoard(Array(9).fill(null))
  } 

  return (
    <div>
      <Title/>
      <ScoreBoard scores={scores } xplaying={xplaying}/>
      <Board board={board} onClick={gameover ? resetboard : handleBoxClick} />
      <Rest resetboard={ resetboard} />
    </div>
  )
}

export default App