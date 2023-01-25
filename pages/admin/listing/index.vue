<template>
  <div>
    <section id="pageBody">
      <v-row class="content_row" style="margin-top: 0">
        <!-- title  -->
        <div class="col-12 header_wrapper">
          <header>Listings</header>
          <div class="listing_header_btns desktop_btns">
            <v-btn to="/admin/listing/create?query=Listing" class="Btn">
              <div class="Btn_wrapper">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 4L8 12" stroke="white" stroke-linecap="round" />
                  <path d="M12 8L4 8" stroke="white" stroke-linecap="round" />
                </svg>

                <span>New Listing</span>
              </div>
            </v-btn>
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
                <v-list-item
                  v-for="(item, index) in bulk"
                  :key="index"
                  class="list_item"
                >
                  <v-list-item-title class="list_title">{{
                    item
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>

        <!-- analytics  -->
        <div class="col-12 row" style="margin: 0; padding-right: 15px">
          <div class="col-6 col-md-4 col-lg-4 col-xl-4" style="padding-left: 0">
            <v-card flat class="analyticsCard">
              <h3>Total Properties</h3>
              <h4>721K</h4>
            </v-card>
          </div>
          <div class="col-6 col-md-4 col-lg-4 col-xl-4" style="padding-left: 0">
            <v-card flat class="analyticsCard">
              <h3>Total Users</h3>
              <h4>367K</h4>
            </v-card>
          </div>
          <div
            class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
            style="padding-left: 0"
          >
            <v-card flat class="analyticsCard">
              <h3>Total Call Back Requests</h3>
              <h4>1,156</h4>
            </v-card>
          </div>
        </div>

        <!-- mobile View  -->

        <!-- title  -->
        <div class="col-12 header_wrapper mobile_view_540">
          <div class="listing_header_btns">
            <v-btn to="/admin/listing/create?query=Listing" class="Btn">
              <div class="Btn_wrapper">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 4L8 12" stroke="white" stroke-linecap="round" />
                  <path d="M12 8L4 8" stroke="white" stroke-linecap="round" />
                </svg>

                <span>New Listing</span>
              </div>
            </v-btn>
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
                <v-list-item
                  v-for="(item, index) in bulk"
                  :key="index"
                  class="list_item"
                >
                  <v-list-item-title class="list_title">{{
                    item
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>

        <!-- table for users  -->
        <div class="col-12 users_table">
          <v-card class="table_card_container">
            <div class="captionTable">
              <div class="listing_stats">
                <span class="all">
                  All
                  <span>(7)</span>
                </span>
                |
                <span class="disabled">
                  Disabled
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
                      <p>{{ item.user.phone }}</p>
                      <p>{{ item.user.date }}</p>
                    </div>
                  </div>
                </div>
              </template>
              <!-- views  -->
              <template v-slot:item.views="{ item }">
                <div class="user_content">
                  <p class="table_number_stats views_stats">
                    {{ item.views }}
                  </p>
                </div>
              </template>
              <!-- total ratings and reviews  -->
              <template v-slot:item.ratings="{ item }">
                <div class="user_content">
                  <p class="table_number_stats">{{ item.ratings }}</p>
                </div>
              </template>
              <!-- total favourites  -->
              <template v-slot:item.favourites="{ item }">
                <div class="user_content">
                  <p class="table_number_stats">{{ item.favourites }}</p>
                </div>
              </template>
              <!-- call back requests  -->
              <template v-slot:item.cBR="{ item }">
                <div class="user_content">
                  <p class="table_number_stats">{{ item.cBR }}</p>
                </div>
              </template>
              <!-- feature  -->
              <template v-slot:item.featured="{ item }">
                <div class="user_content">
                  <v-switch
                    style="margin-left: 3px"
                    color="var(--primary-color)"
                    v-model="item.featured"
                    inset
                  ></v-switch>
                </div>
              </template>
              <!-- actions  -->
              <template v-slot:item.action="{ item }">
                <div style="cursor: pointer">
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
                  <div class="d-flex" style="align-items: center">
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
                    <!-- address  -->
                    <div class="expand_user_content">
                      <span class="tag">Address</span>
                      <span> {{ item.user.email }}</span>
                    </div>
                    <!-- type  -->
                    <div class="expand_user_content">
                      <span class="tag">Type</span>
                      <span>{{ item.user.phone }}</span>
                    </div>
                    <!-- date  -->
                    <div class="expand_user_content">
                      <span class="tag">Date</span>
                      <span>{{ item.user.date }}</span>
                    </div>
                    <!-- views  -->
                    <div class="expand_user_content">
                      <span class="tag">Views</span>
                      <span>{{ item.views }}</span>
                    </div>
                    <!-- ratings  -->
                    <div class="expand_user_content">
                      <span class="tag">Reviews & Ratings</span>
                      <span>{{ item.ratings }}</span>
                    </div>
                    <!-- favourites  -->
                    <div class="expand_user_content">
                      <span class="tag">Favourites</span>
                      <span>{{ item.favourites }}</span>
                    </div>
                    <!-- cbr  -->
                    <div class="expand_user_content">
                      <span class="tag">Call Back Requests</span>
                      <span>{{ item.cBR }}</span>
                    </div>
                    <!-- featured  -->
                    <div class="expand_user_content">
                      <span class="tag">Feature</span>
                      <v-switch
                        style="margin-left: 3px"
                        color="var(--primary-color)"
                        v-model="item.featured"
                        inset
                      ></v-switch>
                    </div>
                    <!-- actions  -->
                    <div class="expand_user_actions_wrapper">
                      <div class="expand_user_actions">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1016_9017)">
                            <path
                              d="M7.00054 1.75C10.1459 1.75 12.7627 4.01333 13.3116 7C12.7633 9.98667 10.1459 12.25 7.00054 12.25C3.8552 12.25 1.23837 9.98667 0.689453 7C1.23779 4.01333 3.8552 1.75 7.00054 1.75ZM7.00054 11.0833C8.19023 11.0831 9.34459 10.679 10.2747 9.93718C11.2048 9.19538 11.8556 8.15983 12.1205 7C11.8546 5.84109 11.2034 4.80667 10.2734 4.06585C9.34338 3.32503 8.18955 2.92164 7.00054 2.92164C5.81153 2.92164 4.65769 3.32503 3.72767 4.06585C2.79766 4.80667 2.14648 5.84109 1.88062 7C2.14551 8.15983 2.79626 9.19538 3.72637 9.93718C4.65648 10.679 5.81085 11.0831 7.00054 11.0833ZM7.00054 9.625C6.30434 9.625 5.63666 9.34844 5.14438 8.85615C4.6521 8.36387 4.37554 7.69619 4.37554 7C4.37554 6.30381 4.6521 5.63613 5.14438 5.14384C5.63666 4.65156 6.30434 4.375 7.00054 4.375C7.69673 4.375 8.36441 4.65156 8.85669 5.14384C9.34897 5.63613 9.62554 6.30381 9.62554 7C9.62554 7.69619 9.34897 8.36387 8.85669 8.85615C8.36441 9.34844 7.69673 9.625 7.00054 9.625ZM7.00054 8.45833C7.38731 8.45833 7.75824 8.30469 8.03173 8.0312C8.30522 7.75771 8.45887 7.38677 8.45887 7C8.45887 6.61323 8.30522 6.24229 8.03173 5.9688C7.75824 5.69531 7.38731 5.54167 7.00054 5.54167C6.61376 5.54167 6.24283 5.69531 5.96934 5.9688C5.69585 6.24229 5.5422 6.61323 5.5422 7C5.5422 7.38677 5.69585 7.75771 5.96934 8.0312C6.24283 8.30469 6.61376 8.45833 7.00054 8.45833Z"
                              fill="#0061F7"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1016_9017">
                              <rect width="14" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>View Details</span>
                      </div>

                      <div class="expand_user_actions">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33398 12.25V11.0833C9.33398 10.4645 9.08815 9.871 8.65057 9.43342C8.21298 8.99583 7.61949 8.75 7.00065 8.75H2.91732C2.29848 8.75 1.70499 8.99583 1.2674 9.43342C0.829817 9.871 0.583984 10.4645 0.583984 11.0833V12.25"
                            stroke="#0061F7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.95833 6.41667C6.247 6.41667 7.29167 5.372 7.29167 4.08333C7.29167 2.79467 6.247 1.75 4.95833 1.75C3.66967 1.75 2.625 2.79467 2.625 4.08333C2.625 5.372 3.66967 6.41667 4.95833 6.41667Z"
                            stroke="#0061F7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.5 4.6665L13.4167 7.58317"
                            stroke="#0061F7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.4167 4.6665L10.5 7.58317"
                            stroke="#0061F7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>Disconnect</span>
                      </div>
                    </div>
                  </aside>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <div class="no_content_data" v-else>
              <div class="no_content svg">
                <svg
                  width="101"
                  height="101"
                  viewBox="0 0 101 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.279297"
                    width="100.441"
                    height="100.441"
                    rx="50.2207"
                    fill="#FFFBF3"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.8474 34.3213C48.8285 33.3402 50.1591 32.7891 51.5465 32.7891C52.934 32.7891 54.2646 33.3402 55.2456 34.3213C56.0878 35.1635 56.6132 36.2632 56.7451 37.4354C58.647 38.3311 60.2922 39.7061 61.5137 41.4341C62.9709 43.4957 63.7532 45.9584 63.7529 48.483C63.7529 48.4831 63.7529 48.4829 63.7529 48.483V53.9898C63.7529 54.2262 63.7994 54.4605 63.8898 54.6788C63.9802 54.8972 64.1127 55.0955 64.2798 55.2626C64.2798 55.2627 64.2797 55.2626 64.2798 55.2626L66.7298 57.7126C67.2285 58.2113 67.3777 58.9614 67.1078 59.613C66.8379 60.2646 66.202 60.6894 65.4967 60.6894H58.5216C58.5216 62.5393 57.7868 64.3135 56.4787 65.6216C55.1706 66.9296 53.3965 67.6645 51.5465 67.6645C49.6966 67.6645 47.9225 66.9296 46.6144 65.6216C45.3063 64.3135 44.5715 62.5393 44.5715 60.6894H37.5964C36.8911 60.6894 36.2552 60.2646 35.9853 59.613C35.7154 58.9614 35.8646 58.2113 36.3633 57.7126L38.8133 55.2626C39.1507 54.9252 39.3401 54.4672 39.3401 53.9916V48.483C39.3401 43.5992 42.2088 39.3878 46.348 37.4358C46.4798 36.2635 47.0052 35.1636 47.8474 34.3213ZM61.3525 57.2019C61.0741 56.8378 60.8437 56.4383 60.6676 56.013C60.402 55.3716 60.2653 54.6841 60.2654 53.9898C60.2654 53.9898 60.2654 53.9899 60.2654 53.9898V48.483C60.2656 46.6795 59.7068 44.92 58.6657 43.4472C57.6247 41.9744 56.1527 40.8605 54.4524 40.2589C53.7559 40.0125 53.2903 39.3538 53.2903 38.615V38.0204C53.2903 37.5579 53.1066 37.1144 52.7796 36.7873C52.4526 36.4603 52.009 36.2766 51.5465 36.2766C51.0841 36.2766 50.6405 36.4603 50.3135 36.7873C49.9865 37.1144 49.8028 37.5579 49.8028 38.0204V38.615C49.8028 39.3539 49.337 40.0126 48.6404 40.259C45.252 41.4573 42.8277 44.6903 42.8277 48.483V53.9916C42.8277 55.1575 42.4418 56.2849 41.7406 57.2019H61.3525ZM48.059 60.6894C48.059 61.6144 48.4264 62.5014 49.0805 63.1555C49.7345 63.8095 50.6216 64.177 51.5465 64.177C52.4715 64.177 53.3586 63.8095 54.0126 63.1555C54.6667 62.5014 55.0341 61.6144 55.0341 60.6894H48.059Z"
                    fill="#BF9001"
                  />
                </svg>
              </div>
              <div class="no_content_tag">
                <h3>No recent activities here</h3>
                <span>Please check again later</span>
              </div>
            </div>

            <div class="viewMoreUsers">
              <div class="show_results">
                <span>Showing 1 to 5 of 7 results</span>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      page: 1,
      headers: [
        {
          text: "Name",
          align: "start",
          value: "user",
        },
        { text: "Views", value: "views" },
        { text: "Reviews & Ratings", value: "ratings" },
        { text: "Favourites", value: "favourites" },
        { text: "Call Back Requests", value: "cBR" },
        { text: "Feature", value: "featured" },
        { text: "Action", value: "action" },
      ],
      propertyData: [
        {
          user: {
            name: "AL Quoz 4",
            email: "Imperial Avenue, Dubai, Downtown Dubai",
            phone: "Residential",
            date: "20 - Dec - 2022",
          },
          views: 12,
          ratings: 12,
          favourites: 32,
          cBR: 32,
          featured: false,
          action: 24,
        },
        {
          user: {
            name: "The Villa",
            email: "Imperial Avenue, Dubai, Downtown Dubai",
            phone: "Residential",
            date: "20 - Dec - 2022",
          },
          views: 2,
          ratings: 2,
          favourites: 15,
          cBR: 15,
          featured: false,
          action: 37,
        },
        {
          user: {
            name: "Imperial Avenue",
            email: "Imperial Avenue, Dubai, Downtown Dubai",
            phone: "Residential",
            date: "20 - Dec - 2022",
          },
          views: 23,
          ratings: 23,
          favourites: 10,
          cBR: 10,
          featured: false,
          action: 23,
        },
        {
          user: {
            name: "AL Quoz 5",
            email: "Imperial Avenue, Dubai, Downtown Dubai",
            phone: "Residential",
            date: "20 - Dec - 2022",
          },
          views: 23,
          ratings: 23,
          favourites: 10,
          cBR: 10,
          featured: false,
          action: 23,
        },
        {
          user: {
            name: "AL Quoz 6",
            email: "Imperial Avenue, Dubai, Downtown Dubai",
            phone: "Residential",
            date: "20 - Dec - 2022",
          },
          views: 23,
          ratings: 23,
          favourites: 10,
          cBR: 10,
          featured: false,
          action: 23,
        },
      ],
      items: [5, 10, 15, 20, 25],
      bulk: ["Bulk Item", "Bulk Item", "Bulk Item", "Bulk Item", "Bulk Item"],
      latest: true,
      perPage: 5,
    };
  },
};
</script>

<style lang="scss" scoped>
.content_row {
  & > .col-12 {
    padding-right: 27px;
  }
}
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
}
</style>