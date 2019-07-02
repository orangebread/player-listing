import { FETCH_PAGINATION } from '../types';

export const paginationReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PAGINATION:
            return action.payload;
        default:
            return state;
    }
};