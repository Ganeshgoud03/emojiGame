// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiObject, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiObject

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="btn" onClick={onClickEmoji}>
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
