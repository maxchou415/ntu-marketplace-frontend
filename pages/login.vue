<template lang="pug">
  div
    .w-full.max-w-md.mt-10.py-6.px-8.mx-auto.bg-white.rounded-lg.shadow-lg.border(class='dark:bg-gray-800')
      h1.text-3xl.font-sans-zh.text-center.text-gray-800(class='dark:text-white') 登入以繼續
      .flex.items-center.mt-10
        h2.text-lg.text-gray-700
          | ✅
          span.ml-3 本服務僅限國立臺灣大學教職員生使用。
      .flex.items-center.mt-6
        button.flex.items-center.justify-center.w-full.py-2.px-4.bg-indigo-500.text-white.transition.ease-in.duration-200.text-center.shadow-md.rounded-lg(type='button' class='hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2')
          svg.w-6.h-6.mx-2.fill-current(viewbox='0 0 24 24')
            path(d='M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z')
          span.text-lg.font-normal.mx-2(
            class='sm:inline'
            @click="handleClickSignIn"
          ) 使用 Google 帳號登入
    .w-full.max-w-md.mt-10.py-6.px-8.mx-auto.bg-red-500.text-white.rounded-lg.shadow-lg.border(
      class='dark:bg-gray-800'
      v-if="errorMessage"
    )
       | {{errorMessage}}
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { STATES, ACTIONS } from '@/constants/vuex/auth'
import * as AUTH_MESSAGE from '@/constants/message'

export default {
  data () {
    return {
      errorMessage: ''
    }
  },
  computed: {
    ...mapState('auth', [
      STATES.IS_LOGGED_IN
    ])
  },
  mounted () {
    this.checkIsCredentialFailed()
    this.checkLoginStatus()
  },
  methods: {
    ...mapActions('auth', {
      sendGoogleIdToken: ACTIONS.LOGIN_BY_GOOGLE
    }),
    checkIsCredentialFailed () {
      if (this.$route.query.error === 'CREDENTIAL_FAILURE') {
        this.errorMessage = AUTH_MESSAGE.AUTH_FAILED
      }
    },
    checkLoginStatus () {
      if(this[STATES.IS_LOGGED_IN]) {
        this.$router.push('/panel')
      }
    },
    async handleClickSignIn() {
      const googleOauth = this.$gAuth
      if (googleOauth.isInit) {
        let loginUser
        try {
          loginUser = await googleOauth.signIn()
        } catch (error) {
          if (error.error === 'popup_closed_by_user') {
            this.errorMessage = AUTH_MESSAGE.WINDOW_CLOSE
            return
          }
          this.errorMessage = AUTH_MESSAGE.AUTH_FAILED
          return
        }
        if(!googleOauth.isAuthorized) {
          this.errorMessage = AUTH_MESSAGE.AUTH_FAILED
          return
        }
        const idToken = loginUser.getAuthResponse().id_token
        try {
          await this.sendGoogleIdToken({ idToken })
        } catch (error) {
          this.errorMessage = AUTH_MESSAGE.AUTH_FAILED
          return
        }
        const email = loginUser.getBasicProfile().getEmail()
        if (!email.endsWith('ntu.edu.tw')) {
          this.errorMessage = AUTH_MESSAGE.IDENTITY_CHECK_FAILED_TEXT
        }
      }
    }
  }
}
</script>
