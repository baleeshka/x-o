import React, { useState } from 'react'
import styles from './Game.module.css'
import GameLayout from './GameLayout'

const initialBoard = Array(9).fill(null)

const GameLogic = () => {
	const [board, setBoard] = useState(initialBoard)
	const [xIsNext, setXIsNext] = useState(true)
	const [winner, setWinner] = useState(null)

	const handleClick = index => {
		if (winner || board[index]) return

		const newBoard = [...board]
		newBoard[index] = xIsNext ? 'X' : 'O'
		setBoard(newBoard)
		setXIsNext(!xIsNext)
		setWinner(calculateWinner(newBoard))
		const calculatedWinner = calculateWinner(newBoard)
		if (calculatedWinner) {
			setWinner(calculatedWinner)
		} else if (newBoard.every(cell => cell !== null)) {
			setWinner('Draw')
		}
	}

	const handleRestart = () => {
		setBoard(initialBoard)
		setXIsNext(true)
		setWinner(null)
	}

	const renderCell = index => {
		return (
			<div className={styles.cell} onClick={() => handleClick(index)}>
				{board[index]}
			</div>
		)
	}

	const renderStatus = () => {
		if (winner) {
			if (winner === 'Draw') {
				return 'Ничья!'
			} else {
				return `Победитель: ${winner}`
			}
		} else {
			return `Сейчас ходит: ${xIsNext ? 'X' : 'O'}`
		}
	}

	return (
		<GameLayout
			board={board}
			renderStatus={renderStatus}
			winner={winner}
			onRestart={handleRestart}
			renderCell={renderCell}
		/>
	)
}

export default GameLogic

const calculateWinner = board => {
	const winningLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],

		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],

		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < winningLines.length; i++) {
		const [a, b, c] = winningLines[i]
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return board[a]
		}
	}

	return null
}
