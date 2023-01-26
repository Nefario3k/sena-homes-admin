<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :width="width"
    :mobile-breakpoint="1041"
  >
    <div class="navPanel">
      <div class="logo">
        <nuxt-link to="/"><img src="/images/png/logo.png" alt="" /></nuxt-link>
        <div class="closePanel">
          <svg
            @click="drawer = false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#BF9001" />
            <path d="M9 9L15 15" stroke="white" stroke-linecap="round" />
            <path d="M15 9L9 15" stroke="white" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <!-- nav  -->
      <!-- nav header  -->
      <v-list nav class="navList">
        <nuxt-link to="/" class="topNav">
          <v-list-item class="dropdownList" style="padding-left: 12px">
            <v-list-item-icon style="margin: 12px 5px 0 0 !important">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3.33325"
                  y="3.33203"
                  width="5"
                  height="5.83333"
                  rx="1"
                  stroke="var(--secondary-color)"
                  stroke-linejoin="round"
                />
                <rect
                  x="3.33325"
                  y="12.5"
                  width="5"
                  height="4.16667"
                  rx="1"
                  stroke="var(--secondary-color)"
                  stroke-linejoin="round"
                />
                <rect
                  x="11.6667"
                  y="3.33203"
                  width="5"
                  height="4.16667"
                  rx="1"
                  stroke="var(--secondary-color)"
                  stroke-linejoin="round"
                />
                <rect
                  x="11.6667"
                  y="10.832"
                  width="5"
                  height="5.83333"
                  rx="1"
                  stroke="var(--secondary-color)"
                  stroke-linejoin="round"
                />
              </svg>
            </v-list-item-icon>

            <v-list-item-title class="item_title">Dashboard</v-list-item-title>
          </v-list-item>
        </nuxt-link>
      </v-list>

      <!-- divider  -->
      <v-divider class="topNavDivider"></v-divider>

      <!-- nav account list  -->
      <v-list
        nav
        class="navList"
        style="margin-top: 12px; padding-left: 24px; padding-right: 0"
      >
        <v-list-group>
          <template v-slot:activator>
            <v-list-item class="dropdownListWrapper">
              <v-list-item-title class="item_title"
                >Admin Panel</v-list-item-title
              >
            </v-list-item>
          </template>
          <v-list dense nav class="subList">
            <!-- listing  -->
            <nuxt-link to="/admin/listing?query=Listing" class="anchorTags">
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.58325 8.33203V14.2487C4.58325 15.1915 4.58325 15.6629 4.87615 15.9558C5.16904 16.2487 5.64044 16.2487 6.58325 16.2487H13.4166C14.3594 16.2487 14.8308 16.2487 15.1237 15.9558C15.4166 15.6629 15.4166 15.1915 15.4166 14.2487V8.33203"
                      stroke="#1C212B"
                    />
                    <path
                      d="M17.0834 9.58203L10.5768 4.9891C10.231 4.74506 9.76913 4.74506 9.4234 4.9891L2.91675 9.58203"
                      stroke="#1C212B"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.0834 15.832V12.832C12.0834 11.7275 11.188 10.832 10.0834 10.832H9.91675C8.81218 10.832 7.91675 11.7275 7.91675 12.832V15.832"
                      stroke="#1C212B"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.5833 7.4987V4.58203"
                      stroke="#1C212B"
                      stroke-linecap="round"
                    />
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Listings</v-list-item-title
                >
                <div class="admin_count">25</div>
              </v-list-item>
            </nuxt-link>
            <!-- call requests  -->
            <nuxt-link
              to="/admin/call-request?query=Call Back Request"
              class="anchorTags"
            >
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.33325"
                      y="5"
                      width="13.3333"
                      height="10"
                      rx="2"
                      stroke="#1C212B"
                    />
                    <path
                      d="M3.33325 7.5L9.10549 10.3861C9.66855 10.6676 10.3313 10.6676 10.8943 10.3861L16.6666 7.5"
                      stroke="#1C212B"
                    />
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Call Requests</v-list-item-title
                >
                <div class="admin_count">53</div>
              </v-list-item>
            </nuxt-link>
            <!-- Reviews & Ratings -->
            <nuxt-link
              to="/admin/review-ratings?query=`Reviews&Ratings`"
              class="anchorTags"
            >
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.02248 5.95096L4.39374 6.14012L4.02248 5.95096ZM4.39017 15.6124L4.68479 15.9071H4.68479L4.39017 15.6124ZM12.25 13.7526V14.1693V13.7526ZM14.885 13.4801L14.6958 13.1089L14.885 13.4801ZM15.9775 12.3876L15.6063 12.1984V12.1984L15.9775 12.3876ZM15.9775 5.95096L15.6063 6.14012V6.14012L15.9775 5.95096ZM14.885 4.85842L15.0741 4.48717L15.0741 4.48717L14.885 4.85842ZM5.11502 4.85842L5.30419 5.22967L5.11502 4.85842ZM6.59518 13.7526V13.3359V13.7526ZM4.16667 8.58594C4.16667 7.879 4.16699 7.37385 4.19934 6.97787C4.2313 6.58676 4.29241 6.33899 4.39374 6.14012L3.65123 5.7618C3.48007 6.09772 3.40494 6.46737 3.36878 6.91001C3.33301 7.3478 3.33333 7.89275 3.33333 8.58594H4.16667ZM4.16667 9.58594V8.58594H3.33333V9.58594H4.16667ZM3.33333 9.58594V13.7526H4.16667V9.58594H3.33333ZM3.33333 13.7526V15.3473H4.16667V13.7526H3.33333ZM3.33333 15.3473C3.33333 16.0526 4.18607 16.4058 4.68479 15.9071L4.09554 15.3178C4.09795 15.3154 4.10676 15.3093 4.11936 15.3071C4.12967 15.3053 4.13684 15.3071 4.14094 15.3088C4.14505 15.3105 4.15137 15.3143 4.1574 15.3229C4.16476 15.3333 4.16667 15.3439 4.16667 15.3473H3.33333ZM4.68479 15.9071L6.30055 14.2913L5.71129 13.7021L4.09554 15.3178L4.68479 15.9071ZM12.25 13.3359L6.59518 13.3359V14.1693L12.25 14.1693V13.3359ZM14.6958 13.1089C14.497 13.2102 14.2492 13.2713 13.8581 13.3033C13.4621 13.3356 12.9569 13.3359 12.25 13.3359V14.1693C12.9432 14.1693 13.4881 14.1696 13.9259 14.1338C14.3686 14.0977 14.7382 14.0225 15.0741 13.8514L14.6958 13.1089ZM15.6063 12.1984C15.4065 12.5904 15.0878 12.9091 14.6958 13.1089L15.0741 13.8514C15.6229 13.5717 16.0691 13.1256 16.3488 12.5767L15.6063 12.1984ZM15.8333 9.7526C15.8333 10.4595 15.833 10.9647 15.8007 11.3607C15.7687 11.7518 15.7076 11.9996 15.6063 12.1984L16.3488 12.5767C16.5199 12.2408 16.5951 11.8712 16.6312 11.4285C16.667 10.9907 16.6667 10.4458 16.6667 9.7526H15.8333ZM15.8333 8.58594V9.7526H16.6667V8.58594H15.8333ZM15.6063 6.14012C15.7076 6.33899 15.7687 6.58676 15.8007 6.97787C15.833 7.37385 15.8333 7.879 15.8333 8.58594H16.6667C16.6667 7.89275 16.667 7.3478 16.6312 6.91001C16.5951 6.46737 16.5199 6.09772 16.3488 5.7618L15.6063 6.14012ZM14.6958 5.22967C15.0878 5.42941 15.4065 5.74812 15.6063 6.14012L16.3488 5.7618C16.0691 5.21299 15.6229 4.7668 15.0741 4.48717L14.6958 5.22967ZM12.25 5.0026C12.9569 5.0026 13.4621 5.00293 13.8581 5.03528C14.2492 5.06724 14.497 5.12835 14.6958 5.22967L15.0741 4.48717C14.7382 4.31601 14.3686 4.24088 13.9259 4.20472C13.4881 4.16895 12.9432 4.16927 12.25 4.16927V5.0026ZM7.75 5.0026H12.25V4.16927H7.75V5.0026ZM5.30419 5.22967C5.50305 5.12835 5.75082 5.06724 6.14193 5.03528C6.53791 5.00293 7.04306 5.0026 7.75 5.0026V4.16927C7.05681 4.16927 6.51186 4.16895 6.07407 4.20472C5.63143 4.24088 5.26178 4.31601 4.92586 4.48717L5.30419 5.22967ZM4.39374 6.14012C4.59347 5.74812 4.91218 5.42941 5.30419 5.22967L4.92586 4.48717C4.37705 4.7668 3.93086 5.21299 3.65123 5.7618L4.39374 6.14012ZM6.30055 14.2913C6.37869 14.2132 6.48467 14.1693 6.59518 14.1693V13.3359C6.26366 13.3359 5.94571 13.4676 5.71129 13.7021L6.30055 14.2913Z"
                      fill="#1C212B"
                    />
                    <path
                      d="M7.08325 7.91797L12.9166 7.91797"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.08325 10.418L11.2499 10.418"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Reviews & <br />
                  Ratings</v-list-item-title
                >
                <div class="admin_count">197</div>
              </v-list-item>
            </nuxt-link>
            <!-- Favourites -->
            <nuxt-link
              to="/admin/favourite?query=Favourites"
              class="anchorTags"
            >
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.70881 11.5889L9.50266 17.0316C9.70224 17.2191 9.80203 17.3128 9.91968 17.3359C9.97267 17.3463 10.0272 17.3463 10.0802 17.3359C10.1978 17.3128 10.2976 17.2191 10.4972 17.0316L16.291 11.5889C17.9212 10.0575 18.1191 7.53753 16.7481 5.77042L16.4903 5.43815C14.8502 3.32418 11.5579 3.67871 10.4055 6.09341C10.2427 6.4345 9.75716 6.4345 9.59436 6.09341C8.44189 3.67871 5.14969 3.32418 3.50954 5.43815L3.25174 5.77042C1.88071 7.53753 2.07867 10.0575 3.70881 11.5889Z"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                    />
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Favourites</v-list-item-title
                >
              </v-list-item>
            </nuxt-link>
            <!-- Users Control -->
            <nuxt-link
              to="/admin/user-control?query=Users Control"
              class="anchorTags"
            >
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="6.66797"
                      r="2"
                      stroke="#222222"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.5454 5.45964C11.702 5.18844 11.9354 4.96976 12.2163 4.83125C12.4972 4.69275 12.8128 4.64064 13.1233 4.68151C13.4337 4.72239 13.7251 4.85441 13.9605 5.06089C14.196 5.26737 14.3649 5.53902 14.446 5.84151C14.527 6.14399 14.5166 6.46371 14.4159 6.76025C14.3152 7.05678 14.1289 7.31681 13.8805 7.50744C13.632 7.69808 13.3326 7.81076 13.0201 7.83125C12.7077 7.85173 12.3961 7.77909 12.1249 7.62251"
                      stroke="#222222"
                    />
                    <path
                      d="M8.45462 5.45964C8.29804 5.18844 8.06456 4.96976 7.78371 4.83125C7.50285 4.69275 7.18722 4.64064 6.87675 4.68151C6.56627 4.72239 6.27489 4.85441 6.03945 5.06089C5.80401 5.26737 5.63508 5.53902 5.55403 5.84151C5.47298 6.14399 5.48345 6.46371 5.58411 6.76025C5.68477 7.05678 5.8711 7.31681 6.11954 7.50744C6.36798 7.69808 6.66738 7.81076 6.97986 7.83125C7.29234 7.85173 7.60388 7.77909 7.87508 7.62251"
                      stroke="#222222"
                    />
                    <path
                      d="M10.0001 10.418C13.2731 10.418 14.2088 12.9677 14.4763 14.4256C14.576 14.9688 14.1357 15.418 13.5834 15.418H6.41675C5.86446 15.418 5.42417 14.9688 5.52385 14.4256C5.79137 12.9677 6.7271 10.418 10.0001 10.418Z"
                      stroke="#222222"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.0337 12.6672L15.5516 12.7999V12.7999L16.0337 12.6672ZM10.906 10.487L10.5368 10.1498L9.91633 10.8293L10.824 10.9802L10.906 10.487ZM14.3179 13.7487L13.8375 13.8877L13.942 14.2487H14.3179V13.7487ZM12.9168 10.082C13.7034 10.082 14.2645 10.4469 14.6864 10.9741C15.1195 11.5152 15.39 12.2124 15.5516 12.7999L16.5158 12.5346C16.3377 11.8875 16.0216 11.0421 15.4671 10.3492C14.9015 9.64246 14.0739 9.08203 12.9168 9.08203V10.082ZM11.2753 10.8241C11.6793 10.3816 12.203 10.082 12.9168 10.082V9.08203C11.8751 9.08203 11.0961 9.53718 10.5368 10.1498L11.2753 10.8241ZM10.824 10.9802C12.6953 11.2912 13.4899 12.6861 13.8375 13.8877L14.7982 13.6097C14.4015 12.2386 13.4087 10.396 10.988 9.99372L10.824 10.9802ZM15.1451 13.2487H14.3179V14.2487H15.1451V13.2487ZM15.5516 12.7999C15.584 12.9176 15.5554 13.0195 15.4878 13.0996C15.4166 13.1841 15.296 13.2487 15.1451 13.2487V14.2487C16.0117 14.2487 16.7744 13.4746 16.5158 12.5346L15.5516 12.7999Z"
                      fill="#222222"
                    />
                    <path
                      d="M9.09409 10.487L9.17605 10.9802L10.0838 10.8293L9.46333 10.1498L9.09409 10.487ZM3.96639 12.6672L3.48431 12.5346L3.96639 12.6672ZM5.68225 13.7487V14.2487H6.0581L6.16255 13.8877L5.68225 13.7487ZM7.08334 10.082C7.79712 10.082 8.32082 10.3816 8.72484 10.8241L9.46333 10.1498C8.90397 9.53718 8.12503 9.08203 7.08334 9.08203V10.082ZM4.44847 12.7999C4.61013 12.2124 4.88064 11.5152 5.3137 10.9741C5.73563 10.4469 6.29666 10.082 7.08334 10.082V9.08203C5.92622 9.08203 5.09864 9.64245 4.53297 10.3492C3.97844 11.0421 3.66238 11.8875 3.48431 12.5346L4.44847 12.7999ZM4.85499 13.2487C4.70411 13.2487 4.5835 13.1841 4.51226 13.0996C4.4447 13.0195 4.41607 12.9176 4.44847 12.7999L3.48431 12.5346C3.22564 13.4746 3.98843 14.2487 4.85499 14.2487V13.2487ZM5.68225 13.2487H4.85499V14.2487H5.68225V13.2487ZM6.16255 13.8877C6.51018 12.6861 7.30475 11.2912 9.17605 10.9802L9.01212 9.99372C6.59141 10.396 5.59864 12.2386 5.20194 13.6097L6.16255 13.8877Z"
                      fill="#222222"
                    />
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Users Control</v-list-item-title
                >
              </v-list-item>
            </nuxt-link>
            <!-- Admins -->
            <nuxt-link to="/admin/manage?query=Admins" class="anchorTags">
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.773 3.1241L15.5077 4.38668C15.9454 4.50341 16.25 4.89986 16.25 5.35291V9.70687C16.25 11.713 15.2474 13.5864 13.5782 14.6992L10.5547 16.7148C10.2188 16.9388 9.7812 16.9388 9.4453 16.7148L6.4218 14.6992C4.75261 13.5864 3.75 11.713 3.75 9.70687V5.35291C3.75 4.89986 4.05458 4.50341 4.49234 4.38668L9.22701 3.1241C9.73349 2.98904 10.2665 2.98904 10.773 3.1241Z"
                      stroke="#222222"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7.91667 9.58203L9.40656 11.0719C9.50419 11.1696 9.66248 11.1696 9.76011 11.0719L12.5 8.33203"
                      stroke="#222222"
                      stroke-linecap="round"
                    />
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title">Admins</v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list>
        </v-list-group>
      </v-list>

      <!-- divider  -->
      <v-divider class="navDivider"></v-divider>

      <!-- website Editor list  -->
      <v-list
        nav
        class="navList"
        style="margin-top: 12px; padding-left: 24px; padding-right: 0"
      >
        <v-list-group>
          <template v-slot:activator>
            <v-list-item class="dropdownListWrapper">
              <v-list-item-title class="item_title"
                >Website Editor</v-list-item-title
              >
            </v-list-item>
          </template>
          <v-list dense nav class="subList">
            <!-- Landing Page  -->
            <nuxt-link
              to="/website-editor/home-page?query=Home Page"
              class="anchorTags"
            >
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_742_26456)">
                      <path
                        d="M18.7279 9.60426L10.3945 1.27093C10.2905 1.16745 10.1496 1.10937 10.0029 1.10938C9.8561 1.10938 9.7153 1.16745 9.61121 1.27093L1.27787 9.60426C1.18686 9.71054 1.1393 9.84725 1.1447 9.98707C1.1501 10.1269 1.20806 10.2595 1.30701 10.3585C1.40595 10.4574 1.53858 10.5154 1.6784 10.5208C1.81822 10.5262 1.95493 10.4786 2.06121 10.3876L10.0001 2.4487L17.939 10.3931C18.0453 10.4842 18.182 10.5317 18.3218 10.5263C18.4616 10.5209 18.5942 10.463 18.6932 10.364C18.7921 10.2651 18.8501 10.1324 18.8555 9.99262C18.8609 9.8528 18.8133 9.71609 18.7223 9.60982L18.7279 9.60426Z"
                        fill="#1C212B"
                      />
                      <path
                        d="M15.5555 17.7783H12.7777V12.2227H7.22214V17.7783H4.44436V10.0005L3.33325 11.1116V17.7783C3.33325 18.073 3.45032 18.3556 3.65869 18.564C3.86706 18.7723 4.14968 18.8894 4.44436 18.8894H8.33325V13.3339H11.6666V18.8894H15.5555C15.8502 18.8894 16.1328 18.7723 16.3411 18.564C16.5495 18.3556 16.6666 18.073 16.6666 17.7783V10.9783L15.5555 9.86719V17.7783Z"
                        fill="#1C212B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_742_26456">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Home Page</v-list-item-title
                >
              </v-list-item>
            </nuxt-link>
            <!-- About  -->
            <nuxt-link
              to="/website-editor/about?query=About"
              class="anchorTags"
            >
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5.41797V15.418"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.0833 5.41797V15.418"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2.91675 5.41797V15.418"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.0833 15.4167C17.0833 15.4167 16.25 13.75 13.3333 13.75C10.4167 13.75 10 15.4167 10 15.4167"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2.91667 15.4167C2.91667 15.4167 3.75 13.75 6.66667 13.75C9.58333 13.75 10 15.4167 10 15.4167"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.0833 5.41667C17.0833 5.41667 16.25 3.75 13.3333 3.75C10.4167 3.75 10 5.41667 10 5.41667"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2.91667 5.41667C2.91667 5.41667 3.75 3.75 6.66667 3.75C9.58333 3.75 10 5.41667 10 5.41667"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                      stroke-linecap="round"
                    />
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title">About</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <!-- Contact -->
            <nuxt-link
              to="/website-editor/contact?query=Contact"
              class="anchorTags"
            >
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7559 11.4226L16.9627 13.6294C17.2594 13.9261 17.2594 14.4072 16.9627 14.704C15.3583 16.3083 12.8184 16.4888 11.0033 15.1275L9.69048 14.1429C8.23753 13.0532 6.94685 11.7625 5.85714 10.3095L4.87251 8.99668C3.51117 7.18156 3.69168 4.64166 5.29603 3.03731C5.59277 2.74056 6.07389 2.74056 6.37064 3.03731L8.57741 5.24408C8.90285 5.56951 8.90285 6.09715 8.57741 6.42259L7.72645 7.27355C7.59122 7.40878 7.55769 7.61538 7.64322 7.78644C8.63211 9.76421 10.2358 11.3679 12.2136 12.3568C12.3846 12.4423 12.5912 12.4088 12.7265 12.2735L13.5774 11.4226C13.9028 11.0972 14.4305 11.0972 14.7559 11.4226Z"
                      stroke="#222222"
                      stroke-width="0.833333"
                    />
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Contact</v-list-item-title
                >
              </v-list-item>
            </nuxt-link>
            <!-- Socials -->
            <nuxt-link
              to="/website-editor/socials?query=Socials"
              class="anchorTags"
            >
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 5C7.5 5.3283 7.56466 5.65339 7.6903 5.95671C7.81594 6.26002 8.00009 6.53562 8.23223 6.76777C8.46438 6.99991 8.73998 7.18406 9.04329 7.3097C9.34661 7.43534 9.6717 7.5 10 7.5C10.3283 7.5 10.6534 7.43534 10.9567 7.3097C11.26 7.18406 11.5356 6.99991 11.7678 6.76777C11.9999 6.53562 12.1841 6.26002 12.3097 5.95671C12.4353 5.65339 12.5 5.3283 12.5 5C12.5 4.67169 12.4353 4.3466 12.3097 4.04329C12.1841 3.73998 11.9999 3.46438 11.7678 3.23223C11.5356 3.00009 11.26 2.81594 10.9567 2.6903C10.6534 2.56466 10.3283 2.5 10 2.5C9.67169 2.5 9.3466 2.56466 9.04329 2.6903C8.73998 2.81594 8.46438 3.00009 8.23223 3.23223C8.00009 3.46438 7.81594 3.73998 7.6903 4.04329C7.56466 4.34661 7.5 4.6717 7.5 5L7.5 5Z"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                    />
                    <path
                      d="M3.69822 11.5839C3.4139 11.7481 3.16469 11.9666 2.96483 12.2271C2.76498 12.4876 2.61837 12.7848 2.5334 13.102C2.44843 13.4191 2.42675 13.7498 2.46961 14.0753C2.51246 14.4008 2.619 14.7147 2.78315 14.999C2.94731 15.2833 3.16585 15.5325 3.42631 15.7324C3.68678 15.9322 3.98405 16.0788 4.30117 16.1638C4.61829 16.2488 4.94904 16.2705 5.27453 16.2276C5.60003 16.1848 5.9139 16.0782 6.19822 15.9141C6.48254 15.7499 6.73174 15.5314 6.9316 15.2709C7.13146 15.0104 7.27806 14.7132 7.36303 14.396C7.448 14.0789 7.46968 13.7482 7.42683 13.4227C7.38398 13.0972 7.27743 12.7833 7.11328 12.499C6.94913 12.2147 6.73058 11.9655 6.47012 11.7656C6.20966 11.5658 5.91238 11.4192 5.59526 11.3342C5.27815 11.2492 4.9474 11.2275 4.6219 11.2704C4.2964 11.3132 3.98254 11.4198 3.69822 11.5839L3.69822 11.5839Z"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                    />
                    <path
                      d="M16.3018 11.5839C16.5861 11.7481 16.8353 11.9666 17.0352 12.2271C17.235 12.4876 17.3816 12.7848 17.4666 13.102C17.5516 13.4191 17.5732 13.7498 17.5304 14.0753C17.4875 14.4008 17.381 14.7147 17.2168 14.999C17.0527 15.2833 16.8341 15.5325 16.5737 15.7324C16.3132 15.9322 16.0159 16.0788 15.6988 16.1638C15.3817 16.2488 15.051 16.2705 14.7255 16.2276C14.4 16.1848 14.0861 16.0782 13.8018 15.9141C13.5175 15.7499 13.2683 15.5314 13.0684 15.2709C12.8685 15.0104 12.7219 14.7132 12.637 14.396C12.552 14.0789 12.5303 13.7482 12.5732 13.4227C12.616 13.0972 12.7226 12.7833 12.8867 12.499C13.0509 12.2147 13.2694 11.9655 13.5299 11.7656C13.7903 11.5658 14.0876 11.4192 14.4047 11.3342C14.7219 11.2492 15.0526 11.2275 15.3781 11.2704C15.7036 11.3132 16.0175 11.4198 16.3018 11.5839L16.3018 11.5839Z"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.50195 5.10477C7.50051 5.07009 7.49978 5.03535 7.49978 5.00058C7.49978 4.71111 7.55005 4.42414 7.64806 4.15239C7.52735 4.19488 7.40767 4.24068 7.28916 4.28977C6.42977 4.64574 5.64891 5.1675 4.99116 5.82524C4.33341 6.48299 3.81166 7.26385 3.45569 8.12324C3.09972 8.98263 2.9165 9.90372 2.9165 10.8339C2.9165 11.2724 2.95721 11.7088 3.03753 12.1377C3.22387 11.9169 3.44726 11.7299 3.69796 11.5852C3.72807 11.5678 3.75852 11.551 3.78928 11.535C3.76306 11.3027 3.74984 11.0686 3.74984 10.8339C3.74984 10.0132 3.9115 9.20043 4.22559 8.44215C4.53968 7.68386 5.00005 6.99487 5.58042 6.4145C6.1336 5.86132 6.78546 5.41716 7.50195 5.10477ZM12.4976 5.10472C13.2141 5.41711 13.866 5.86129 14.4193 6.4145C14.9996 6.99486 15.46 7.68386 15.7741 8.44214C16.0882 9.20043 16.2498 10.0132 16.2498 10.8339C16.2498 11.0686 16.2366 11.3027 16.2104 11.535C16.2411 11.5511 16.2715 11.5678 16.3016 11.5852C16.5523 11.7299 16.7758 11.917 16.9621 12.1378C17.0425 11.7089 17.0832 11.2724 17.0832 10.8339C17.0832 9.90371 16.9 8.98263 16.544 8.12324C16.188 7.26385 15.6663 6.48299 15.0085 5.82524C14.3508 5.16749 13.5699 4.64574 12.7105 4.28977C12.592 4.24066 12.4722 4.19485 12.3515 4.15234C12.4495 4.42411 12.4998 4.71109 12.4998 5.00058C12.4998 5.03534 12.4991 5.07006 12.4976 5.10472ZM14.6107 16.211C14.3262 16.1601 14.0524 16.0601 13.8016 15.9153C13.7716 15.898 13.742 15.88 13.7128 15.8615C13.3053 16.1624 12.8618 16.4134 12.3916 16.6082C11.6333 16.9223 10.8206 17.0839 9.99984 17.0839C9.17908 17.0839 8.36635 16.9223 7.60807 16.6082C7.1379 16.4134 6.69438 16.1624 6.28686 15.8615C6.25763 15.88 6.22799 15.898 6.19796 15.9153C5.94718 16.0601 5.67341 16.1601 5.38895 16.211C5.9559 16.6972 6.59707 17.0914 7.28916 17.3781C8.14855 17.734 9.06964 17.9172 9.99984 17.9172C10.93 17.9172 11.8511 17.734 12.7105 17.3781C13.4026 17.0914 14.0438 16.6972 14.6107 16.211Z"
                      fill="#1C212B"
                    />
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Socials</v-list-item-title
                >
              </v-list-item>
            </nuxt-link>
            <!-- FAQs -->
            <nuxt-link to="/website-editor/faq?query=FAQ'S" class="anchorTags">
              <v-list-item class="dropdownList">
                <v-list-item-icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="7.5"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                    />
                    <circle
                      cx="9.99992"
                      cy="14.9987"
                      r="0.416667"
                      fill="#1C212B"
                    />
                    <path
                      d="M10 13.332V12.6181C10 12.0229 10.2975 11.4671 10.7927 11.1369L11.2914 10.8044C12.0465 10.3011 12.5 9.45362 12.5 8.54615V8.33203C12.5 6.95132 11.3807 5.83203 10 5.83203V5.83203C8.61929 5.83203 7.5 6.95132 7.5 8.33203V8.33203"
                      stroke="#1C212B"
                      stroke-width="0.833333"
                    />
                  </svg>
                </v-list-item-icon>
                <v-list-item-title class="item_title">FAQ'S</v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list>
        </v-list-group>
      </v-list>

      <!-- divider  -->
      <v-divider class="navDivider"></v-divider>

      <!-- sign-out  -->
      <v-list
        nav
        class="navList"
        style="margin-top: 12px; padding-left: 24px; padding-right: 0"
      >
        <v-list-item class="dropdownList signout" style="padding-left: 12px">
          <v-list-item-icon style="margin: 12px 5px 0 0 !important">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.10736 14.8939C3.2728 16.0593 4.75766 16.853 6.37417 17.1745C7.99067 17.4961 9.66623 17.331 11.1889 16.7003C12.7117 16.0696 14.0132 15.0015 14.9288 13.6311C15.8445 12.2606 16.3333 10.6495 16.3333 9.0013C16.3333 7.35312 15.8445 5.74196 14.9288 4.37155C14.0132 3.00114 12.7117 1.93304 11.1889 1.30231C9.66623 0.671576 7.99068 0.506548 6.37417 0.828091C4.75766 1.14963 3.2728 1.94331 2.10736 3.10874"
                stroke="#222222"
              />
              <path
                d="M10.5 8.9987L10.8904 8.68635L11.1403 8.9987L10.8904 9.31105L10.5 8.9987ZM0.5 9.4987C0.223858 9.4987 0 9.27484 0 8.9987C0 8.72256 0.223858 8.4987 0.5 8.4987V9.4987ZM7.5571 4.51968L10.8904 8.68635L10.1096 9.31105L6.77623 5.14438L7.5571 4.51968ZM10.8904 9.31105L7.5571 13.4777L6.77623 12.853L10.1096 8.68635L10.8904 9.31105ZM10.5 9.4987H0.5V8.4987H10.5V9.4987Z"
                fill="#222222"
              />
            </svg>
          </v-list-item-icon>

          <v-list-item-title class="item_title">Sign Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
    <!-- -->
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      width: 257,
      items: [
        { title: "Cell Phones" },
        { title: "Computers & Accessories" },
        { title: "Home appliances & Electronics" },
        { title: "Fashion & Wears" },
        { title: "Jewelry" },
        { title: "Laptops" },
        { title: "Gaming" },
      ],
      width: 300,
    };
  },
  mounted() {
    var nx = window.innerWidth;
    if (nx <= 540) {
      this.width = "100vw";
    }
    window.addEventListener("resize", function (event) {
      var w = window.innerWidth;
      nx = w;
    });
    $(window).resize(() => {
      if (nx <= 540) {
        this.width = "100vw";
      } else {
        this.width = 257;
      }
    });
  },
  methods: {
    showPanel() {
      this.drawer = true;
    },
  },
};
</script>

