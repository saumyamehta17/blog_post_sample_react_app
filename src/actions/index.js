import React from 'react'
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';
export const FETCH_POST = 'fetch_post';

const BASE_URL = 'http://reduxblog.herokuapp.com';
const API_KEY = '?key=saumyaaa';

export function fetchPost() {
    const request = axios.get(`${BASE_URL}/api/posts${API_KEY}`);
    return{
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callbackUrl) {
    const request = axios.post(`${BASE_URL}/api/posts${API_KEY}`, values)
                         .then(() => { callbackUrl() } );
    return{
        type: CREATE_POSTS,
        payload: request
    }
}

export function fetchAPost(id) {
    const request = axios.get(`${BASE_URL}/api/posts/${id}${API_KEY}`)
    return{
        type: FETCH_POST,
        payload: request
    }
}