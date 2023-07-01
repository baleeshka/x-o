import React from 'react'
import PropTypes from 'prop-types'
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
GameLayout.propTypes = {
	board: PropTypes.arrayOf(PropTypes.string).isRequired,
	renderStatus: PropTypes.func.isRequired,
	winner: PropTypes.string,
	onRestart: PropTypes.func.isRequired,
	renderCell: PropTypes.func.isRequired,
}
export default GameLayout
