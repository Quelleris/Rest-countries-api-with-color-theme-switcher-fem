import {FaSearch} from 'react-icons/fa'

export default function Filters({onNameSearch, onRegionSearch}) {

  return (
    <div className="filter-section">
      <div className="container">
        <div className="input-wrapper">
        <input onChange={e => onNameSearch(e.target.value)} type="search" className='country-filter-input filter-component' placeholder='Search for a country...'/>
        <FaSearch className='search-icon'/>
        </div>
        <div className="select-wrapper">
          <label htmlFor="region-select"></label>
          <select onChange={e => onRegionSearch(e.target.value)} name="regions" id="region-select" className='region-select filter-component'>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        
      </div>
    </div>
  )
}
