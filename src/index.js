import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import PostList from './components/posts'
import NewPost from './components/post_new'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
          	<Switch>
	          <Route path="/posts/new" component={NewPost}></Route>
              <Route path="/" component={PostList}></Route>
            </Switch>  
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));