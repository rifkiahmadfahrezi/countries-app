import React from 'react'
import Navbar from './components/navbar/Navbar'

export default class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			theme: localStorage.theme.length == 0 ? 'light' : localStorage.theme,
		}

		document.documentElement.classList.add(this.state.theme)


		this.toggleThemeHandler = this.toggleThemeHandler.bind(this)
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

	render(){
			
		return (
			<>
				<Navbar toggleTheme={this.toggleThemeHandler} theme={this.state.theme}/>
			</>
		)
	}
}