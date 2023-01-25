<template>
  <div>
    <v-dialog max-width="708" v-model="showBox" :width="width">
      <v-card class="cardBox">
        <v-card-title class="cardTitle">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9684 3.67969C15.1683 3.67969 12.431 4.51003 10.1027 6.06572C7.77449 7.62141 5.95984 9.83257 4.88826 12.4196C3.81668 15.0066 3.53631 17.8533 4.08259 20.5996C4.62888 23.346 5.97729 25.8687 7.9573 27.8487C9.93732 29.8287 12.46 31.1771 15.2064 31.7234C17.9527 32.2697 20.7994 31.9893 23.3864 30.9178C25.9735 29.8462 28.1846 28.0315 29.7403 25.7033C31.296 23.375 32.1263 20.6377 32.1263 17.8376C32.1223 14.0839 30.6293 10.4852 27.9751 7.83092C25.3209 5.17668 21.7221 3.68375 17.9684 3.67969V3.67969ZM17.9684 29.6358C15.635 29.6358 13.3539 28.9439 11.4137 27.6475C9.47348 26.3511 7.96127 24.5084 7.06829 22.3526C6.17531 20.1967 5.94166 17.8245 6.3969 15.5359C6.85214 13.2472 7.97581 11.145 9.62583 9.49496C11.2758 7.84495 13.3781 6.72127 15.6667 6.26604C17.9554 5.8108 20.3276 6.04444 22.4834 6.93742C24.6393 7.83041 26.4819 9.34262 27.7783 11.2828C29.0747 13.223 29.7667 15.5041 29.7667 17.8376C29.7633 20.9656 28.5191 23.9646 26.3073 26.1764C24.0954 28.3883 21.0965 29.6324 17.9684 29.6358V29.6358Z"
              fill="#BF9001"
            />
            <path
              d="M17.9685 15.4766H16.7887C16.4758 15.4766 16.1757 15.6009 15.9544 15.8221C15.7332 16.0434 15.6089 16.3435 15.6089 16.6564C15.6089 16.9693 15.7332 17.2694 15.9544 17.4906C16.1757 17.7119 16.4758 17.8362 16.7887 17.8362H17.9685V24.9152C17.9685 25.2281 18.0928 25.5282 18.3141 25.7494C18.5354 25.9707 18.8354 26.095 19.1484 26.095C19.4613 26.095 19.7614 25.9707 19.9826 25.7494C20.2039 25.5282 20.3282 25.2281 20.3282 24.9152V17.8362C20.3282 17.2104 20.0796 16.6102 19.6371 16.1677C19.1945 15.7252 18.5943 15.4766 17.9685 15.4766Z"
              fill="#BF9001"
            />
            <path
              d="M17.9685 13.1137C18.9459 13.1137 19.7382 12.3214 19.7382 11.344C19.7382 10.3666 18.9459 9.57422 17.9685 9.57422C16.9911 9.57422 16.1987 10.3666 16.1987 11.344C16.1987 12.3214 16.9911 13.1137 17.9685 13.1137Z"
              fill="#BF9001"
            />
          </svg>

          <header>Tips</header>
        </v-card-title>
        <div class="list_items">
          <ul>
            <li>File must not more than 15mb</li>
            <li>At least 1 image is required for a valid submission</li>
            <li>Make sure you have good resolution</li>
            <li>Minimum size is 500x500px</li>
            <li>Images might take longer to be processed</li>
          </ul>
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
  padding: 36.5px 33.9px;
  border-radius: 8px;
  .cardTitle {
    margin-bottom: 11px;
    border-radius: 0 !important;
    gap: 11px;
    align-items: center;
    padding: 0;
    header {
      font-weight: 600;
      font-size: 2.4rem;
      color: var(--primary-color);
      margin-bottom: -4px;
    }
  }
  .list_items {
    padding-left: 30px;
    ul {
      li {
        font-weight: 400;
        font-size: 2rem;
        color: var(--text05-color);
      }
    }
  }
}
</style>
