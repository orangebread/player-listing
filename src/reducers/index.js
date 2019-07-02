import { combineReducers } from 'redux';

import { playersReducer } from './players';
import { paginationReducer } from './pagination';

export default combineReducers({
    players: playersReducer,
    pagination: paginationReducer
});