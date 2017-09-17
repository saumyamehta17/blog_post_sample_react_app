import React from 'react'
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const BASE_URL = 'http://reduxblog.herokuapp.com';
const API_KEY = '?key=saumya';

export function fetchPost() {
    const request = axios.get(`${BASE_URL}/api/posts${API_KEY}`);
    return{
        type: FETCH_POSTS,
        payload: request
    }
}