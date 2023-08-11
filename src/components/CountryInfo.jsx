import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

export default function CountryInfo() {
  const [countryInfo, setCountryInfo] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(response => response.json())
    .then(dataRaw => setCountryInfo(dataRaw))
  }, [])

  return (
     <section className="country-info-section">
      <div className="container">
        <Link to="/" className="back-btn">
          <BsArrowLeft className='back-icon'/>
          <span>Back</span>
        </Link>
        {countryInfo.map(country => 
           <div className="country-info" key={country.name.common}>
          <img className="country-info-img" src={country.flags.png} alt={country.flags.alt} />
          <div className="country-info-content">
          <h2 className="country-info-title">{country.name.common}</h2>
          <div className="grid-container">
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
              Top Level Domain: {country.tld[0]}
            </li>
            {/* <li className="country-info-item">
              Currencies: {country.currencies ? country.currencies.name : 'none'}
            </li> */}
            {/* <li className="country-info-item">
              Languages: {country.languages.map((language) => {
                return `${language.name}, `
              })}
            </li> */}
          </ul>
          </div>
          <ul className="country-info-border-list">
            <li className="country-info-border-title">
              <h3>Border Countries</h3>
            </li>
          </ul>
          </div>
         
        </div>
        )}
      </div>
    </section>
  )
}
