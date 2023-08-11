import React from 'react'
import { Link } from 'react-router-dom'

export default function Country({image, name, population, region, capital}) {
  return (
    <div className="country-component">
        <img src={image} alt={name} className='country-component-image'/>
        <div className="country-content">
            <h2 className="coutry-name">
                <Link to={`/${name}`}>{name}</Link>
                </h2>
            <ul className="country-info-list">
                <li className="country-info-item">
                    <span className='fw-regular'>Population: </span>
                    {population.toLocaleString()}
                </li>
                <li className="country-info-item">
                    <span className='fw-regular'>Region: </span> 
                    {region}
                </li>
                <li className="country-info-item">
                    <span className='fw-regular'>Capital: </span>
                    {capital}
                </li>
            </ul>
        </div>
    </div>
  )
}
