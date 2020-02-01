import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { movieReducer } from '../reducers/movie'

const rootReducer = combineReducers({
    movie: movieReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));