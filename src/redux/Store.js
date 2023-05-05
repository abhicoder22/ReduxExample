import {createStore, combineReducers} from 'redux';
import CountReducer from './reducers/CountReducer';

const rootReducer = combineReducers({
  count: CountReducer,
});

export const store = createStore(rootReducer);
