<template>
  <div>
    <v-dialog max-width="708" v-model="showBox" :width="width">
      <v-card class="cardBox">
        <v-card-title class="cardTitle">
          <header>Property Video</header>
        </v-card-title>

        <v-card-text class="subText">
          Please enter a video link from YouTube, Vimeo, or a similar platform.
        </v-card-text>

        <div class="inputArea">
          <input
            type="text"
            name=""
            value=""
            placeholder="Enter youtube or vimeo link"
          />
        </div>
        <div class="btnCengter text-center">
          <v-btn class="Btn"> Upload </v-btn>
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
  padding: 52px 70px 51px;
  border-radius: 8px;
  .cardTitle {
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    border-radius: 0 !important;
    padding: 0;
    header {
      font-weight: 700;
      font-size: 2rem;
      color: var(--bar-text-color);
    }
  }
  .subText {
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--text04-color);
    margin-bottom: 30px;
    line-height: 28px;
    letter-spacing: -0.02em;
    padding: 0;
  }
  .inputArea {
    input {
      min-height: 4.6rem;
      border: 1px solid var(--border03-color);
      border-radius: 8px;
      &:focus {
        border-color: var(--primary-color);
      }
      &::placeholder {
        font-size: 1.3rem;
        color: var(--placeholer-color);
        font-weight: 400;
      }
    }
  }
  .Btn {
    min-height: 4.5rem;
    max-width: 21.4rem;
    width: 100%;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.6rem;
    border: 1px solid var(--primary-color);
    color: #fff;
    background: var(--primary-color);
    text-transform: initial;
    box-shadow: none !important;
    margin-top: 30px;
  }
}
</style>