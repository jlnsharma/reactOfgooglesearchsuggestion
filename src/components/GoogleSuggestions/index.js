import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: '', searchValue: ''}

  onchangeSearch = event => {
    const {searchInput} = this.state

    this.setState({searchInput: event.target.value})
  }

  suggestionInput = suggestion => {
    const {searchInput} = this.state
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput, searchValue} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="imgEle"
          />
          <div className="search-cont">
            <div className="input-cont">
              <img
                className="search-img"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                value={searchInput}
                className="inputEle"
                placeholder="Search Google"
                type="search"
                onChange={this.onchangeSearch}
              />
            </div>
            <ul>
              {filteredList.map(each => (
                <SuggestionItem
                  key={each.id}
                  listItems={each}
                  suggestionInput={this.suggestionInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
