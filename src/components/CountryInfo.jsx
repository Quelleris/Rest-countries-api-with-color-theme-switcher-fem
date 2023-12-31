import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function getNativeName(country) {
	return country.name.nativeName[Object.keys(country.name.nativeName)].common;
}

export default function CountryInfo() {
	const [countryInfo, setCountryInfo] = useState([]);
	const { countryName } = useParams();

	useEffect(() => {
		fetch(
			`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
		)
			.then((response) => response.json())
			.then((dataRaw) => setCountryInfo(dataRaw));
	}, []);

	return (
		<section className='country-info-section'>
			<div className='container'>
				<Link to='/' className='back-btn'>
					<BsArrowLeft className='back-icon' />
					<span>Back</span>
				</Link>
				{countryInfo.map((country) => (
					<div className='country-info' key={country.name.common}>
						<img
							className='country-info-img'
							src={country.flags.png}
							alt={country.flags.alt}
						/>
						<div className='country-info-content'>
							<h2 className='country-info-title'>
								{country.name.common}
							</h2>
							<div className='grid-container'>
								<ul className='country-info-list'>
									<li className='country-info-item'>
										Native Name: {getNativeName(country)}
									</li>
									<li className='country-info-item'>
										Population:{" "}
										{country.population.toLocaleString()}
									</li>
									<li className='country-info-item'>
										Region: {country.region}
									</li>
									<li className='country-info-item'>
										Sub Region: {country.subregion}
									</li>
									<li className='country-info-item'>
										Capital: {country.capital}
									</li>
								</ul>
								<ul className='country-info-list'>
									<li className='country-info-item'>
										Top Level Domain: {country.tld[0]}
									</li>
									<li className='country-info-item'>
										Currencies:{" "}
										{country.currencies
											? Object.keys(country.currencies)
											: "none"}
									</li>
									<li className='country-info-item'>
										Languages:{" "}
										{Object.values(country.languages).join(
											", "
										)}
									</li>
								</ul>
							</div>
							<ul className='country-info-border-list'>
								<li className='country-info-border-title'>
									<h3>Border Countries: </h3>
								</li>
								{country.borders.map((border) => {
									return (
										<li key={border} className='border'>
											{border}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
