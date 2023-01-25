<template>
  <v-app color="white">
    <Nuxt />
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
};
</script>

<style lang="scss" scoped>
</style>