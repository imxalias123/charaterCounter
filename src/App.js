import './App.css'
import {Component} from 'react'
import {v4} from 'uuid'

// Replace your code here
class App extends Component {
  state = {
    charactersList: [],
    searchInput: '',
    length: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newCharacterList = {
      id: v4(),
      searchInput,
      length: searchInput.length,
    }
    console.log(newCharacterList)
    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, newCharacterList],
      searchInput: '',
    }))
  }

  renderLeftContainer = () => {
    const {charactersList, searchInput, length} = this.state
    const noInput = charactersList.length === 0
    return (
      <div className="text-container">
        <div className="para-container">
          <h1 className="para">Count the characters like a Boss...</h1>
          {noInput ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-user-input"
            />
          ) : (
            <div className="count-display">
              {charactersList.map(each => (
                <ul className="unordered-List" key={each.id}>
                  <li>
                    <p className="count">
                      {each.searchInput} : {each.length}
                    </p>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  renderRightContainer = () => {
    const {searchInput} = this.state
    return (
      <div className="input-container">
        <h1 className="heading">Character Counter</h1>
        <form onSubmit={this.submitForm}>
          <input
            placeholder="Enter the Characters here"
            className="searchInput"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
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
