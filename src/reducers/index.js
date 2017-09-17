import { combineReducers } from 'redux';
import PostReducer from './posts_reducer';

const rootReducer = combineReducers({
    posts: PostReducer
});

export default rootReducer;
