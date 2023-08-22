// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-head">Emoji Game</h1>
      </div>
      {gameStatus ? (
        <div className="score-container">
          <p className="p1">Score: {score}</p>
          <p className="p2">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
