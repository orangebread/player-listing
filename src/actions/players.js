import players from '../api/players';
import { SEARCH_PLAYERS, FETCH_SEARCH_PAGINATION } from '../types';

export const fetchPlayersAndPagination = (query, page) => async dispatch => {
	await dispatch(searchPlayers(query, page));

	await dispatch(fetchSearchPagination(query, page));
}

export const fetchSearchPagination = (query = '', page = 1) => async dispatch => {
	console.log('fetchsearchpag', query + ' ' + page);
	const response = await players.get(`/people?search=${query}&page=${page}`);
	dispatch({ type: FETCH_SEARCH_PAGINATION, query, payload: {currentPage: page, count: response.data.count }});
};

export const searchPlayers = (query = '', page = 1) => async dispatch => {
	const response = await players.get(`/people?search=${query}&page=${page}`);
	dispatch({ type: SEARCH_PLAYERS, payload: { isSearch: true, query, resultCount: response.data.count, data: response.data.results }});
}