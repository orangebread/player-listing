import players from '../api/players';
import { FETCH_PLAYERS, SEARCH_PLAYERS, FETCH_PAGINATION } from '../types';

export const fetchPlayers = (page = 1) => async dispatch => {
	const response = await players.get(`/people?page=${page}`);
	dispatch({ type: FETCH_PLAYERS, payload: {isSearch: false, data: response.data.results }});
};

export const fetchPlayersAndPagination = page => async dispatch => {
	await dispatch(fetchPlayers(page));

	await dispatch(fetchPagination(page));
}

export const fetchPagination = (page = 1) => async dispatch => {
	const response = await players.get(`/people?page=${page}`);
	dispatch({ type: FETCH_PAGINATION, payload: {currentPage: page, count: response.data.count }});
};

export const searchPlayers = query => async dispatch => {
	const response = await players.get(`/people?search=${query}`);
	dispatch({ type: SEARCH_PLAYERS, payload: { isSearch: true, data: response.data.results }});
}