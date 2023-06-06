import './index.css'

const SuggestionItem = props => {
  const {listItems, suggestionInput} = props
  const {suggestion} = listItems

  const suggestionAsInput = () => {
    suggestionInput(suggestion)
  }

  return (
    <li className="list-item">
      <p className="desc">{suggestion}</p>
      <img
        onClick={suggestionAsInput}
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
