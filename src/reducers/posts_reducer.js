import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash'
export default function process_posts(state = {}, action) {
    switch(action.type){
    	case FETCH_POST:
    	    console.log('showing a post')
    	    return { ...state, [action.payload.data.id]: action.payload.data }
        case FETCH_POSTS:
            console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}