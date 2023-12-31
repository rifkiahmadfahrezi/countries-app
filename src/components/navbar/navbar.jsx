import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarDarkModeToggler from './NavbarDarkModeToggler'

export default function Navbar({toggleTheme, theme}){
	return(
		<nav className={`w-full z-[99] sticky top-0 bg-white shadow-md py-5 dark:bg-slate-900 ${theme == `dark` ? `dark` : null}`}>
			<div className="container w-[90%] mx-auto flex items-center justify-between">
				<NavbarLogo />
				<NavbarDarkModeToggler toggleTheme={toggleTheme} theme={theme}/>
			</div>
		</nav>
	)
}