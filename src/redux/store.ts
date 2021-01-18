import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { kittenList, setFilter, filterInput } from './reducers/HomeScreen.reducer';

const rootReducer = combineReducers({
    kittenList: kittenList, 
    filterInputModal: filterInput, 
    filter: setFilter,
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);