import axios from 'axios';


export const getAuthToken = () => {
  return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
  if (token !== null) {
    window.localStorage.setItem("auth_token", token);
  } else {
    window.localStorage.removeItem("auth_token");
  }
};

axios.defaults.baseURL = 'http://localhost:8080';


export const request = (method, url, data) => {
  let ContentType = 'application/json';
  let headers = {};
  if (getAuthToken() !== null && getAuthToken() !== "null") {
    headers = { 'Authorization': `Bearer ${getAuthToken()}`, "Content-Type": ContentType };
  }
  return axios({
    method: method,
    url: url,
    headers: headers,
    data: data
  });
};

export const requestExcel = (method, url, data) => {
  let ContentType = 'application/octet-stream';
  let headers = {};
  if (getAuthToken() !== null && getAuthToken() !== "null") {
    headers = { 'Authorization': `Bearer ${getAuthToken()}`, "Content-Type": ContentType };
  }
  return axios({
    method: method,
    url: url,
    headers: headers,
    data: data
  });
};