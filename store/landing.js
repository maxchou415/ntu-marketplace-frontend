import { STATES, MUTATIONS, ACTIONS } from '@/constants/vuex/landing'

import api from '@/api'

export const state = () => ({
  [STATES.SERVICE_LIST]: []
})

export const actions = {
  async [ACTIONS.FETCH_SERVICE_LIST] ({ commit }) {
    let services
    // eslint-disable-next-line
    try {
      services = await api.services.getServices()
    } catch (error) {
      throw error
    }
    commit(MUTATIONS.SET_SERVICE_LIST, { token: services.data })
  }
}

export const mutations = {
  [MUTATIONS.SET_SERVICE_LIST] (state, { serviceList }) {
    state[STATES.SERVICE_LIST] = serviceList
  }
}
