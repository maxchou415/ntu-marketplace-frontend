import { ACTIONS as AUTH_ACTIONS } from '@/constants/vuex/auth'

export const actions = {
  async nuxtClientInit ({ dispatch }, context) {
    await dispatch(`auth/${AUTH_ACTIONS.CHECK_LOGIN_STATUS}`)
  }
}
