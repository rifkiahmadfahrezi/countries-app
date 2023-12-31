import React from 'react'

export default function SearchBox({submitHandler, searchInputHandler}){
	return (
		<div className="flex items-center bg-white dark:bg-slate-700 hover:shadow-lg [&>input]:focus:shadow-lg transition duration-300 rounded-md shadow-md overflow-hidden mb-5 md:mb-0">
			<label htmlFor="sc-country" className="cursor-pointer mr-5 text-[20px] pl-4 py-2 dark:text-white">
				<i className="bx bx-search"></i>
			</label>
			<form onSubmit={()=> submitHandler()}>
				<input id="sc-country" type="search" className="md:resize-x min-w-[150px] max-w-[300px]  py-2 dark:text-white dark:bg-slate-700 px-2" placeholder="Search for a country..." onInput={()=> searchInputHandler()}/>
			</form>
		</div>
	)
}