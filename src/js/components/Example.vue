<template>
  <section>
    <div class="container">
      <p>
      <!--because the base is consistent, you can use multiple icons on the same line and they're all in order-->
      <icon-base icon-name="download"><icon-download /></icon-base>
      <p>{{ message }}</p>
    </div>
  </section>
</template>

<script>
import IconBase from './icons/IconBase.vue'
import IconDownload from './icons/IconDownload.vue'

export default {
  data() {
    return {
      message: 'Download Icon'
    }
  },
  components: {
    IconBase,
    IconDownload
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
img {
  max-width: 200px;
}
</style>
