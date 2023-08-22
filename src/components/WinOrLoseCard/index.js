// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {isWon, count, onClickPlayAgain} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameResult = isWon ? 'You Won' : 'You Lose'
  const gameLabel = isWon ? 'Best Score' : 'Score'
  return (
    <div className="result-container">
      <div className="result">
        <h1 className="result-head">{gameResult}</h1>
        <p className="result-p1">{gameLabel}</p>
        <p className="result-p2">{count}/12</p>
        <button type="button" className="reset-btn" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="img-container">
        <img src={imgUrl} className="result-img" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLossCard
