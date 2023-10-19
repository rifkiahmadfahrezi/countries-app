import React from 'react'
import Navbar from './components/navbar/Navbar'
import SearchBox from './components/searchBox/SearchBox'
import Dropdown from './components/dropdown/Dropdown'
import Card from './components/card/Card'
import CardSkeleton from './components/card/CardSkeleton'


export default class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			theme: localStorage.theme.length == 0 ? 'light' : localStorage.theme,
			active: false, // for dropdown
			region: null, // for sort country by region
			keyword: '', // for searchbox
			data: [],
		}



		// add theme class to root element
		document.documentElement.classList.add(this.state.theme)

		this.getAllCountry(`https://restcountries.com/v3.1/all`)


		this.toggleThemeHandler = this.toggleThemeHandler.bind(this)
		this.toggleDropdownHandler = this.toggleDropdownHandler.bind(this)
		this.getRegionHandler = this.getRegionHandler.bind(this)
		this.onSubmitSearcboxHandler = this.onSubmitSearcboxHandler.bind(this)
		this.onInputSearchHandler = this.onInputSearchHandler.bind(this)
	}

	getAllCountry(url){

		fetch(url)
		.then(response => response.json())
		.then(response => response)
		.then(response =>{
			this.setState({data: response})
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
		this.setState({region: event.target.dataset.region})

		this.getAllCountry(`https://restcountries.com/v3.1/region/${event.target.dataset.region}`)

	}

	onSubmitSearcboxHandler(){
		event.preventDefault()

		this.getAllCountry(`https://restcountries.com/v3.1/name/${this.state.keyword}`)

	}

	onInputSearchHandler(){
		this.setState({keyword: event.target.value.toLowerCase()})
	}

	render(){
		
		const countries = this.state.data

		return (
			<>
				<Navbar toggleTheme={this.toggleThemeHandler} theme={this.state.theme}/>
				{/*search box and dropdown*/}
				<section id="search-bar" className="container flex-col md:flex-row flex items-center justify-between w-[90%] mx-5 md:mx-auto md:w-full mt-6">
					<SearchBox submitHandler={this.onSubmitSearcboxHandler} searchInputHandler={this.onInputSearchHandler}/>
					<Dropdown toggleDropdown={this.toggleDropdownHandler} active={this.state.active} getRegion={this.getRegionHandler}/>
				</section>

				<section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-5 md:mx-auto w-[90%] md:w-full gap-[20px] mt-5">
					{this.state.data.length == 0 ? 
						<p className="text-center text-black dark:text-white w-full">There is no data to display</p>
						: 
						countries.map((country, i) => {
							return <Card key={i} url={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} region={country.region}/> 
						})
					}
				</section>


			</>
		)
	}
}