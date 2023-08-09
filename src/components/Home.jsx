import React, { useState, useEffect } from 'react'
import Filters from './Filters'
import CountryList from './CountryList'

export default function Home() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=capital,population,name,region,flags")
      .then(response => response.json())
      .then(dataRaw => {
        setCountries(dataRaw.map((country) => {
          return {
            capital: country.capital,
            population: country.population,
            name: country.name.common,
            region: country.region,
            flag: country.flags.png,
          };
        }))
      })
  }, [])
  return (
    <main className='main'>
    <Filters />
    <section className="countries-section">
      <div className="container">
        {countries && <CountryList countries={countries}/>}
      </div>
    </section>
  </main>
  )
}
