<template>
  <div>
    <v-dialog max-width="384" v-model="showBox" :width="width">
      <v-card class="cardBox">
        <div class="svgLogo">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#D1FAE5" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.0486 18.3515C32.5173 18.8201 32.5173 19.5799 32.0486 20.0485L22.4486 29.6485C21.98 30.1172 21.2202 30.1172 20.7516 29.6485L15.9516 24.8485C15.4829 24.3799 15.4829 23.6201 15.9516 23.1515C16.4202 22.6828 17.18 22.6828 17.6486 23.1515L21.6001 27.1029L30.3516 18.3515C30.8202 17.8828 31.58 17.8828 32.0486 18.3515Z"
              fill="#10B981"
            />
          </svg>
        </div>
        <v-card-title class="cardTitle">
          <header>New admin added</header>
        </v-card-title>

        <v-card-text class="subText">
          You are now able to edit this admin's information, enable or disable
          their access, and change their role.
        </v-card-text>

        <div class="text-center">
          <v-btn class="Btn"> Ok, Got it </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBox: false,
      width: "100%",
    };
  },
  methods: {
    showDialogue() {
      this.showBox = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.cardBox {
  background: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
  .svgLogo {
    margin-bottom: 20px;
  }
  .cardTitle {
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    border-radius: 0 !important;
    padding: 0;
    header {
      font-weight: 500;
      font-size: 1.8rem;
      color: var(--secondary-color);
    }
  }
  .subText {
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--bar-sub-text-color);
    margin-bottom: 20px;
    line-height: 20px;
    letter-spacing: -0.02em;
    padding: 0;
  }
  .Btn {
    min-height: 3.8rem;
    max-width: 100%;
    width: 100%;
    border-radius: 8px;
    font-weight: 500;
    font-size: 1.4rem;
    border: 1px solid var(--primary-color);
    color: #fff;
    background: var(--primary-color);
    text-transform: initial;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    &.delete {
      background: transparent;
      color: var(--nav-color);
      border: 1px solid var(--border-color);
    }
  }
}
</style>