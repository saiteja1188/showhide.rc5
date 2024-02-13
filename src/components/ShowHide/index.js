// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowFirstName = () => {
    this.setState(prevState => {
      console.log(`prev show ${!prevState.showFirstName}`)
      return {showFirstName: !prevState.showFirstName}
    })
  }

  onShowLastName = () => {
    this.setState(prevState => {
      console.log(`prev show ${!prevState.showLastName}`)
      return {showLastName: !prevState.showLastName}
    })
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="show-hide-app-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="show-hide-container">
            <div className="button-container">
              <button
                className="button"
                type="button"
                onClick={this.onShowFirstName}
              >
                Show/Hide Firstname
              </button>
              {showFirstName && <p className="name">Joe</p>}
            </div>
            <div className="button-container">
              <button
                className="button"
                type="button"
                onClick={this.onShowLastName}
              >
                Show/Hide Lastname
              </button>
              {showLastName && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
