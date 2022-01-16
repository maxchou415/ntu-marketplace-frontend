import axios from 'axios'

import { STATES, MUTATIONS, ACTIONS } from '@/constants/vuex/auth'

import api from '@/api'

export const state = () => ({
  [STATES.ACCESS_TOKEN]: '',
  [STATES.IS_LOGGED_IN]: false,
  [STATES.USER]: {}
})

export const mutations = {
  [MUTATIONS.SET_LOGIN_STATUS] (state, { token }) {
    axios.defaults.headers.authorization = token
    this.$storage.setLocalStorage('accessToken', token)

    state[STATES.IS_LOGGED_IN] = true
    state[STATES.ACCESS_TOKEN] = token
  },
  [MUTATIONS.LOGOUT] (state) {
    this.$storage.removeLocalStorage('accessToken')
    axios.defaults.headers.authorization = undefined

    state[STATES.IS_LOGGED_IN] = false
    state[STATES.ACCESS_TOKEN] = undefined
    state[STATES.USER] = {}

    this.$router.push('/')
  },
  [MUTATIONS.SET_USER_DATA] (state, { userData }) {
    state[STATES.USER] = userData
  }
}

export const actions = {
  async [ACTIONS.CHECK_LOGIN_STATUS] ({ commit, dispatch }) {
    const token = this.$storage.getLocalStorage('accessToken')
    if (token) {
      commit(MUTATIONS.SET_LOGIN_STATUS, { token })
      await dispatch(ACTIONS.GET_USER_DATA)
    }
  },
  async [ACTIONS.LOGIN_BY_GOOGLE] ({ commit, dispatch }, { idToken }) {
    let login
    // eslint-disable-next-line
    try {
      login = await api.auth.loginByGoogle({ idToken })
    } catch (error) {
      throw error
    }
    commit(MUTATIONS.SET_LOGIN_STATUS, { token: login.data.token })
    await dispatch(ACTIONS.GET_USER_DATA)

    this.$router.push('/panel')
  },
  async [ACTIONS.GET_USER_DATA] ({ commit }) {
    let userData
    // eslint-disable-next-line
    try {
      ({ data: userData } = await api.auth.getUserData())
    } catch (error) {
      throw error
    }
    commit(MUTATIONS.SET_USER_DATA, { userData })
  }
}
