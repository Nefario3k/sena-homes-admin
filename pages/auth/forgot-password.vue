<template>
  <section id="login_section">
    <AuthForgotPassword @showToken="showModal('token')" />
    <AuthPasswordToken
      ref="token"
      @showPasswordReset="showModal('resetPassword')"
    />
    <AuthCreatePassword ref="resetPassword" />
  </section>
</template>

<script>
export default {
  layout: "auth",
  methods: {
    showModal(type) {
      switch (type) {
        case "token":
          this.$refs.token.showDialogue();
          break;
        case "resetPassword":
          this.$refs.resetPassword.showDialogue();
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>