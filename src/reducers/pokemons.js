import { FETCH_POKEMONS } from '../types';

export const pokemonsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return [ ...state, action.payload ];
        default:
            return state;
    }
};