<template>
  <v-app color="white">
    <NavigationPanel ref="panel" />
    <NavigationBar @showNav="showNav" />
    <v-main app>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: "/scripts/jquery-3.3.1.min.js",
        type: "text/javascript",
        body: true,
      },
    ],
  },
  methods: {
    showNav() {
      this.$refs.panel.showPanel();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>