import React from 'react'
import { Link } from 'react-router-dom'

export default function Country({image, name, population, region, capital}) {
  return (
    <div className="country-component">
        <img src={image} alt={name} />
        <div className="country-content">
            <h2 className="coutry-title">
                <Link to={`/${name}`}>{name}</Link>
                </h2>
            <ul className="coutry-info-list">
                <li className="country-info-item">
                    Population: {population.toLocaleString()}
                </li>
                <li className="country-info-item">
                    Region: {region}
                </li>
                <li className="country-info-item">
                    Capital: {capital}
                </li>
            </ul>
        </div>
    </div>
  )
}
