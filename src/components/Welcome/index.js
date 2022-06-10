// Write your code here
import {Component} from 'react'

import './index.css'

class app extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  renderAuthButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return (
        <button className="button" type="button" onClick={this.onSubscribe}>
          Subscribed
        </button>
      )
    }
    return (
      <button className="button" type="button" onClick={this.onSubscribe}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">welcome</h1>
        <p className="paragraph">Thank You! Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default app
