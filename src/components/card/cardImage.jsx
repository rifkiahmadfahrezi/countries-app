import React from 'react'


export default function CardImage({url}){
	return(
		<img className="w-full min-h-[150px]" src={url} alt="Image of country"/>
	)
}