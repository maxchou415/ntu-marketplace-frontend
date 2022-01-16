module.exports = ({ api, resource }) => {
  return {
    getServices () {
      return api.get(`${resource}/`)
    }
  }
}