<style lang="scss" scoped>
/* nav Panel styles  */

.navPanel {
  .logo {
    // width: 100%;
    height: 6.4rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
    margin: 0 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 85%;
      height: 100%;
      object-fit: contain;
    }
    .closePanel {
      display: none;
      svg {
        width: 30px;
        cursor: pointer;
        height: 30px;
      }
    }
  }

  .navList {
    padding-top: 0;
    margin-top: 54px;
    a {
      text-decoration: none;
      &.nuxt-link-active.nuxt-link-exact-active {
        .dropdownList {
          background-color: var(--primary-color);
          transition: all 0.2s ease-in-out;
          .item_title {
            color: #fff !important;
            transition: all 0.2s ease-in-out;
          }
          .admin_count {
            color: var(--primary-color);
          }
          svg {
            rect {
              stroke: #fff !important;
              transition: all 0.2s ease-in-out;
            }
            path {
              stroke: #fff !important;
              transition: all 0.2s ease-in-out;
            }
            circle {
              stroke: #fff !important;
              transition: all 0.2s ease-in-out;
            }
            &.landingSvg {
              path {
                fill: #fff !important;
                transition: all 0.2s ease-in-out;
              }
            }
          }
        }
      }
    }
    .dropdownList {
      cursor: pointer;
      padding-left: 0;
      padding-top: 0;
      transition: all 0.2s ease-in-out;
      height: 3.6rem;
      border-radius: 8px;
      margin-top: 7px;
      justify-content: space-between;
      &:hover {
        background-color: var(--primary-color);
        transition: all 0.2s ease-in-out;
        .item_title {
          color: #fff !important;
          transition: all 0.2s ease-in-out;
        }
        .admin_count {
          color: var(--primary-color);
          transition: all 0.2s ease-in-out;
        }
        svg {
          transition: all 0.2s ease-in-out;
          rect {
            stroke: #fff !important;
            transition: all 0.2s ease-in-out;
          }
          path {
            stroke: #fff !important;
            transition: all 0.2s ease-in-out;
          }
          circle {
            stroke: #fff !important;
            transition: all 0.2s ease-in-out;
          }
          &.landingSvg {
            path {
              fill: #fff !important;
              transition: all 0.2s ease-in-out;
            }
          }
        }
      }
      //   background: red;
      .item_title {
        font-size: 1.4rem;
        font-weight: 500;
        overflow: visible !important;
        color: var(--secondary-color);
        transition: all 0.2s ease-in-out;
      }
      svg {
        width: 20px;
        height: 20px;
        transition: all 0.2s ease-in-out;
      }
    }
    .dropdownListWrapper {
      padding-left: 0;
      margin-bottom: 0;
      height: 2rem !important;
      .item_title {
        font-size: 1.2rem;
        font-weight: 700;
        overflow: visible !important;
        color: var(--nav-color);
        transition: all 0.2s ease-in-out;
      }
      svg {
        width: 20px;
        height: 20px;
        fill: var(--secondary-color);
        transition: all 0.2s ease-in-out;
      }
    }
  }
  .topNavDivider {
    margin-top: 25px;
    margin-left: 24px;
  }
  .navDivider {
    margin-top: 15px;
    margin-left: 24px;
  }
  .subList {
    padding-top: 0;
    a.anchorTags {
      text-decoration: none;
    }
    .dropdownList {
      .v-list-item__icon {
        margin: 9px 12px 0 !important;
      }
      .item_title {
        word-wrap: break-word;
        line-height: 15px;
      }
    }
  }
  .signout {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  .admin_count {
    padding: 2px 8px;
    background: var(--section-bg);
    border-radius: 30px;
    font-weight: 500;
    color: var(--secondary-color);
    transition: all 0.2s ease-in-out;
    font-size: 1.2rem;
  }
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-bottom: 0;
  margin-top: 10px;
  margin-right: 5px !important;
}

/* nav Panel styles end */
</style>