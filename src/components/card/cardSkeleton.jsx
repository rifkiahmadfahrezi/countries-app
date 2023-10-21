import React from 'react'
export default function CardSkeleton(){
	return(
		<div className="z-[0] min-h-[400px] bg-white dark:bg-slate-700 rounded-md shadow-md overflow-hidden hover:shadow-lg">
			<div className="bg-slate-200 dark:bg-slate-600 w-full h-[200px] animate-pulse">
			</div>

			<div className="p-3">
				<div className="flex flex-col">
					<span className="bg-slate-200 dark:bg-slate-800 mb-4 w-[50%] h-[15px] animate-pulse"></span>
					<span className="bg-slate-200 dark:bg-slate-800 w-[30%] h-[15px] my-2 animate-pulse"></span>
					<span className="bg-slate-200 dark:bg-slate-800 w-[40%] h-[15px] my-2 animate-pulse"></span>
					<span className="bg-slate-200 dark:bg-slate-800 w-[65%] h-[15px] my-2 animate-pulse"></span>
				</div>
			</div>
		</div>
	)
}