import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarDarkModeToggler from './NavbarDarkModeToggler'

export default function Navbar({toggleTheme, theme}){
	return(
		<nav className={`w-full fixed bg-white shadow-md py-5 dark:bg-slate-900 ${theme == `dark` ? `dark` : null}`}>
			<div className="container w-[90%] md:w-full mx-5 sm:mx-auto flex items-center justify-between">
				<NavbarLogo />
				<NavbarDarkModeToggler toggleTheme={toggleTheme} theme={theme}/>
			</div>
		</nav>
	)
}