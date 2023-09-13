import './App.css'
import {Component} from 'react'

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
  }

  renderLeftContainer = () => (
    <div className="text-container">
      <div className="para-container">
        <p className="para">Count the characters like a Boss...</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
          className="no-user-input"
        />
      </div>
    </div>
  )

  renderRightContainer = () => {
    const {searchInput} = this.state
    return (
      <div className="input-container">
        <h1 className="heading">Character Counter</h1>
        <div>
          <input
            placeholder="Enter the Characters here"
            className="searchInput"
            value={searchInput}
          />
          <button type="button" className="add-btn">
            Add
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        {this.renderLeftContainer()}
        {this.renderRightContainer()}
      </div>
    )
  }
}

export default App
