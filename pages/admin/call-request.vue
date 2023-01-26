<template>
  <div>
    <section id="pageBody">
      <v-row class="content_row" style="margin-top: 0">
        <!-- title  -->
        <div class="col-12 header_wrapper">
          <header>Call Back Requests</header>
          <div class="listing_header_btns">
            <v-menu bottom offset-y :nudge-bottom="5">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="Btn" v-on="on" v-bind="attrs">
                  <div class="Btn_wrapper">
                    <span>Bulk Action</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </v-btn>
              </template>
              <v-list elevation="0" flat class="dropdownList">
                <v-list elevation="0" flat nav dense class="dropdownList">
                  <!-- view email  -->
                  <v-list-item
                    @click="showModal('viewEmail')"
                    class="ItemList"
                    style="padding-left: 12px"
                  >
                    <v-list-item-icon style="margin: 10px 5px 0 0 !important">
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="12"
                          height="9"
                          rx="2"
                          stroke="#1C212B"
                        />
                        <path
                          d="M3 7.25L8.10557 9.80279C8.66863 10.0843 9.33137 10.0843 9.89443 9.80279L15 7.25"
                          stroke="#1C212B"
                        />
                      </svg>
                    </v-list-item-icon>

                    <v-list-item-title class="item_title"
                      >View Mail</v-list-item-title
                    >
                  </v-list-item>

                  <!-- delete  -->
                  <v-list-item class="ItemList" style="padding-left: 12px">
                    <v-list-item-icon style="margin: 10px 5px 0 0 !important">
                      <svg
                        class="delete"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.875 4.5H12.9375C12.7924 3.79463 12.4086 3.16084 11.8508 2.70545C11.2929 2.25006 10.5951 2.00091 9.875 2L8.625 2C7.90487 2.00091 7.20707 2.25006 6.64922 2.70545C6.09136 3.16084 5.70756 3.79463 5.5625 4.5H3.625C3.45924 4.5 3.30027 4.56585 3.18306 4.68306C3.06585 4.80027 3 4.95924 3 5.125C3 5.29076 3.06585 5.44973 3.18306 5.56694C3.30027 5.68415 3.45924 5.75 3.625 5.75H4.25V13.875C4.25099 14.7035 4.58055 15.4978 5.16639 16.0836C5.75222 16.6694 6.5465 16.999 7.375 17H11.125C11.9535 16.999 12.7478 16.6694 13.3336 16.0836C13.9194 15.4978 14.249 14.7035 14.25 13.875V5.75H14.875C15.0408 5.75 15.1997 5.68415 15.3169 5.56694C15.4342 5.44973 15.5 5.29076 15.5 5.125C15.5 4.95924 15.4342 4.80027 15.3169 4.68306C15.1997 4.56585 15.0408 4.5 14.875 4.5ZM8.625 3.25H9.875C10.2627 3.25047 10.6407 3.37086 10.9573 3.59465C11.2738 3.81844 11.5134 4.13468 11.6431 4.5H6.85687C6.98661 4.13468 7.22619 3.81844 7.54274 3.59465C7.8593 3.37086 8.23733 3.25047 8.625 3.25ZM13 13.875C13 14.3723 12.8025 14.8492 12.4508 15.2008C12.0992 15.5525 11.6223 15.75 11.125 15.75H7.375C6.87772 15.75 6.40081 15.5525 6.04917 15.2008C5.69754 14.8492 5.5 14.3723 5.5 13.875V5.75H13V13.875Z"
                          fill="#1C212B"
                        />
                        <path
                          d="M8 13.25C8.16576 13.25 8.32473 13.1841 8.44194 13.0669C8.55915 12.9497 8.625 12.7907 8.625 12.625V8.875C8.625 8.70924 8.55915 8.55027 8.44194 8.43306C8.32473 8.31585 8.16576 8.25 8 8.25C7.83424 8.25 7.67527 8.31585 7.55806 8.43306C7.44085 8.55027 7.375 8.70924 7.375 8.875V12.625C7.375 12.7907 7.44085 12.9497 7.55806 13.0669C7.67527 13.1841 7.83424 13.25 8 13.25Z"
                          fill="#1C212B"
                        />
                        <path
                          d="M10.5 13.25C10.6658 13.25 10.8247 13.1841 10.942 13.0669C11.0592 12.9497 11.125 12.7907 11.125 12.625V8.875C11.125 8.70924 11.0592 8.55027 10.942 8.43306C10.8247 8.31585 10.6658 8.25 10.5 8.25C10.3342 8.25 10.1753 8.31585 10.0581 8.43306C9.94085 8.55027 9.875 8.70924 9.875 8.875V12.625C9.875 12.7907 9.94085 12.9497 10.0581 13.0669C10.1753 13.1841 10.3342 13.25 10.5 13.25Z"
                          fill="#1C212B"
                        />
                      </svg>
                    </v-list-item-icon>

                    <v-list-item-title class="item_title"
                      >Delete</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-list>
            </v-menu>
          </div>
        </div>

        <!-- table for users  -->
        <div class="col-12 users_table">
          <v-card class="table_card_container">
            <!-- desktop view  -->
            <div class="captionTable">
              <div class="listing_stats">
                <span class="all">
                  All
                  <span>(322)</span>
                </span>
                |
                <span class="disabled">
                  Answered
                  <span>(289)</span>
                </span>
                |
                <span class="disabled">
                  Unanswered
                  <span>(17)</span>
                </span>
              </div>
              <div class="listing_actions">
                <input
                  type="text"
                  name=""
                  placeholder="Search by property name"
                  value=""
                />
                <div title="filter" class="filterBtn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7L20 7"
                      stroke="#BF9001"
                      stroke-linecap="round"
                    />
                    <path
                      d="M4 7L8 7"
                      stroke="#BF9001"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17 17L20 17"
                      stroke="#BF9001"
                      stroke-linecap="round"
                    />
                    <path
                      d="M4 17L12 17"
                      stroke="#BF9001"
                      stroke-linecap="round"
                    />
                    <circle
                      cx="10"
                      cy="7"
                      r="2"
                      transform="rotate(90 10 7)"
                      stroke="#BF9001"
                      stroke-linecap="round"
                    />
                    <circle
                      cx="15"
                      cy="17"
                      r="2"
                      transform="rotate(90 15 17)"
                      stroke="#BF9001"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <v-btn elevation="0" class="Btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66683 2.66536C5.60596 2.66536 4.58855 3.08679 3.8384 3.83694C3.08826 4.58708 2.66683 5.6045 2.66683 6.66536C2.66683 7.19065 2.77029 7.7108 2.97131 8.1961C3.17233 8.6814 3.46697 9.12236 3.8384 9.49379C4.20984 9.86523 4.65079 10.1599 5.1361 10.3609C5.6214 10.5619 6.14154 10.6654 6.66683 10.6654C7.19212 10.6654 7.71226 10.5619 8.19756 10.3609C8.68287 10.1599 9.12382 9.86523 9.49526 9.49379C9.86669 9.12236 10.1613 8.6814 10.3623 8.1961C10.5634 7.7108 10.6668 7.19065 10.6668 6.66536C10.6668 5.6045 10.2454 4.58708 9.49526 3.83694C8.74511 3.08679 7.7277 2.66536 6.66683 2.66536ZM2.89559 2.89413C3.89579 1.89393 5.25234 1.33203 6.66683 1.33203C8.08132 1.33203 9.43787 1.89393 10.4381 2.89413C11.4383 3.89432 12.0002 5.25088 12.0002 6.66536C12.0002 7.36575 11.8622 8.05927 11.5942 8.70634C11.4116 9.14707 11.1712 9.56036 10.8799 9.93562L14.4716 13.5273C14.7319 13.7876 14.7319 14.2098 14.4716 14.4701C14.2112 14.7305 13.7891 14.7305 13.5288 14.4701L9.93708 10.8784C9.56183 11.1697 9.14853 11.4102 8.70781 11.5927C8.06074 11.8607 7.36721 11.9987 6.66683 11.9987C5.96645 11.9987 5.27292 11.8607 4.62585 11.5927C3.97878 11.3247 3.39084 10.9318 2.89559 10.4366C2.40035 9.94135 2.0075 9.35341 1.73947 8.70634C1.47145 8.05927 1.3335 7.36575 1.3335 6.66536C1.3335 5.25088 1.8954 3.89432 2.89559 2.89413Z"
                      fill="white"
                    />
                  </svg>
                  <span>Search</span>
                </v-btn>
              </div>
            </div>
            <!-- mobile view  -->
            <div class="mobileCaption">
              <div class="contentMobile">
                <v-menu v-model="tab_open" bottom :nudge-bottom="5" offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <div class="relative" v-bind="attrs" v-on="on">
                      <input
                        :class="{ active: tab_open }"
                        style="cursor: pointer !important"
                        disabled
                        v-model="currentView"
                        required
                        type="text"
                        placeholder="Select option"
                      />
                      <div class="absolute dropdownSvg">
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.2361 5.55738C13.1653 5.48597 13.0811 5.4293 12.9882 5.39062C12.8954 5.35194 12.7958 5.33203 12.6953 5.33203C12.5947 5.33203 12.4951 5.35194 12.4023 5.39062C12.3094 5.4293 12.2252 5.48597 12.1544 5.55738L8.66524 9.0465C8.59442 9.1179 8.51016 9.17457 8.41733 9.21325C8.32449 9.25193 8.22492 9.27184 8.12435 9.27184C8.02378 9.27184 7.92421 9.25193 7.83137 9.21325C7.73854 9.17457 7.65428 9.1179 7.58346 9.0465L4.09433 5.55738C4.02351 5.48597 3.93925 5.4293 3.84642 5.39062C3.75358 5.35194 3.65401 5.33203 3.55344 5.33203C3.45287 5.33203 3.35329 5.35194 3.26046 5.39062C3.16763 5.4293 3.08337 5.48597 3.01255 5.55738C2.87066 5.70011 2.79102 5.89319 2.79102 6.09446C2.79102 6.29572 2.87066 6.4888 3.01255 6.63154L6.50929 10.1283C6.93782 10.5563 7.5187 10.7967 8.12435 10.7967C8.73 10.7967 9.31088 10.5563 9.7394 10.1283L13.2361 6.63154C13.378 6.4888 13.4577 6.29572 13.4577 6.09446C13.4577 5.89319 13.378 5.70011 13.2361 5.55738Z"
                            fill="#142232"
                          />
                        </svg>
                      </div>
                    </div>
                  </template>
                  <v-list elevation="0" flat class="dropdownList">
                    <v-list-item
                      @click="currentView = item.title"
                      v-for="(item, index) in listItem"
                      :key="index"
                      class="list_item"
                      :class="{ active_list: currentView == item.title }"
                    >
                      <v-list-item-title class="list_title"
                        ><span class="active">
                          {{ item.title }}
                        </span>
                        <span>({{ item.value }})</span></v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>

                <input
                  type="text"
                  name=""
                  placeholder="Search by property name"
                  value=""
                />

                <div class="d-flex">
                  <div title="filter" class="filterBtn">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 7L20 7"
                        stroke="#BF9001"
                        stroke-linecap="round"
                      />
                      <path
                        d="M4 7L8 7"
                        stroke="#BF9001"
                        stroke-linecap="round"
                      />
                      <path
                        d="M17 17L20 17"
                        stroke="#BF9001"
                        stroke-linecap="round"
                      />
                      <path
                        d="M4 17L12 17"
                        stroke="#BF9001"
                        stroke-linecap="round"
                      />
                      <circle
                        cx="10"
                        cy="7"
                        r="2"
                        transform="rotate(90 10 7)"
                        stroke="#BF9001"
                        stroke-linecap="round"
                      />
                      <circle
                        cx="15"
                        cy="17"
                        r="2"
                        transform="rotate(90 15 17)"
                        stroke="#BF9001"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <v-btn elevation="0" class="Btn">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.66683 2.66536C5.60596 2.66536 4.58855 3.08679 3.8384 3.83694C3.08826 4.58708 2.66683 5.6045 2.66683 6.66536C2.66683 7.19065 2.77029 7.7108 2.97131 8.1961C3.17233 8.6814 3.46697 9.12236 3.8384 9.49379C4.20984 9.86523 4.65079 10.1599 5.1361 10.3609C5.6214 10.5619 6.14154 10.6654 6.66683 10.6654C7.19212 10.6654 7.71226 10.5619 8.19756 10.3609C8.68287 10.1599 9.12382 9.86523 9.49526 9.49379C9.86669 9.12236 10.1613 8.6814 10.3623 8.1961C10.5634 7.7108 10.6668 7.19065 10.6668 6.66536C10.6668 5.6045 10.2454 4.58708 9.49526 3.83694C8.74511 3.08679 7.7277 2.66536 6.66683 2.66536ZM2.89559 2.89413C3.89579 1.89393 5.25234 1.33203 6.66683 1.33203C8.08132 1.33203 9.43787 1.89393 10.4381 2.89413C11.4383 3.89432 12.0002 5.25088 12.0002 6.66536C12.0002 7.36575 11.8622 8.05927 11.5942 8.70634C11.4116 9.14707 11.1712 9.56036 10.8799 9.93562L14.4716 13.5273C14.7319 13.7876 14.7319 14.2098 14.4716 14.4701C14.2112 14.7305 13.7891 14.7305 13.5288 14.4701L9.93708 10.8784C9.56183 11.1697 9.14853 11.4102 8.70781 11.5927C8.06074 11.8607 7.36721 11.9987 6.66683 11.9987C5.96645 11.9987 5.27292 11.8607 4.62585 11.5927C3.97878 11.3247 3.39084 10.9318 2.89559 10.4366C2.40035 9.94135 2.0075 9.35341 1.73947 8.70634C1.47145 8.05927 1.3335 7.36575 1.3335 6.66536C1.3335 5.25088 1.8954 3.89432 2.89559 2.89413Z"
                        fill="white"
                      />
                    </svg>
                    <span>Search</span>
                  </v-btn>
                </div>
              </div>
            </div>
            <v-data-table
              v-if="latest"
              v-model="selected"
              :headers="headers"
              :items="propertyData"
              :single-select="false"
              item-key="user.name"
              :disable-filtering="true"
              :disable-pagination="true"
              :disable-sort="true"
              checkbox-color="var(--primary-color)"
              :hide-default-footer="true"
              show-select
              class="generic_data_table"
            >
              <!-- property details  -->
              <template v-slot:item.user="{ item }">
                <div class="user_content">
                  <div class="user_content_details">
                    <div class="user_details">
                      <h3>
                        {{ item.user.name }}
                      </h3>
                      <p>{{ item.user.email }}</p>
                      <p>{{ item.user.date }}</p>
                      <p style="color: var(--primary-color)">
                        {{ item.user.property }}
                      </p>
                    </div>
                  </div>
                </div>
              </template>
              <!-- message  -->
              <template v-slot:item.message="{ item }">
                <div class="user_content">
                  <p class="table_number_stats views_stats">
                    {{ item.message }}
                  </p>
                </div>
              </template>
              <!-- total ratings and reviews  -->
              <template v-slot:item.ratings="{ item }">
                <div class="user_content">
                  <v-btn class="Btn reply_btn">Reply</v-btn>
                </div>
              </template>
              <!-- actions  -->
              <template v-slot:item.action="{ item }">
                <v-menu min-width="147" bottom offset-y :nudge-bottom="5">
                  <template v-slot:activator="{ on, attrs }">
                    <div v-on="on" v-bind="attrs" style="cursor: pointer">
                      <svg
                        width="4"
                        height="21"
                        viewBox="0 0 4 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.66666 3.83333C2.58714 3.83333 3.33333 3.08714 3.33333 2.16667C3.33333 1.24619 2.58714 0.5 1.66666 0.5C0.746191 0.5 0 1.24619 0 2.16667C0 3.08714 0.746191 3.83333 1.66666 3.83333Z"
                          fill="#BF9001"
                        />
                        <path
                          d="M1.66666 12.1654C2.58714 12.1654 3.33333 11.4192 3.33333 10.4987C3.33333 9.57822 2.58714 8.83203 1.66666 8.83203C0.746191 8.83203 0 9.57822 0 10.4987C0 11.4192 0.746191 12.1654 1.66666 12.1654Z"
                          fill="#BF9001"
                        />
                        <path
                          d="M1.66666 20.5013C2.58714 20.5013 3.33333 19.7551 3.33333 18.8346C3.33333 17.9142 2.58714 17.168 1.66666 17.168C0.746191 17.168 0 17.9142 0 18.8346C0 19.7551 0.746191 20.5013 1.66666 20.5013Z"
                          fill="#BF9001"
                        />
                      </svg>
                    </div>
                  </template>
                  <v-list elevation="0" flat nav dense class="dropdownList">
                    <!-- view users  -->
                    <v-list-item
                      @click="showModal('viewUser')"
                      class="ItemList"
                      style="padding-left: 12px"
                    >
                      <v-list-item-icon style="margin: 10px 5px 0 0 !important">
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="9"
                            cy="8"
                            r="2.25"
                            stroke="#1C212B"
                            stroke-linecap="round"
                          />
                          <circle cx="9" cy="9.5" r="6.75" stroke="#1C212B" />
                          <path
                            d="M13.5 14.5294C13.2346 13.7321 12.6497 13.0275 11.8361 12.5249C11.0224 12.0224 10.0256 11.75 9 11.75C7.97445 11.75 6.97756 12.0224 6.16394 12.5249C5.35032 13.0275 4.76543 13.7321 4.5 14.5294"
                            stroke="#1C212B"
                            stroke-linecap="round"
                          />
                        </svg>
                      </v-list-item-icon>

                      <v-list-item-title class="item_title"
                        >View User</v-list-item-title
                      >
                    </v-list-item>

                    <!-- view email  -->
                    <v-list-item
                      @click="showModal('viewEmail')"
                      class="ItemList"
                      style="padding-left: 12px"
                    >
                      <v-list-item-icon style="margin: 10px 5px 0 0 !important">
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="3"
                            y="5"
                            width="12"
                            height="9"
                            rx="2"
                            stroke="#1C212B"
                          />
                          <path
                            d="M3 7.25L8.10557 9.80279C8.66863 10.0843 9.33137 10.0843 9.89443 9.80279L15 7.25"
                            stroke="#1C212B"
                          />
                        </svg>
                      </v-list-item-icon>

                      <v-list-item-title class="item_title"
                        >View Mail</v-list-item-title
                      >
                    </v-list-item>

                    <!-- delete  -->
                    <v-list-item class="ItemList" style="padding-left: 12px">
                      <v-list-item-icon style="margin: 10px 5px 0 0 !important">
                        <svg
                          class="delete"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.875 4.5H12.9375C12.7924 3.79463 12.4086 3.16084 11.8508 2.70545C11.2929 2.25006 10.5951 2.00091 9.875 2L8.625 2C7.90487 2.00091 7.20707 2.25006 6.64922 2.70545C6.09136 3.16084 5.70756 3.79463 5.5625 4.5H3.625C3.45924 4.5 3.30027 4.56585 3.18306 4.68306C3.06585 4.80027 3 4.95924 3 5.125C3 5.29076 3.06585 5.44973 3.18306 5.56694C3.30027 5.68415 3.45924 5.75 3.625 5.75H4.25V13.875C4.25099 14.7035 4.58055 15.4978 5.16639 16.0836C5.75222 16.6694 6.5465 16.999 7.375 17H11.125C11.9535 16.999 12.7478 16.6694 13.3336 16.0836C13.9194 15.4978 14.249 14.7035 14.25 13.875V5.75H14.875C15.0408 5.75 15.1997 5.68415 15.3169 5.56694C15.4342 5.44973 15.5 5.29076 15.5 5.125C15.5 4.95924 15.4342 4.80027 15.3169 4.68306C15.1997 4.56585 15.0408 4.5 14.875 4.5ZM8.625 3.25H9.875C10.2627 3.25047 10.6407 3.37086 10.9573 3.59465C11.2738 3.81844 11.5134 4.13468 11.6431 4.5H6.85687C6.98661 4.13468 7.22619 3.81844 7.54274 3.59465C7.8593 3.37086 8.23733 3.25047 8.625 3.25ZM13 13.875C13 14.3723 12.8025 14.8492 12.4508 15.2008C12.0992 15.5525 11.6223 15.75 11.125 15.75H7.375C6.87772 15.75 6.40081 15.5525 6.04917 15.2008C5.69754 14.8492 5.5 14.3723 5.5 13.875V5.75H13V13.875Z"
                            fill="#1C212B"
                          />
                          <path
                            d="M8 13.25C8.16576 13.25 8.32473 13.1841 8.44194 13.0669C8.55915 12.9497 8.625 12.7907 8.625 12.625V8.875C8.625 8.70924 8.55915 8.55027 8.44194 8.43306C8.32473 8.31585 8.16576 8.25 8 8.25C7.83424 8.25 7.67527 8.31585 7.55806 8.43306C7.44085 8.55027 7.375 8.70924 7.375 8.875V12.625C7.375 12.7907 7.44085 12.9497 7.55806 13.0669C7.67527 13.1841 7.83424 13.25 8 13.25Z"
                            fill="#1C212B"
                          />
                          <path
                            d="M10.5 13.25C10.6658 13.25 10.8247 13.1841 10.942 13.0669C11.0592 12.9497 11.125 12.7907 11.125 12.625V8.875C11.125 8.70924 11.0592 8.55027 10.942 8.43306C10.8247 8.31585 10.6658 8.25 10.5 8.25C10.3342 8.25 10.1753 8.31585 10.0581 8.43306C9.94085 8.55027 9.875 8.70924 9.875 8.875V12.625C9.875 12.7907 9.94085 12.9497 10.0581 13.0669C10.1753 13.1841 10.3342 13.25 10.5 13.25Z"
                            fill="#1C212B"
                          />
                        </svg>
                      </v-list-item-icon>

                      <v-list-item-title class="item_title"
                        >Delete</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>

            <!-- mobile view  -->
            <v-expansion-panels
              v-if="latest"
              focusable
              flat
              multiple
              accordion
              class="mobileTable"
            >
              <v-expansion-panel
                v-for="(item, index) in propertyData"
                :key="index"
              >
                <v-expansion-panel-header color="#fefefe" class="tableHead">
                  <div class="d-flex" style="align-items: center; gap: 15px">
                    <span
                      style="color: var(--secondary-color); font-size: 14px"
                      >{{ item.user.name }}</span
                    >
                  </div>
                  <template v-slot:actions>
                    <v-icon color="var(--primary-color)"> $expand </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <aside class="expand_user_wrapper">
                    <!-- email  -->
                    <div class="expand_user_content">
                      <span class="tag">Email</span>
                      <div class="user_details">
                        <a :href="`mailto:${item.user.email}`"
                          ><p>{{ item.user.email }}</p></a
                        >
                      </div>
                    </div>
                    <!-- date  -->
                    <div class="expand_user_content">
                      <span class="tag">Date</span>
                      <div class="user_details">
                        <p>{{ item.user.date }}</p>
                      </div>
                    </div>
                    <!-- property type  -->
                    <div class="expand_user_content">
                      <span class="tag">Type</span>
                      <span>{{ item.user.property }}</span>
                    </div>
                    <!-- message  -->
                    <div class="expand_user_content">
                      <span class="tag">Message</span>
                      <span>{{ item.message }}</span>
                    </div>
                    <!-- ratings  -->
                    <div class="expand_user_content">
                      <span class="tag">Ratings</span>
                      <div class="user_content">
                        <v-btn color="white" class="Btn reply_btn">Reply</v-btn>
                      </div>
                    </div>
                    <!-- actions  -->
                    <div class="expand_user_actions_wrapper">
                      <div
                        @click="showModal('viewUser')"
                        class="expand_user_actions"
                      >
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="9"
                            cy="8"
                            r="2.25"
                            stroke="#1C212B"
                            stroke-linecap="round"
                          />
                          <circle cx="9" cy="9.5" r="6.75" stroke="#1C212B" />
                          <path
                            d="M13.5 14.5294C13.2346 13.7321 12.6497 13.0275 11.8361 12.5249C11.0224 12.0224 10.0256 11.75 9 11.75C7.97445 11.75 6.97756 12.0224 6.16394 12.5249C5.35032 13.0275 4.76543 13.7321 4.5 14.5294"
                            stroke="#1C212B"
                            stroke-linecap="round"
                          />
                        </svg>
                        <span>View User</span>
                      </div>

                      <div
                        @click="showModal('viewEmail')"
                        class="expand_user_actions"
                      >
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="3"
                            y="5"
                            width="12"
                            height="9"
                            rx="2"
                            stroke="#1C212B"
                          />
                          <path
                            d="M3 7.25L8.10557 9.80279C8.66863 10.0843 9.33137 10.0843 9.89443 9.80279L15 7.25"
                            stroke="#1C212B"
                          />
                        </svg>
                        <span>View Mail</span>
                      </div>

                      <div class="expand_user_actions">
                        <svg
                          class="delete"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.875 4.5H12.9375C12.7924 3.79463 12.4086 3.16084 11.8508 2.70545C11.2929 2.25006 10.5951 2.00091 9.875 2L8.625 2C7.90487 2.00091 7.20707 2.25006 6.64922 2.70545C6.09136 3.16084 5.70756 3.79463 5.5625 4.5H3.625C3.45924 4.5 3.30027 4.56585 3.18306 4.68306C3.06585 4.80027 3 4.95924 3 5.125C3 5.29076 3.06585 5.44973 3.18306 5.56694C3.30027 5.68415 3.45924 5.75 3.625 5.75H4.25V13.875C4.25099 14.7035 4.58055 15.4978 5.16639 16.0836C5.75222 16.6694 6.5465 16.999 7.375 17H11.125C11.9535 16.999 12.7478 16.6694 13.3336 16.0836C13.9194 15.4978 14.249 14.7035 14.25 13.875V5.75H14.875C15.0408 5.75 15.1997 5.68415 15.3169 5.56694C15.4342 5.44973 15.5 5.29076 15.5 5.125C15.5 4.95924 15.4342 4.80027 15.3169 4.68306C15.1997 4.56585 15.0408 4.5 14.875 4.5ZM8.625 3.25H9.875C10.2627 3.25047 10.6407 3.37086 10.9573 3.59465C11.2738 3.81844 11.5134 4.13468 11.6431 4.5H6.85687C6.98661 4.13468 7.22619 3.81844 7.54274 3.59465C7.8593 3.37086 8.23733 3.25047 8.625 3.25ZM13 13.875C13 14.3723 12.8025 14.8492 12.4508 15.2008C12.0992 15.5525 11.6223 15.75 11.125 15.75H7.375C6.87772 15.75 6.40081 15.5525 6.04917 15.2008C5.69754 14.8492 5.5 14.3723 5.5 13.875V5.75H13V13.875Z"
                            fill="#1C212B"
                          />
                          <path
                            d="M8 13.25C8.16576 13.25 8.32473 13.1841 8.44194 13.0669C8.55915 12.9497 8.625 12.7907 8.625 12.625V8.875C8.625 8.70924 8.55915 8.55027 8.44194 8.43306C8.32473 8.31585 8.16576 8.25 8 8.25C7.83424 8.25 7.67527 8.31585 7.55806 8.43306C7.44085 8.55027 7.375 8.70924 7.375 8.875V12.625C7.375 12.7907 7.44085 12.9497 7.55806 13.0669C7.67527 13.1841 7.83424 13.25 8 13.25Z"
                            fill="#1C212B"
                          />
                          <path
                            d="M10.5 13.25C10.6658 13.25 10.8247 13.1841 10.942 13.0669C11.0592 12.9497 11.125 12.7907 11.125 12.625V8.875C11.125 8.70924 11.0592 8.55027 10.942 8.43306C10.8247 8.31585 10.6658 8.25 10.5 8.25C10.3342 8.25 10.1753 8.31585 10.0581 8.43306C9.94085 8.55027 9.875 8.70924 9.875 8.875V12.625C9.875 12.7907 9.94085 12.9497 10.0581 13.0669C10.1753 13.1841 10.3342 13.25 10.5 13.25Z"
                            fill="#1C212B"
                          />
                        </svg>
                        <span>Delete</span>
                      </div>
                    </div>
                  </aside>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <div class="no_content_data" v-else>
              <div class="no_content svg">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="64" height="64" rx="32" fill="#FFFBF3" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.2929 25.2929C25.6834 24.9024 26.3166 24.9024 26.7071 25.2929L32 30.5858L37.2929 25.2929C37.6834 24.9024 38.3166 24.9024 38.7071 25.2929C39.0976 25.6834 39.0976 26.3166 38.7071 26.7071L33.4142 32L38.7071 37.2929C39.0976 37.6834 39.0976 38.3166 38.7071 38.7071C38.3166 39.0976 37.6834 39.0976 37.2929 38.7071L32 33.4142L26.7071 38.7071C26.3166 39.0976 25.6834 39.0976 25.2929 38.7071C24.9024 38.3166 24.9024 37.6834 25.2929 37.2929L30.5858 32L25.2929 26.7071C24.9024 26.3166 24.9024 25.6834 25.2929 25.2929Z"
                    fill="#BF9001"
                  />
                </svg>
              </div>
              <div class="no_content_tag">
                <h3>No records found</h3>
              </div>
            </div>

            <div class="viewMoreUsers">
              <div class="show_results">
                <span>Showing 1 to 5 of 322 results</span>
              </div>
              <div class="listitng_control">
                <v-menu bottom offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <div class="listing_view_wrapper" v-bind="attrs" v-on="on">
                      <span>{{ perPage }}</span>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.04072 6.37543C3.31734 6.09881 3.76583 6.09881 4.04245 6.37543L8.49992 10.8329L12.9574 6.37543C13.234 6.09881 13.6825 6.09881 13.9591 6.37543C14.2357 6.65206 14.2357 7.10055 13.9591 7.37717L9.00079 12.3355C8.72416 12.6121 8.27567 12.6121 7.99905 12.3355L3.04072 7.37717C2.7641 7.10055 2.7641 6.65206 3.04072 6.37543Z"
                          fill="#6B7280"
                        />
                      </svg>
                    </div>
                  </template>
                  <v-list dense nav class="dropdownList">
                    <v-list-item
                      @click="perPage = item"
                      v-for="(item, index) in items"
                      :key="index"
                      class="list_item"
                      :class="{ active: perPage == item }"
                    >
                      <v-list-item-title class="list_title">{{
                        item
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <span>per page</span>
              </div>
              <v-pagination
                color="var(--primary-color)"
                v-model="page"
                :length="5"
                :total-visible="10"
              ></v-pagination>
            </div>
          </v-card>
        </div>
      </v-row>
    </section>
    <ModalCallViewEmail ref="viewEmail" />
    <ModalCallViewUser ref="viewUser" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab_open: false,
      listItem: [
        { title: "All", value: 322 },
        { title: "Answered", value: 289 },
        { title: "Unanswered", value: 17 },
      ],
      currentView: "All",
      bulk: ["Bulk Item", "Bulk Item", "Bulk Item", "Bulk Item", "Bulk Item"],
      items: [5, 10, 15, 20, 25],
      selected: [],
      page: 1,
      perPage: 5,
      latest: true,
      headers: [
        {
          text: "Name",
          align: "start",
          value: "user",
        },
        { text: "Message", value: "message" },
        { text: "Ratings", value: "ratings" },
        { text: "Action", value: "action" },
      ],
      propertyData: [
        {
          user: {
            name: "Yumiko Yamashita",
            email: "yumiko08@gmail.com",
            date: "21 - Dec - 2022",
            property: "The Villa",
          },
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.",
          ratings: 12,
          action: null,
        },
        {
          user: {
            name: "Leslie Alexander",
            email: "yumiko08@gmail.com",
            date: "21 - Dec - 2022",
            property: "The Villa",
          },
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.",
          ratings: 12,
          action: null,
        },
        {
          user: {
            name: "Anita Alexander",
            email: "yumiko08@gmail.com",
            date: "21 - Dec - 2022",
            property: "The Villa",
          },
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.",
          ratings: 12,
          action: null,
        },
        {
          user: {
            name: "Anita Jerome",
            email: "yumiko08@gmail.com",
            date: "21 - Dec - 2022",
            property: "The Villa",
          },
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.",
          ratings: 12,
          action: null,
        },
        {
          user: {
            name: "Alucard Saitama",
            email: "yumiko08@gmail.com",
            date: "21 - Dec - 2022",
            property: "The Villa",
          },
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.",
          ratings: 12,
          action: null,
        },
      ],
    };
  },
  methods: {
    showModal(type) {
      switch (type) {
        case "viewEmail":
          this.$refs.viewEmail.showDialogue();
          break;
        case "viewUser":
          this.$refs.viewUser.showDialogue();
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.captionTable {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
  .listing_stats {
    width: 50%;
    span {
      &.all {
        color: var(--primary-color);
      }
      &.disabled {
        color: var(--secondary-color);
      }
      color: var(--bar-sub-text-color);
    }
  }
  .listing_actions {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 16px;
    input {
      background: #fff;
      border: 1px solid var(--border02-color);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.07);
      border-radius: 8px;
    }
    .filterBtn {
      margin-top: 4px;
      cursor: pointer;
    }
    .Btn {
      min-width: 10.2rem;
      height: 3.9rem;
      background-color: var(--primary-color);
      border-radius: 8px;
      span {
        color: #fff;
        font-weight: 500;
        font-size: 1.4rem;
        text-transform: initial;
      }
      svg {
        margin-right: 4px;
        display: inline-block;
      }
    }
  }
}
.viewMoreUsers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
  span {
    color: var(--secondary-color);
  }
  .listitng_control {
    display: flex;
    align-items: center;
    gap: 8px;
    .listing_view_wrapper {
      display: flex;
      min-width: 5.9rem;
      min-height: 3.2rem;
      align-items: center;
      gap: 5px;
      justify-content: space-between;
      padding: 7.5px 12px;
      border: 1px solid var(--border02-color);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.07);
      border-radius: 8px;
    }
  }
}
.dropdownList {
  margin: 0;
  padding: 0;
  .list_item {
    border-radius: 0;
    margin-bottom: 0 !important;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    .list_title {
      font-weight: 500;
      font-size: 1.6rem;
      color: var(--secondary-color);
      overflow: visible !important;
      transition: all 0.2s ease-in-out;
    }
    &::before {
      border-radius: 0;
    }
    // &:hover {
    //   background: var(--primary-color);
    //   transition: all 0.2s ease-in-out;
    //   .list_title {
    //     color: #fff;
    //     transition: all 0.2s ease-in-out;
    //   }
    // }
    &.active {
      background: var(--primary-color);
      transition: all 0.2s ease-in-out;
      .list_title {
        color: #fff;
        transition: all 0.2s ease-in-out;
      }
    }
  }
  .ItemList {
    border-radius: 0;
    margin-bottom: 0 !important;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    .item_title {
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--label02-color);
      overflow: visible !important;
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      background: var(--primary-color);
      transition: all 0.2s ease-in-out;
      .item_title {
        color: #fff;
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
        &.delete {
          path {
            fill: #fff !important;
            transition: all 0.2s ease-in-out;
          }
        }
      }
    }
    &:has(.delete):hover {
      background: red;
      transition: all 0.2s ease-in-out;
    }
  }
}
.reply_btn {
  height: 2rem !important;
  background: var(--primary-color) !important;
  text-transform: initial;
  color: #fff;
  min-width: 7.2rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 2px 10px;
  box-shadow: none;
  cursor: pointer;
}

@media (max-width: 540px) {
  .header_wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>