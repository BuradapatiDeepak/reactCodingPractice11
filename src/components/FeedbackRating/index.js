import './index.css'

const FeedbackRating = props => {
  const {emojiListItems, emojiClicked} = props
  const {name, imageUrl} = emojiListItems
  const onClickemojiClicked = () => {
    emojiClicked()
  }
  return (
    <li className="list">
      <img
        alt={name}
        className="emoji"
        src={imageUrl}
        onClick={onClickemojiClicked}
      />
      <p className="emoji-text">{name}</p>
    </li>
  )
}

export default FeedbackRating
