import React from 'react'
import styles from './Game.module.css'
const GameLayout = ({ board, renderStatus, renderCell, winner, onRestart }) => {
	return (
		<div className={styles.game}>
			<div className={styles.status}>{renderStatus()}</div>
			<div className={styles.board}>
				{board.map((cell, index) => (
					<div key={index} className={styles.boardCell}>
						{renderCell(index)}
					</div>
				))}
			</div>
			{winner && (
				<div className={styles.restartButtonContainer}>
					<button className={styles.restartButton} onClick={onRestart}>
						Начать заново
					</button>
				</div>
			)}
		</div>
	)
}

export default GameLayout
