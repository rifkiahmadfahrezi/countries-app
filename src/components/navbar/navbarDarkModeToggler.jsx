import React from 'react'

export default function NavbarDarkModeToggler({toggleTheme , theme}){
		return(
			<button onClick={() => toggleTheme()} type="button" className={`dark:bg-slate-100 dark:hover:bg-white dark:text-black text-white bg-slate-500 py-2 px-4 rounded-md hover:bg-slate-600 flex items-center cursor-pointer text-[15px] font-nunito font-semibold`}><i className={`bx bx-${theme=='dark'?'sun':'moon'}`}></i> <span className="ml-1">{theme=='dark'?'Light':'Dark'} Mode</span></button>
		)
	}
