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
            <rect width="48" height="48" rx="24" fill="#FEE2E2" />
            <path
              d="M31 19L30.1327 31.1425C30.0579 32.1891 29.187 33 28.1378 33H19.8622C18.813 33 17.9421 32.1891 17.8673 31.1425L17 19M22 23V29M26 23V29M27 19V16C27 15.4477 26.5523 15 26 15H22C21.4477 15 21 15.4477 21 16V19M16 19H32"
              stroke="#EF4444"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <v-card-title class="cardTitle">
          <header>Delete admin</header>
        </v-card-title>

        <v-card-text class="subText">
          Confirm deletion of administrator. This will delete all related
          information and cannot be undone. Are you sure you want to proceed?
        </v-card-text>

        <div class="text-center">
          <v-btn class="Btn"> Cancel </v-btn>
        </div>
        <div class="text-center">
          <v-btn class="Btn delete"> Yes, Delete </v-btn>
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
    margin-bottom: 20px;
    &.delete {
      background: transparent;
      color: var(--nav-color);
      border: 1px solid var(--border-color);
    }
  }
}
</style>