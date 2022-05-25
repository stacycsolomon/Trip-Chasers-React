import apiUrl from '../apiConfig'
import axios from 'axios'

export const createPost = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/posts/',
    data: {
      post: data
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const indexPosts = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/posts/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const updatePost = (data, id, user) => {
  return axios({
    url: apiUrl + '/posts/' + id,
    method: 'patch',
    data: { post: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const showPost = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/posts/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deletePost = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/posts/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const myPosts = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/posts/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
