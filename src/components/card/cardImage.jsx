import React from 'react'


export default function CardImage({url}){
	return(
		<img className="w-full min-h-[150px] max-h-[250px] object-cover" src={url} alt="Image of country"/>
	)
}