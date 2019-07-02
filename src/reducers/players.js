import { FETCH_PLAYERS, SEARCH_PLAYERS } from '../types';

export const playersReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PLAYERS:
            return action.payload;
        case SEARCH_PLAYERS:
            return action.payload;
        default:
            return state;
    }
};