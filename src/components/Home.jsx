import React, { useState, useEffect } from 'react'
import Filters from './Filters'
import CountryList from './CountryList'

export default function Home() {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null)

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

  function filterCountriesByName(searchInput) {
    if (searchInput !== "") {
      const filteredData = countries.filter((country) => {
        return country.name.toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredCountries(filteredData)
    }
    else {
      setFilteredCountries(null)
    }
  }

  function filterCountriesByRegion(option) {
    if (option !== "") {
      const filteredData = countries.filter((country) => {
        return country.region.includes(option)
      })
      setFilteredCountries(filteredData)
    }
    else {
      setFilteredCountries(null)
    }
  }

  return (
    <main className='main'>
    <Filters 
    onNameSearch={filterCountriesByName}
    onRegionSearch={filterCountriesByRegion}/>
    <section className="countries-section">
      <div className="container">
        {countries && <CountryList countries={filteredCountries ? filteredCountries : countries}/>}
      </div>
    </section>
  </main>
  )
}
