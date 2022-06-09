import axios from 'axios'
import _ from 'lodash'

export const userLogin = async (formData) => {
  const data = new FormData()
  _.forEach(formData, (value, key) => {
    if (!_.isEmpty(value)) {
      data.append(key, value)
    }
  })
  return axios({
    url: `${process.env.API_URL}/auth/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
    data: data,
  })
    .then((res) => {
      // console.log({ res })
      return _.get(res, ['data'])
    })
    .catch((err) => {
      // console.log({ err })
      return { status: false }
    })
}
