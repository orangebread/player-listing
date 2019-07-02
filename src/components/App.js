import React from 'react';

import Search from './Search';
import PlayersList from './PlayersList';
import Pagination from './Pagination';

const App = () => {
	return (
		<div className="ui container">
			<Search />
            <Pagination />
			<PlayersList />
			<Pagination />
		</div>
	);
};

export default App;