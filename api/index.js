import axios from 'axios'

function axiosInstance () {
  axios.defaults.baseURL = `${process.env.apiOrigin}/${process.env.apiVersion}`
  return axios
}

export default {
  auth: require('./auth')({
    api: axiosInstance(),
    resource: '/auth'
  }),
  services: require('./services')({
    api: axiosInstance(),
    resource: '/services'
  })
}

// Axios
axios.interceptors.response.use(respone => {
  return respone.data
}, error => {
  if (error.response.status === 401) {
    window.localStorage.removeItem('accessToken')
    window.location.replace('/login?error=CREDENTIAL_FAILURE')
    return
  }
  return Promise.reject(error)
})
