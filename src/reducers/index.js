import { combineReducers } from 'redux';
import {starReducer} from './starReducers'

export default combineReducers({
  stars: starReducer
});