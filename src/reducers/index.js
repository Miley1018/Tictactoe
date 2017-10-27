import { combineReducers } from 'redux';
import ChangedReducer from './reducer_changeBoard';

const rootReducer = combineReducers({
  changed:ChangedReducer
});

export default rootReducer;
