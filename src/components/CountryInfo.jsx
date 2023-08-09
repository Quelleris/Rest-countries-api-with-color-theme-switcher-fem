import React from 'react'
import { useParams, Link } from 'react-router-dom'
import countries from '../assets/data.json'

export default function CountryInfo() {

  // kolejny useEffect z fetch API, ale tylko ten 1 potrzebny kraj.
  const { countryName } = useParams();
  const country = countries.find(country => country.name === countryName);
  console.log(countryName)

  return (
    <section className="country-info-section">
      <div className="container">
        <Link to="/" className="back-btn">
          <span>Back</span>
        </Link>
        <div className="country-info">
          <img src={country.flags.png} alt={country.name} />
          <h2 className="country-info-title">{country.name}</h2>
          <ul className="country-info-list">
            <li className="country-info-item">
              Native Name: {country.nativeName}
            </li>
            <li className="country-info-item">
              Population: {country.population}
            </li>
            <li className="country-info-item">
              Region: {country.region}
            </li>
            <li className="country-info-item">
              Sub Region: {country.subregion}
            </li>
            <li className="country-info-item">
              Capital: {country.capital}
            </li>
          </ul>
          <ul className="country-info-list">
            <li className="country-info-item">
              Top Level Domain: {country.topLevelDomain}
            </li>
            <li className="country-info-item">
              Currencies: {country.currencies ?country.currencies[0].name : 'none'}
            </li>
            <li className="country-info-item">
              Languages: {country.languages.map((language) => {
                return `${language.name}, `
              })}
            </li>
          </ul>
          <ul className="country-info-border-list">
            <li className="country-info-border-title">
              <h3>Border Countries</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
