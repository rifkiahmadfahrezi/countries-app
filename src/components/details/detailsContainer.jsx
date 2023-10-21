import React from 'react'
import DetailsButton from './DetailsButton'
import DetailsImage from './DetailsImage'
import DetailsInfo from './DetailsInfo'

export default function DetailsContainer({url, name, nativeName, population, region, subRegion, capital, topDomain, curency, lang, borders, onClickHandler}){
	return(
		<div className="container w-[90%] lg:w-full mx-5 md:mx-auto my-5">
			<DetailsButton text="back" icon="-arrow-back" onClickHandler={onClickHandler} />

			<div className="flex  flex-col lg:flex-row items-start justify-between gap-[25px] mt-7">
				<div className="w-full lg:w-[50%]">
					<DetailsImage url={url} name={name}/>
				</div>
				<div className="w-full lg:w-[50%] flex flex-col justify-between">
					<DetailsInfo name={name} nativeName={nativeName} population={population} region={region} subRegion={region} capital={capital} topDomain={topDomain} curency={curency} lang={lang} />
					<div className="mt-8 flex flex-wrap gap-[10px]">
						<span className="font-semibold mr-4 dark:text-white">Border Countries: </span>

						{borders!=undefined ? borders.map((border, i) => <span key={i} className="py-[2px] px-[20px] ml-1 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:text-white">{border}</span>) : <span className="text-black dark:text-white">-</span>}
					</div>
				</div>
			</div>

		</div>
	)
}