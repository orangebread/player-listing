import {  SEARCH_PLAYERS } from '../types';

export const playersReducer = (state = [], action) => {
    switch (action.type) {
        case SEARCH_PLAYERS:
            return action.payload;
        default:
            return state;
    }
};