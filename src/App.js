// app/application.js
import React from 'react';

import Header from "./components/Header";

import SearchBar from './components/SearchBar'; // ya lo crearemos :D
import Queries from './components/Queries'; // tambien ya lo crearemos :P

class App extends React.Component {
	state = {
		searchText: '',// solo habrá resultados cuando el usuario pulse el botón
		query: "GET_CHARACTERS"
	};

	handleInputChange = event => {
		/*
		 * Para saber lo que el usuario quiere buscar, necesitamos
		 * escuchar los cambios del input. Así cuando oprima el botón
		 * de búsqueda, sabremos cuales GIFs espera encontrar.
		 * "event.target.value" es el valor del input
		*/
		this.setState({ searchText: event.target.value });
	};

	handleButtonClick = () => {
		// El componente que busca y muestra los GIFs solo se mostrara
		// cuando showResults sea true.
		//this.setState({ showResults: true });
	}

	render() {
		const { searchText, query } = this.state;

		return (
			<React.Fragment>
				<Header query={query} 
				characters={() => this.setState({ query: 'GET_CHARACTERS' })}
				locations={() => this.setState({ query: 'GET_LOCATIONS' })}
				episodes={() => this.setState({ query: 'GET_EPISODES' })}
				/>
				<SearchBar
					searchText={searchText}
					handleChange={this.handleInputChange}
					handleClick={this.handleButtonClick}
				/>

				<Queries search={searchText} query={query} />


			</React.Fragment>
		);
	}
}

export default App;