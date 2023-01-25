<template>
  <v-dialog
    v-model="showModal"
    :persistent="persistent"
    origin="center center"
    width="460"
    class="authDialog"
  >
    <v-card class="authCard">
      <div class="modal_content">
        <form class="content_area">
          <v-row class="row_form">
            <div class="col-12 logo">
              <img src="/images/png/logo.png" alt="" />
            </div>
            <div class="col-12" style="padding-top: 0">
              <header>Log in</header>
            </div>
            <div class="col-12" :class="{ activeInput: login.unique_key }">
              <label for="loginEmail">Email address</label>
              <input
                required
                id="loginEmail"
                type="email"
                name=""
                v-model="login.unique_key"
              />
            </div>
            <div
              class="col-12 password_column"
              :class="{ activeInput: login.password }"
            >
              <div class="passwordShowWrapper">
                <label style="margin: 0" for="loginPassword">Password</label>
                <div style="margin: 0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8825 4.88158L19.1465 4.14564C18.9385 3.93765 18.5545 3.96966 18.3145 4.2576L15.7543 6.80157C14.6023 6.30562 13.3384 6.06562 12.0103 6.06562C8.05822 6.08156 4.63444 8.38553 2.98633 11.6977C2.8903 11.9057 2.8903 12.1617 2.98633 12.3376C3.75426 13.9057 4.90633 15.2017 6.34633 16.1776L4.25034 18.3056C4.01034 18.5456 3.97833 18.9296 4.13838 19.1376L4.87432 19.8735C5.08231 20.0815 5.4663 20.0495 5.7063 19.7616L19.7542 5.71369C20.0582 5.47383 20.0902 5.08987 19.8822 4.88185L19.8825 4.88158ZM12.8583 9.71347C12.5863 9.64945 12.2984 9.56949 12.0264 9.56949C10.6663 9.56949 9.57842 10.6575 9.57842 12.0174C9.57842 12.2894 9.64244 12.5774 9.72239 12.8494L8.65028 13.9054C8.33032 13.3455 8.15433 12.7214 8.15433 12.0175C8.15433 9.88948 9.86636 8.17746 11.9943 8.17746C12.6984 8.17746 13.3224 8.35344 13.8823 8.6734L12.8583 9.71347Z"
                      fill="#666666"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M21.0344 11.6979C20.4745 10.5779 19.7384 9.56994 18.8265 8.75391L15.8504 11.6979V12.0179C15.8504 14.1459 14.1384 15.8579 12.0104 15.8579H11.6905L9.80249 17.7459C10.5065 17.8898 11.2425 17.9859 11.9625 17.9859C15.9146 17.9859 19.3384 15.6819 20.9865 12.3537C21.1305 12.1297 21.1305 11.9058 21.0345 11.6977L21.0344 11.6979Z"
                      fill="#666666"
                      fill-opacity="0.8"
                    />
                  </svg>
                  <span>Hide</span>
                </div>
              </div>
              <input
                required
                id="loginPassword"
                type="password"
                name=""
                v-model="login.password"
              />
              <span class="errorText" v-if="errors.email">{{
                errors.email[0]
              }}</span>
            </div>
            <div class="col-12 fPassword" style="padding-top: 0">
              <nuxt-link to="/auth/forgot-password">
                <p>Forgot Password</p>
              </nuxt-link>
            </div>
            <div class="col-12 remember_user d-flex align-center">
              <v-checkbox
                v-model="login.remember"
                label="Remember me"
                color="var(--primary-color)"
                value="red"
                hide-details
              ></v-checkbox>
            </div>
            <div class="col-12 submit_wrapper">
              <v-btn
                :disabled="!login.unique_key || !login.password || loading"
                class="Btn"
              >
                <span v-if="!loading">Log in</span>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  style="
                    margin: auto;
                    background: none;
                    display: block;
                    shape-rendering: auto;
                  "
                  width="75"
                  height="75"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    stroke="var(--primary-color)"
                    stroke-width="4"
                    r="22"
                    stroke-dasharray="103.67255756846316 36.55751918948772"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0 50 50;360 50 50"
                      keyTimes="0;1"
                    ></animateTransform>
                  </circle>
                  <!-- [ldio] generated by https://loading.io/ -->
                </svg>
              </v-btn>
            </div>
          </v-row>
        </form>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
      fullScreenModal: false,
      persistent: true,
      loading: false,
      login: {
        unique_key: "",
        password: "",
        remember: false,
      },
      errors: {},
    };
  },
  mounted() {
    var nx = window.innerWidth;
    if (nx <= 959) {
      this.fullScreenModal = true;
    }
    window.addEventListener("resize", function (event) {
      var w = window.innerWidth;
      nx = w;
    });
    $(window).resize(() => {
      if (nx <= 959) {
        this.fullScreenModal = true;
      } else {
        this.fullScreenModal = false;
      }
    });
  },
  methods: {},
};
</script>

<style scoped>
</style>