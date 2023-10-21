import React from 'react'

export default function DetailsText({text, val}){
	return(
		<p className="mb-1 dark:text-white"><span className="font-semibold capitalize">{text}</span>: {val}</p>
	)
}