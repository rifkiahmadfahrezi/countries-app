import React from 'react'

export default function DetailsButton({text, icon, onClickHandler}){
	return(
		<button onClick={()=> onClickHandler()} className="dark:bg-slate-700 dark:text-white py-3 px-6 rounded-md flex items-center justify-between bg-white text-black dark:text-white capitalize font-semibold shadow-md hover:shadow-lg"><i className={`bx bx${icon} mr-3`}></i>{text}</button>
	)
}