import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

export default function Header() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<header className='header'>
			<div className='container'>
				<h1 className='header-title'>Where in the world?</h1>
				<button
					onClick={() => setDarkMode(!darkMode)}
					type='button'
					className='theme-switch-btn'
				>
					{darkMode ? <FaMoon /> : <BsFillSunFill />}
					<span>{darkMode ? "Dark " : "Light "} Mode</span>
				</button>
			</div>
		</header>
	);
}
