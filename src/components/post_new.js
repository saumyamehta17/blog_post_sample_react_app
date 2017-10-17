import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions'

class NewPost extends Component{
	renderField(field){
		let {meta: {touched, error}} = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		return(
			<div className={className}>
				<label>{field.label}</label>
				<input type='text' className='form-control'
                       {...field.input}
				/>
				<div className="text-help">
                   {touched ? error : ''}
				</div>
			</div>
		)
	}

    onSubmit(values){
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});
		// console.log(values)
	}

	render(){
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					name="title"
					label="Title"
					component={this.renderField}
				/>
				<Field
					name="categories"
					label="Categories"
					component={this.renderField}
				/>
				<Field
					name="content"
					label="Content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary" style={{marginRight: '10'}}>Save</button>
				<Link className="btn btn-danger" to="/">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title){
		errors.title = "Please Enter Title"
	}
	if (!values.categories){
		errors.categories = "Please Enter Category"
	}
	if (!values.content){
		errors.content = "Please Enter Content"
	}
	return errors;
}
export default reduxForm({
	validate,
	form: 'PostNewForm'
})(
 connect(null, {createPost})(NewPost)
);