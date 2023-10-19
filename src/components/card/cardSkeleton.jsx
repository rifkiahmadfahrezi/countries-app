import React from 'react'
export default function CardSkeleton({url, name, population,region, capital}){
	return(
		<div className="z-[0] bg-white dark:bg-slate-700 rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300 hover:scale-[1.02]">
			<div className="bg-slate-200 dark:bg-slate-800 w-full animate-pulse">
			</div>

			<div className="p-3">
				<div className="flex flex-col">
					<span className="bg-slate-200 dark:bg-slate-800 mb-4 w-50% animate-pulse"></span>
					<span className="bg-slate-200 dark:bg-slate-800 w-50% animate-pulse"></span>
					<span className="bg-slate-200 dark:bg-slate-800 w-50% animate-pulse"></span>
					<span className="bg-slate-200 dark:bg-slate-800 w-50% animate-pulse"></span>
				</div>
			</div>
		</div>
	)
}