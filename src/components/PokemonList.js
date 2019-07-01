import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { fetchPokemons } from '../actions/pokemons';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    setPokemons(fetchPokemons);
    useEffect(() => {
        fetchPokemons();
    }, pokemons);
    return (
        <ul>
            <li>Test</li>
        </ul>
    )
}

const mapStateToProps = state => {
	return {
		pokemons: state.pokemons
	};
}

export default connect(mapStateToProps, { fetchPokemons })(PokemonList);