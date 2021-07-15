import {combineReducers, createStore} from 'redux';
import toggleFavorite from './Reducers/favoriteReducer';
import manageHistoricFilms from './Reducers/historicReducer';
import manageAvatar from './Reducers/avatarReducer';

export default createStore(combineReducers({
    toggleFavorite,
    manageHistoricFilms,
    manageAvatar
}))
