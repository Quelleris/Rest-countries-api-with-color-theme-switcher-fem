import React from 'react'
import Country from './Country'

export default function CountryList({countries}) {
  return (
        <ul className="country-list grid-container">
            {countries.map((country) => {
            return (
                <li className="country-list-item" key={country.name}>
                    <Country 
                        image={country.flag}
                        name={country.name}
                        population={country.population}
                        region={country.region}   
                        capital={country.capital}
                    />
                </li>
            )
        })}
    </ul>
  )
}
