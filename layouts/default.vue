<template lang="pug">
  .max-w-screen-2xl.px-4.mx-auto(class='md:px-8')
    navbar
    nuxt
</template>

<script>
import navbar from '@/components/navbar'

export default {
  components: {
    navbar
  }
}
</script>