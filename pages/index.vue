<template lang="pug">
  div
    hero
    services
    customized-footer
</template>

<script>
import hero from '@/components/Index/hero'
import services from '@/components/Index/services'
import footer from '@/components/Index/footer'

export default {
  components: {
    hero,
    services,
    customizedFooter: footer
  }
}
</script>
