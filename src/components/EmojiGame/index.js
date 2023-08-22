/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, gameStatus: true, clickedEmojiItems: []}

  endGameAndSetTopScore = currentScore => {
    this.setState({score: currentScore, gameStatus: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiItems} = this.state
    const isDuplicateEmojiClicked = clickedEmojiItems.includes(id)
    const clickedEmojiItemsLength = clickedEmojiItems.length

    if (isDuplicateEmojiClicked) {
      this.endGameAndSetTopScore(clickedEmojiItemsLength)
    } else {
      if (clickedEmojiItemsLength === emojisList.length - 1) {
        this.endGameAndSetTopScore(clickedEmojiItemsLength)
      }
      this.setState(prevState => ({
        clickedEmojiItems: [...prevState.clickedEmojiItems, id],
        score: clickedEmojiItemsLength + 1,
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiObject={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    const {topScore, score} = this.state
    let newTopScore

    if (score > topScore) {
      newTopScore = score
    }

    this.setState({
      topScore: newTopScore,
      clickedEmojiItems: [],
      gameStatus: true,
      score: 0,
    })
  }

  getResultContainer = () => {
    const {emojisList} = this.props
    const {clickedEmojiItems} = this.state
    const isWon = clickedEmojiItems.length === emojisList.length

    return (
      <WinOrLossCard
        isWon={isWon}
        count={clickedEmojiItems.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  render() {
    const {score, topScore, gameStatus} = this.state
    console.log(score)

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} gameStatus={gameStatus} />
        <div className="emoji-card-container">
          {gameStatus ? this.getEmojiList() : this.getResultContainer()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
