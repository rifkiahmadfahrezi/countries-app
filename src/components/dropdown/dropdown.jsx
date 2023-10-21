import React from 'react'

export default function Dropdown({toggleDropdown, active, getRegion}){

	const regions = ["all","africa", "america", "asia", "europe", "oceania"]


	return(
		<div onClick={()=> toggleDropdown()} className={`bg-white dark:bg-slate-700 relative ${active == false ? `overflow-hidden` : null} py-2 px-4 shadow-md rounded-md w-[90%] md:w-fit z-[1] cursor-pointer hover:shadow-lg transition duration-300 `}>
			<div className="text-black dark:text-white flex items-center justify-between">Filter by region <i className={`bx bxs-chevron-${active ? `up` : `down`}`}></i></div>

			{/*dropdown item*/}

			<div className={`flex absolute shadow-md rounded-md ${active ? `translate-y-[0]` : `translate-y-[-150%]`} z-[-1] overflow-hidden top-[50px] left-0 flex-col h-fit w-full rounded-md shadow-md`}>
			{regions.map((region, i) => <div key={i} onClick={()=> getRegion()} data-region={region} className="py-1 px-4 transition duration-300 dark:text-white bg-white dark:bg-slate-700 capitalize hover:bg-slate-200 dark:hover:bg-slate-600">{region}</div>)}
			</div>


		</div>
	)
}
