import pokemon from '../api/pokemon';
import { FETCH_POKEMONS } from '../types';

export const fetchPokemons = () => async (dispatch) => {
	const response = await pokemon.get('/pokemon');
	dispatch({ type: FETCH_POKEMONS, payload: response.data });
};