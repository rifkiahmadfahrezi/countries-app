import React from 'react'

export default function DetailSkeleton(){
	return(
		<div className="container w-[90%] lg:w-full mx-5 md:mx-auto my-5">
			<div className="bg-slate-200 dark:bg-slate-600 w-[130px] h-[50px] rounded-md shadow-md animate-pulse"></div>

			<div className="flex  flex-col lg:flex-row items-start justify-between gap-[25px] mt-7">
				<div className="w-full lg:w-[50%]">
					<div className="bg-slate-200 dark:bg-slate-600 w-full min-h-[300px] rounded-md shadow-md animate-pulse"></div>
				</div>
				<div className="w-full lg:w-[50%] flex flex-col justify-between">
					<div className="flex flex-col">
						<span className="bg-slate-200 dark:bg-slate-600 mb-9 w-[50%] h-[25px] animate-pulse"></span>
						<span className="bg-slate-200 dark:bg-slate-600 w-[30%] h-[15px] my-2 animate-pulse"></span>
						<span className="bg-slate-200 dark:bg-slate-600 w-[40%] h-[15px] my-2 animate-pulse"></span>
						<span className="bg-slate-200 dark:bg-slate-600 w-[65%] h-[15px] my-2 animate-pulse"></span>
					</div>
					<div className="mt-8 flex">
						<span className="bg-slate-200 dark:bg-slate-600 mb-9 w-[50%] h-[35px] animate-pulse"></span>
					</div>
				</div>
			</div>
		</div>
	)
}