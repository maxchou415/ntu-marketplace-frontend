module.exports = ({ api, resource }) => {
  return {
    loginByGoogle ({ idToken }) {
      return api.post(`${resource}/google`, {
        idToken
      })
    },
    getUserData () {
      return api.get(`${resource}/me`)
    }
  }
}
