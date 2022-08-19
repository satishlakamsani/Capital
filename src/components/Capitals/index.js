import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    country1: countryAndCapitalsList[0].id,
  }

  onClickCapital = event => {
    this.setState({country1: event.target.value})
  }

  getFilteredCountries = () => {
    const {country1} = this.state
    const filteredCountries = countryAndCapitalsList.find(
      eachProjectDetails => eachProjectDetails.id === country1,
    )
    return filteredCountries.country
  }

  render() {
    const {country1} = this.state
    const country = this.getFilteredCountries(country1)

    return (
      <div className="app-container">
        <div className="country-container">
          <h1 className="country-capital">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              value={country1}
              onChange={this.onClickCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="questioning">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
