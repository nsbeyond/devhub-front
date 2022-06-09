import axios from 'axios'
import _ from 'lodash'

export const getAllItem = async () => {
  return axios({
    url: `${process.env.API_URL}/market/getAllItem`,
    method: 'get',
    headers: {
      Accept: 'application/json',
    }
  })
    .then((res) => {
      return _.get(res, ['data'])
    })
    .catch((err) => {
      return { status: false }
    })
}

export const getViewItem = async (postID) => {
  console.log({postID})
  return axios({
    url: `${process.env.API_URL}/market/viewItem?postID=${postID}`,
    method: 'get',
    headers: {
      Accept: 'application/json',
    }
  })
    .then((res) => {
      return _.get(res, ['data'])
    })
    .catch((err) => {
      return { status: false }
    })
}

export const getCommentLike = async (commentID) => {
  console.log({commentID})
  return axios({
    url: `${process.env.API_URL}/market/getCommentLike?commentID=${commentID}`,
    method: 'get',
    headers: {
      Accept: 'application/json',
    }
  })
    .then((res) => {
      return _.get(res, ['data'])
    })
    .catch((err) => {
      return { status: false }
    })
}