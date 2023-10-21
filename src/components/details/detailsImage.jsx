import React from 'react'


export default function DetailsImage({url, alt}){
	return(
		<img src={url} alt={alt} className="w-full h-fit"/>
	)
}