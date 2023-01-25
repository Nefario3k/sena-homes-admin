<template>
  <v-dialog
    v-model="showModal"
    :persistent="persistent"
    origin="center center"
    width="460"
    class="authDialog"
  >
    <v-card class="authCard">
      <div class="modal_content fPassword">
        <Transition name="fade" v-if="accountSuccess">
          <div class="content_area">
            <v-row class="row_form">
              <div class="svg col-12">
                <svg
                  width="220"
                  height="220"
                  viewBox="0 0 220 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.1" filter="url(#filter0_f_0_1)">
                    <path
                      d="M209.4 109.998C209.4 164.895 164.897 209.398 110 209.398C55.1025 209.398 10.5996 164.895 10.5996 109.998C10.5996 55.1005 55.1025 10.5977 110 10.5977C164.897 10.5977 209.4 55.1005 209.4 109.998Z"
                      fill="url(#paint0_radial_0_1)"
                    />
                    <path
                      d="M209.4 109.998C209.4 164.895 164.897 209.398 110 209.398C55.1025 209.398 10.5996 164.895 10.5996 109.998C10.5996 55.1005 55.1025 10.5977 110 10.5977C164.897 10.5977 209.4 55.1005 209.4 109.998Z"
                      fill="url(#paint1_radial_0_1)"
                    />
                  </g>
                  <g opacity="0.1" filter="url(#filter1_f_0_1)">
                    <path
                      d="M209.4 109.998C209.4 164.895 164.897 209.398 110 209.398C55.1025 209.398 10.5996 164.895 10.5996 109.998C10.5996 55.1005 55.1025 10.5977 110 10.5977C164.897 10.5977 209.4 55.1005 209.4 109.998Z"
                      fill="url(#paint2_radial_0_1)"
                    />
                    <path
                      d="M209.4 109.998C209.4 164.895 164.897 209.398 110 209.398C55.1025 209.398 10.5996 164.895 10.5996 109.998C10.5996 55.1005 55.1025 10.5977 110 10.5977C164.897 10.5977 209.4 55.1005 209.4 109.998Z"
                      fill="url(#paint3_radial_0_1)"
                    />
                  </g>
                  <g opacity="0.15" filter="url(#filter2_f_0_1)">
                    <circle
                      cx="110"
                      cy="110"
                      r="77"
                      fill="url(#paint4_radial_0_1)"
                    />
                  </g>
                  <circle
                    cx="110"
                    cy="110"
                    r="49"
                    fill="url(#paint5_radial_0_1)"
                  />
                  <path
                    d="M103.148 120.467L103.448 120.133L103.715 119.967L104.015 120.133C104.448 119.8 104.815 119.433 105.115 119.067C105.415 118.7 105.982 117.733 106.882 116.233L108.948 112.733C110.048 110.867 115.815 103.033 117.115 101.567C120.115 98.1333 121.115 97.1 121.515 96.5667C121.882 96.1 122.115 95.7333 122.115 95.4667C122.115 95.3 122.015 95.0333 121.848 95.0333C121.682 95.0333 121.415 95.1667 121.082 95.4L121.348 94.8L120.215 95.4667L120.282 95C120.215 95.2 119.682 95.7333 119.548 95.7333C119.448 95.7333 119.415 95.6333 119.415 95.4667V95.3333L118.482 95.8C118.415 95.8 118.348 95.7667 118.348 95.6667C118.348 95.5667 118.415 95.3333 118.482 95C118.015 95.5 117.348 96.0667 116.482 96.6667C115.315 97.4667 110.782 103.167 108.948 106.133C107.715 108.1 107.215 109.267 107.015 109.267C106.948 109.267 106.915 109.133 106.882 108.867C106.282 110.233 105.748 111.367 105.215 112.2C104.682 113.033 104.182 113.467 103.815 113.467C103.382 113.467 103.015 112.633 102.615 110.933C102.448 110.2 102.082 109.733 101.548 109.467L101.448 109.433C101.348 109.433 101.215 109.5 101.048 109.6C100.882 109.7 100.782 109.8 100.715 109.8H100.682L100.082 109.6L99.5483 110.4C99.4816 110.5 99.3483 110.533 99.2483 110.533C99.0816 110.533 98.9483 110.5 98.8816 110.4C98.7483 110.867 98.5816 111.1 98.4483 111.1C98.3483 111.1 98.1483 111.033 97.8816 110.867C98.115 112.633 98.315 113.8 98.515 114.367C98.915 115.467 99.815 117.967 100.682 119.633C100.782 119.833 100.915 120.067 101.015 120.267C101.348 120.067 101.448 120.033 101.682 120.033L101.948 120.067C102.115 120.133 102.215 120.233 102.215 120.4L102.982 120.033C103.115 120.033 103.148 120.167 103.148 120.467Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_f_0_1"
                      x="0.599609"
                      y="0.597656"
                      width="218.8"
                      height="218.801"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="5"
                        result="effect1_foregroundBlur_0_1"
                      />
                    </filter>
                    <filter
                      id="filter1_f_0_1"
                      x="0.599609"
                      y="0.597656"
                      width="218.8"
                      height="218.801"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="5"
                        result="effect1_foregroundBlur_0_1"
                      />
                    </filter>
                    <filter
                      id="filter2_f_0_1"
                      x="23"
                      y="23"
                      width="174"
                      height="174"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="5"
                        result="effect1_foregroundBlur_0_1"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial_0_1"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10.5996 -21.7651) rotate(54.4352) scale(284.173)"
                    >
                      <stop offset="0.046875" stop-color="#976F40" />
                      <stop offset="0.983052" stop-color="#BF9001" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_0_1"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10.5996 -21.7651) rotate(54.4352) scale(284.173)"
                    >
                      <stop offset="0.046875" stop-color="#976F40" />
                      <stop offset="0.983052" stop-color="#BF9001" />
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_0_1"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10.5996 -21.7651) rotate(54.4352) scale(284.173)"
                    >
                      <stop offset="0.046875" stop-color="#976F40" />
                      <stop offset="0.983052" stop-color="#BF9001" />
                    </radialGradient>
                    <radialGradient
                      id="paint3_radial_0_1"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10.5996 -21.7651) rotate(54.4352) scale(284.173)"
                    >
                      <stop offset="0.046875" stop-color="#976F40" />
                      <stop offset="0.983052" stop-color="#BF9001" />
                    </radialGradient>
                    <radialGradient
                      id="paint4_radial_0_1"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(33 7.93024) rotate(54.4352) scale(220.134)"
                    >
                      <stop offset="0.046875" stop-color="#976F40" />
                      <stop offset="0.983052" stop-color="#BF9001" />
                    </radialGradient>
                    <radialGradient
                      id="paint5_radial_0_1"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(61 45.0465) rotate(54.4352) scale(140.085)"
                    >
                      <stop offset="0.046875" stop-color="#976F40" />
                      <stop offset="0.983052" stop-color="#BF9001" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div class="col-12" style="padding-bottom: 0; padding-top: 0">
                <header>Congratulations!</header>
              </div>
              <div class="col-12 fPassword_text">
                <p>Your account is ready to use</p>
              </div>
              <div class="col-12 submit_wrapper submitted">
                <v-btn to="/auth/login" class="Btn">
                  <span>Continue</span>
                </v-btn>
              </div>
            </v-row>
          </div>
        </Transition>
        <form v-else class="content_area">
          <v-row class="row_form">
            <div class="col-12 logo">
              <img src="/images/png/logo.png" alt="" />
            </div>
            <div class="col-12" style="padding-bottom: 0; padding-top: 0">
              <header>Create New Password</header>
            </div>
            <div class="col-12 fPassword_text">
              <p>Changing your password will log you out of all devices</p>
            </div>
            <div class="col-12" :class="{ activeInput: login.password }">
              <label for="loginEmail">New password</label>
              <input
                required
                id="loginEmail"
                type="password"
                name=""
                v-model="login.password"
              />
            </div>
            <div class="col-12" :class="{ activeInput: login.cpassword }">
              <label for="loginEmail">Confirm new password</label>
              <input
                required
                id="loginEmail"
                type="password"
                name=""
                v-model="login.cpassword"
              />
            </div>
            <div class="col-12 submit_wrapper">
              <v-btn
                @click="accountSuccess = true"
                :disabled="
                  !login.password ||
                  login.password != login.cpassword ||
                  loading
                "
                class="Btn"
              >
                <span v-if="!loading">Submit</span>
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
      showModal: false,
      accountSuccess: false,
      fullScreenModal: false,
      persistent: true,
      loading: false,
      login: {
        password: "",
        cpassword: "",
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
  methods: {
    showDialogue() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped>
</style>