import React, {Component} from 'react';
import {fetchPost} from "../actions";
import {connect} from 'react-redux';
import _ from 'lodash';

class PostList extends Component{
    constructor(props){
        super(props)
        this.displayPost = this.displayPost.bind(this)
    }
    componentDidMount(){
        this.props.fetchPost()
    }

    displayPost(){
        console.log('needed here')
        console.log(this.props.posts);
        return _.map(this.props.posts, (post) => {
            return <li key={post.id} className="list-group-item">{post.title}</li>
        })
    }

    render(){
        return <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.displayPost()}
                </ul>
               </div>
    }
}

function mapPropsToState(state) {
    return {posts: state.posts}
}


export default connect(mapPropsToState, {fetchPost})(PostList)
