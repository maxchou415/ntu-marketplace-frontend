<template lang="pug">
  .my-6.relative.flex.items-center.justify-between
    .flex.items-center
      nuxt-link.inline-flex.items-center(
        to='/'
      )
        .inline-flex.items-center
          .text-4xl 🧰
          div
            p.ml-3.text-2xl.text-gray-600.tracking-wide.font-medium Marketplace
            p.text-right.text-xs.text-gray-400.tracking-wide Powered by
              span.tracking-wide.ml-1.text-indigo-500 MyNTU

      .ml-5.text-xl.font-urbanist.text-gray-500.tracking-wide(
        v-if="isLoggedIn"
      ) Creator ⚡️

    ul.flex.items-center.space-x-8(class='lg:flex')
      li(
        v-if="!isLoggedIn"
      )
        nuxt-link.py-2.px-4.bg-indigo-500.text-white.w-full.transition.ease-in.duration-200.text-center.text-base.shadow-md.rounded-lg(
          to="/login"
          class='hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
        )
          | 登入
      li(
        v-if="isLoggedIn"
      )
        span.tracking-wide.text-gray-700 
          | 嗨，{{user.name}}
  
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { STATES, MUTATIONS } from '@/constants/vuex/auth'

export default {
  computed: {
    ...mapState('auth', {
      isLoggedIn: STATES.IS_LOGGED_IN,
      user: STATES.USER
    })
  },
  methods: {
    ...mapMutations('auth', {
      handleLogout: MUTATIONS.LOGOUT
    })
  }
}
</script>
