import { FETCH_SEARCH_PAGINATION } from '../types';

export const paginationReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_SEARCH_PAGINATION:
                return action.payload;
        default:
            return state;
    }
};