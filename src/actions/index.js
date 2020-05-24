import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

const BASE_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=123";

export function fetchPosts() {
  const response = axios.get(`${BASE_URL}/posts${API_KEY}`);
  return { type: "FETCH_POSTS", payload: response };
}

export function createPost(props) {
  console.log("hello", props);
  const response = axios.post(`${BASE_URL}/posts${API_KEY}`, props);
  return { type: "CREATE_POST", payload: response };
}
