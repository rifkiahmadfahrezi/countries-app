import React from 'react'

export default function CardInfo({name, population, region, capital}){
	return(
		<div className="flex flex-col">
			<h3 className="mb-3 font-bold dark:text-white">{name}</h3> {/* country name*/}

			<p className="dark:text-white"><span className="font-semibold ">population</span>: {population}</p>
			<p className="dark:text-white"><span className="font-semibold ">Region</span>: {region}</p>
			<p className="dark:text-white"><span className="font-semibold ">Capital</span>: {capital}</p>
		</div>
	)
}