import React from 'react'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

export default function Card({url, name, population,region, capital}){
	return(
		<div className="z-[0] bg-white dark:bg-slate-700 rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300 hover:scale-[1.02]">
			<div>
				<CardImage url={url}/>
			</div>

			<div className="p-3">
				<CardInfo name={name} population={population} region={region} capital={capital} />
			</div>
		</div>
	)
}