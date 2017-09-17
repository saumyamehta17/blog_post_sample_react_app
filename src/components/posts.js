import React, {Component} from 'react';
import {fetchPost} from "../actions";
import {connect} from 'react-redux';
import _ from 'lodash';

class PostList extends Component{
    componentDidMount(){
        this.props.fetchPost()
    }

    displayPost(){
        console.log('needed here')
        console.log(this.props.posts);
        return _.map(this.props.posts, (post) => {
            return <li key={post.id}>{post.title}</li>
        })
    }

    render(){
        // console.log(this.props.posts);
        return <div>
                <h3>Posts</h3>
                <ul className="group-list">
                    {this.displayPost()}
                </ul>
               </div>
    }
}

function mapPropsToState(state) {
    return state.posts
}


export default connect(mapPropsToState, {fetchPost})(PostList)
