import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Providers from './providers';


ReactDOM.render(
	<Providers>
		<App />
	</Providers>,
	document.querySelector('#root'));