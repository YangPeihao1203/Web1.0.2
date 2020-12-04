<template>
  <v-app class="view">
    <div class="mask"></div>
    <nuxt />
  </v-app>
</template>

<style scoped>
.view {
  width: 100%;
  max-width: 420px;
  min-height: 100vh;
  margin: 0 auto;
  box-shadow: 0 0 128px rgba(0, 0, 0, 0.2);
  overflow: hidden auto;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
}
</style>

<style>
.font-12 {
  font-size: 12px !important;
}
.font-14 {
  font-size: 14px !important;
}
.font-16 {
  font-size: 16px !important;
}
.font-18 {
  font-size: 18px !important;
}
.font-20 {
  font-size: 20px !important;
}
.font-22 {
  font-size: 22px !important;
}
.font-24 {
  font-size: 24px !important;
}
</style>

<script>
export default {
  created(){
    this.$vuetify.theme.themes.light.primary=
      this.$store.state.localStorage.settings.themeColor||
      this.$store.state.localStorage.default.settings.themeColor
  },
  mounted(){
    // 后来了解到meta就是头部标签设置的
    this.$meta().refresh()
    document.documentElement.className=
    'font-'+
    (this.$store.state.localStorage.settings.fontSize||
    this.$store.state.localStorage.default.settings.fontSize)

  }
}
</script>
