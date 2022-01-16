<template lang="pug">
  h1 {{ this.serviceId }}  
</template>

<script>
  export default {
    asyncData({ params }) {
      const serviceId = params.serviceId
      return { serviceId }
    }
  }
</script>
