// Write your React code here.
import {Component} from 'react'
import './index.css'
import FeedbackRating from '../FeedbackRating'

class Feedback extends Component {
  state = {loved: false}

  emojiClicked = () => {
    this.setState(prevState => ({loved: !prevState.loved}))
  }

  render() {
    const {loved} = this.state
    const {resources} = this.props
    const emojisList = resources.emojis
    let element

    if (loved === true) {
      element = (
        <div className="container1">
          <img
            alt="love emoji"
            className="emoji"
            src={resources.loveEmojiUrl}
          />
          <h1 className="heading">Thank You!</h1>
          <p className="emoji-text">
            we will use your feed back to improve our customer support
            performance.
          </p>
        </div>
      )
    } else {
      element = (
        <>
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>

          <ul className="emoji-container">
            {emojisList.map(eachItem => (
              <FeedbackRating
                emojiClicked={this.emojiClicked}
                emojiListItems={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </>
      )
    }

    return (
      <div className="app-container">
        <div className="container">{element}</div>
      </div>
    )
  }
}

export default Feedback
