import React from 'react'
import Navbar from './components/navbar/Navbar'
import SearchBox from './components/searchBox/SearchBox'
import Dropdown from './components/dropdown/Dropdown'
import Card from './components/card/Card'
import CardSkeleton from './components/card/CardSkeleton'
import DetailsContainer from './components/details/DetailsContainer'
import DetailSkeleton from './components/details/DetailSkeleton'


export default class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			theme: localStorage.theme?.length == 0 ? 'light' : localStorage.theme,
			active: false, // for dropdown
			keyword: '', // for searchbox
			data: [], // data from rest api
			modalActive: false, //modal box
			dataDetails: [], // data for details country
			errorData: false // for show error message if searched country no found
		}



		// add theme class to root element
		document.documentElement.classList.add(this.state.theme)

		this.getAllCountry(`https://restcountries.com/v3.1/all`, 'data')


		this.toggleThemeHandler = this.toggleThemeHandler.bind(this)
		this.toggleDropdownHandler = this.toggleDropdownHandler.bind(this)
		this.getRegionHandler = this.getRegionHandler.bind(this)
		this.onSubmitSearcboxHandler = this.onSubmitSearcboxHandler.bind(this)
		this.onInputSearchHandler = this.onInputSearchHandler.bind(this)
		this.cardOnClickHandler = this.cardOnClickHandler.bind(this)
		this.toggleModal = this.toggleModal.bind(this)
	}

	getAllCountry(url, type = 'data'){

		fetch(url)
		.then(response => response.json())
		.then(response => response)
		.then(response =>{
			if(response.status !== undefined && response.status === 404){
				this.setState({errorData: true})
				return []
			}else{
				this.setState({errorData: false})
				if(type == 'data'){
					this.setState({data: response})
				}else if(type == 'details'){
					this.setState({dataDetails: response})
				}
			}
		})
		.catch(err => console.error(err))
	}

	toggleThemeHandler(){
		if(this.state.theme == 'light'){
			this.setState({theme: 'dark'})
			localStorage.theme = 'dark'
			// add theme class to root(HTML) element
			document.documentElement.classList.add('dark')
			document.documentElement.classList.remove('light')
		}else{
			this.setState({theme: 'light'})
			localStorage.theme = 'light'
			// add theme class to root(HTML) element
			document.documentElement.classList.add('light')
			document.documentElement.classList.remove('dark')
		}

		
	}

	toggleDropdownHandler(){
		if (!this.state.active){
			this.setState({active: true})
		}else{
			this.setState({active: false})
		}
	}

	getRegionHandler(){

		event.target.dataset.region !== 'all' ? this.getAllCountry(`https://restcountries.com/v3.1/region/${event.target.dataset.region}`) : this.getAllCountry(`https://restcountries.com/v3.1/all`)

		// this.setState({region: event.target.dataset.region})

		

	}

	onSubmitSearcboxHandler(){
		event.preventDefault()

		this.getAllCountry(`https://restcountries.com/v3.1/name/${this.state.keyword}`)
		this.setState({ modalActive: false})

	}

	onInputSearchHandler(){
		this.setState({keyword: event.target.value.toLowerCase()})
	}

	displaySkeleton(type,num = 1){
		let x = []
			if(type == 'card'){
				for (let i = 0; i < num; i++){
					x.push(<CardSkeleton key={i}/>)
				}
			}else if(type == 'details'){
				for (let i = 0; i < num; i++){
					x.push(<DetailSkeleton key={i}/>)
				}
			}else{
				return false
			}
		return x
	}

	cardOnClickHandler(event){
		this.toggleModal()


		this.setState({dataDetails: this.getAllCountry(`https://restcountries.com/v3.1/name/${event.currentTarget.dataset.country}`, 'details')})
	}

	toggleModal(){
		if(this.state.modalActive == false){
			this.setState( { modalActive: true })
		}else{
			this.setState((prevState)=> {
				return {
					data: prevState.data,
					modalActive: false
				}
			})
		}
	}

	getCurrency(obj){
		let result =[]
		for(let curr in obj){
			result.push(`${obj[curr].name} (${obj[curr].symbol})`)
		}
		return result
	}
	getLanguage(obj){
		let result =[]
		for(let lang in obj){
			result.push(`${obj[lang]}`)
		}
		return result
	}
	getNativeName(obj){
		let result =[]
		for(let nName in obj){
			result.push(`${obj[nName].official}`)
		}
		// console.log(result)
		return result
	}
	render(){
		
		const countries = this.state.data
		const detailCountry = this.state.dataDetails


		 return (
			<>
				<Navbar toggleTheme={this.toggleThemeHandler} theme={this.state.theme}/>
				{/*search box and dropdown*/}
				{this.state.modalActive == false && 
					<section id="search-bar" className="container flex-col md:flex-row flex items-start sm:items-center justify-between w-[90%] mx-auto xl:w-full mt-6">
						<SearchBox submitHandler={this.onSubmitSearcboxHandler} searchInputHandler={this.onInputSearchHandler}/>
						<Dropdown toggleDropdown={this.toggleDropdownHandler} active={this.state.active} getRegion={this.getRegionHandler}/>
					</section>
				}

				{(this.state.modalActive == false) && 
					<div className="container mx-auto my-8">

						{this.state.errorData ? 
							<p className="text-black dark:text-white text-center text-[25px]">Your searched country not found :(</p>
								: 
								<div className="w-[90%] xl:w-full mx-auto gap-[25px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
								{((countries || [])?.length <= 0) ?
									this.displaySkeleton('card',8) : countries.map((country,i) => <Card key={i} url={country.flags.svg} name={country.name.common} population={country.population.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} region={country.region} capital={country.capital} onClickHandler={this.cardOnClickHandler} />)
								}
								</div>
						}

					</div>
				}

				{(this.state.modalActive === true && detailCountry?.length > 0) &&
							 <DetailsContainer 
							 url={
							 	detailCountry[0].flags.svg
							 } 
							 name={
							 	detailCountry[0].name.common
							 } 
							 population={
							 	detailCountry[0].population.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
								} 
								region={
									detailCountry[0].region
								} subRegion={
									detailCountry[0].subregion
								} 
								capital={
									detailCountry[0].capital
								} topDomain={
									detailCountry[0].tld?.length > 1 ? detailCountry[0].tld[0] : detailCountry[0].tld
								} 
								borders={
									detailCountry[0].borders
								} 
								onClickHandler={
									this.toggleModal} curency={this.getCurrency(detailCountry[0].currencies).map((x) => x?.length > 1 ? `${x},` : `${x}` )
								} 
								lang={
									this.getLanguage(detailCountry[0].languages).map((x) => x?.length > 1 ? `${x},` : `${x}` )
								} 
								nativeName={
									this.getNativeName(detailCountry[0].name.nativeName).map((x) => x?.length > 1 ? `${x},` : `${x}` )
								} />
				}


				{(this.state.modalActive === true && detailCountry === undefined) && 
					this.displaySkeleton('details')
				}

				
			</>
		 )
	}
}

