import { combineReducers } from 'redux';
import PostReducer from './posts_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    posts: PostReducer,
    form: formReducer
});

export default rootReducer;
