import axios from 'axios'

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem(process.env.REACT_APP_TOKEN)
    if (token != null && !config.url.match(/sign_in/))
      config.headers.Authorization = `Bearer ${token}`
    return config
  },
  err => Promise.reject(err)
)

axios.defaults.baseURL = process.env.REACT_APP_API_HOST

const JSON_OPTS = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}
const UPLOAD_OPTS = {
  headers: { 'Content-Type': 'multipart/form-data' }
}

const apiGet = (url, opts) =>
  axios.get(url, opts).then(({ data, headers }) => ({ data, headers }))
const apiDelete = (url, opts) =>
  axios.delete(url, opts).then(({ data, headers }) => ({ data, headers }))
const apiPatch = (url, data, opts) =>
  axios.patch(url, data, opts).then(({ data, headers }) => ({ data, headers }))
const apiPost = (url, data, opts) =>
  axios.post(url, data, opts).then(({ data, headers }) => ({ data, headers }))

export { apiGet, apiDelete, apiPatch, apiPost, JSON_OPTS, UPLOAD_OPTS }
