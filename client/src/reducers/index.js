import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
const reducers = combineReducers({ posts, auth });
export default reducers;
