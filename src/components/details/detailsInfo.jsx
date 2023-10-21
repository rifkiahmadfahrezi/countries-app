import React from 'react'
import DetailsText from './DetailsText'

export default function DetailsInfo({url, name, nativeName, population, region, subRegion, capital, topDomain, curency, lang}){
	return(
		<div className="flex flex-col">
			<h3 className="text-black dark:text-white font-extrabold text-lg mb-5">{name}</h3>

			<div className="flex items-start gap-[15px]">
				<div>
					<DetailsText text="native name" val={nativeName}/>
					<DetailsText text="population" val={population}/>
					<DetailsText text="region" val={region}/>
					<DetailsText text="sub region" val={subRegion}/>
					<DetailsText text="capital" val={capital}/>
				</div>
				<div className="ml-8">
					<DetailsText text="top level domain" val={topDomain}/>
					<DetailsText text="currencies" val={curency}/>
					<DetailsText text="languages" val={lang}/>
				</div>
			</div>
		</div>
	)
}
