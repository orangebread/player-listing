import React from 'react';
import { Container } from '@material-ui/core';

import Search from './Search';
import PokemonList from './PokemonList';

const App = () => {
	return (
		<Container>
            <Search />
			<PokemonList />
		</Container>
	);
};

export default App;