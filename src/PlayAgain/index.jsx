const PlayAgain = props => (
	<div className="game-done">
		<div className="message"
		style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}>
			{props.gameStatus === 'lost' ? 'Game Over': 'You Won'}
		</div>
		<button onClick={props.onClick}>Play Again</button>
	</div>
);

export default PlayAgain;