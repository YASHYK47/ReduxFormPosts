import axios from "axios";

export const FETCH_POST = "FETCH_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";

const BASE_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=123";

export function createPost(props) {
  const response = axios.post(`${BASE_URL}/posts${API_KEY}`, props);
  return { type: CREATE_POST, payload: response };
}

export function fetchPosts() {
  const response = axios.get(`${BASE_URL}/posts${API_KEY}`);
  return { type: FETCH_POSTS, payload: response };
}

export function fetchPost(post_id) {
  const response = axios.get(`${BASE_URL}/posts/${post_id}${API_KEY}`);
  return { type: FETCH_POST, payload: response };
}

export function deletePost(post_id) {
  const response = axios.delete(`${BASE_URL}/posts/${post_id}${API_KEY}`);
  return { type: DELETE_POST, payload: response };
}
