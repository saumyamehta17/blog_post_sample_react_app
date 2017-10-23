import React, {Component} from 'react';
import {fetchAPost} from '../actions'
import {connect} from 'react-redux';

class ShowPost extends Component{
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.fetchAPost(id)
	}
	render(){
		const {post} = this.props
		if(!post){
			return <div>Showing Pist</div>
		}else{
		return(
			<div>
			Title: {post.title}
			</div>
			)	
		}
		
	}
}


function mapStateToProps({posts}, ownProps){
  return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchAPost})(ShowPost)
