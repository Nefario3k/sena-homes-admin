<template>
  <div>
    <v-dialog max-width="628" v-model="showBox" :width="width">
      <v-card class="cardBox">
        <div class="userImageEmail">
          <span>la</span>
        </div>
        <div class="user_info">
          <h3>Wade Warren</h3>
          <p>wade.warren@site.com</p>
          <p>(319) 555-0115</p>
        </div>

        <v-card-text class="subText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis
          leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse.
          Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id
          tristique mi eget eget tristique orci.
        </v-card-text>

        <div class="user_info">
          <p style="margin-bottom: 15px">21 - Dec - 2022</p>
          <p style="color: var(--primary-color)">The Villa</p>
        </div>

        <div class="btnCengter text-center">
          <v-btn class="Btn"> Reply </v-btn>
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
  padding: 35px;
  border-radius: 8px;
  .subText {
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--secondary-color);
    margin-bottom: 10px;
    line-height: 24px;
    letter-spacing: -0.02em;
    padding: 0;
  }
  .Btn {
    min-height: 3.8rem;
    max-width: 34.4rem;
    width: 100%;
    border-radius: 8px;
    font-weight: 500;
    font-size: 1.6rem;
    border: 1px solid var(--primary-color);
    color: #fff;
    background: var(--primary-color);
    text-transform: initial;
    box-shadow: none !important;
  }
}
.userImageEmail {
  width: 6.4rem;
  height: 6.4rem;
  background-color: var(--primary-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50% !important;
  span {
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.8rem;
  }
}
.user_info {
  margin-bottom: 35px;
  h3 {
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--secondary-color);
  }
  p {
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--bar-sub-text-color);
    margin: 0;
  }
}
</style>