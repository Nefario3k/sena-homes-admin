<template>
  <div>
    <section id="pageBody">
      <v-row style="margin-top: 0">
        <div class="col-12 col-md-8 col-lg-8 col-xl-8">
          <v-row class="content_row">
            <!-- title  -->
            <div class="col-12 header_wrapper">
              <header>Dashboard</header>
            </div>

            <!-- analytics  -->
            <div class="col-12 row" style="margin: 0; padding-right: 0">
              <div
                class="col-6 col-md-4 col-lg-4 col-xl-4"
                style="padding-left: 0"
              >
                <v-card flat class="analyticsCard">
                  <h3>Total Properties</h3>
                  <h4>721K</h4>
                </v-card>
              </div>
              <div
                class="col-6 col-md-4 col-lg-4 col-xl-4"
                style="padding-left: 0"
              >
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

            <!-- informatics  -->
            <div class="col-12 info_wrapper">
              <header>Latest Users</header>
            </div>

            <!-- table for users  -->
            <div class="col-12 users_table">
              <v-card class="table_card_container">
                <div v-if="!latest" class="captionTable">
                  <span>Recent Activities</span>
                </div>
                <v-data-table
                  v-if="latest"
                  caption="Latest User Signups"
                  v-model="selected"
                  :headers="headers"
                  :items="userData"
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
                  <!-- user details  -->
                  <template v-slot:item.user="{ item }">
                    <div class="user_content">
                      <div class="user_content_details">
                        <div class="userImage">
                          <span>la</span>
                        </div>
                        <div class="user_details">
                          <h3>
                            {{ item.user.name }}
                          </h3>
                          <a :href="`mailto:${item.user.email}`"
                            ><p>{{ item.user.email }}</p></a
                          >
                          <a :href="`tel:${item.user.phone}`"
                            ><p>{{ item.user.phone }}</p></a
                          >
                          <p>{{ item.user.date }}</p>
                        </div>
                      </div>
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
                          <v-list-item-icon
                            style="margin: 10px 5px 0 0 !important"
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
                              <circle
                                cx="9"
                                cy="9.5"
                                r="6.75"
                                stroke="#1C212B"
                              />
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

                        <!-- edit  -->
                        <v-list-item
                          @click="showModal('edit')"
                          class="ItemList"
                          style="padding-left: 12px"
                        >
                          <v-list-item-icon
                            style="margin: 10px 5px 0 0 !important"
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
                              <circle
                                cx="9"
                                cy="9.5"
                                r="6.75"
                                stroke="#1C212B"
                              />
                              <path
                                d="M13.5 14.5294C13.2346 13.7321 12.6497 13.0275 11.8361 12.5249C11.0224 12.0224 10.0256 11.75 9 11.75C7.97445 11.75 6.97756 12.0224 6.16394 12.5249C5.35032 13.0275 4.76543 13.7321 4.5 14.5294"
                                stroke="#1C212B"
                                stroke-linecap="round"
                              />
                            </svg>
                          </v-list-item-icon>

                          <v-list-item-title class="item_title"
                            >Edit User</v-list-item-title
                          >
                        </v-list-item>

                        <!-- delete  -->
                        <v-list-item
                          class="ItemList"
                          style="padding-left: 12px"
                        >
                          <v-list-item-icon
                            style="margin: 10px 5px 0 0 !important"
                          >
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
                    v-for="(item, index) in userData"
                    :key="index"
                  >
                    <v-expansion-panel-header color="#fefefe" class="tableHead">
                      <div
                        class="d-flex"
                        style="align-items: center; gap: 15px"
                      >
                        <div class="userImage">
                          <span>la</span>
                        </div>
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
                        <!-- phone  -->
                        <div class="expand_user_content">
                          <span class="tag">Phone</span>
                          <div class="user_details">
                            <a :href="`tel:${item.user.phone}`"
                              ><p>{{ item.user.phone }}</p></a
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
                        <!-- actions  -->
                        <div class="expand_user_actions_wrapper">
                          <!-- view user  -->
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
                              <circle
                                cx="9"
                                cy="9.5"
                                r="6.75"
                                stroke="#1C212B"
                              />
                              <path
                                d="M13.5 14.5294C13.2346 13.7321 12.6497 13.0275 11.8361 12.5249C11.0224 12.0224 10.0256 11.75 9 11.75C7.97445 11.75 6.97756 12.0224 6.16394 12.5249C5.35032 13.0275 4.76543 13.7321 4.5 14.5294"
                                stroke="#1C212B"
                                stroke-linecap="round"
                              />
                            </svg>
                            <span>View User</span>
                          </div>

                          <!-- edit user  -->
                          <div
                            @click="showModal('edit')"
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
                              <circle
                                cx="9"
                                cy="9.5"
                                r="6.75"
                                stroke="#1C212B"
                              />
                              <path
                                d="M13.5 14.5294C13.2346 13.7321 12.6497 13.0275 11.8361 12.5249C11.0224 12.0224 10.0256 11.75 9 11.75C7.97445 11.75 6.97756 12.0224 6.16394 12.5249C5.35032 13.0275 4.76543 13.7321 4.5 14.5294"
                                stroke="#1C212B"
                                stroke-linecap="round"
                              />
                            </svg>
                            <span>Edit User</span>
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

                <!-- no data  -->
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

                <div class="viewMoreUsers"><span>View All</span></div>
              </v-card>
            </div>
          </v-row>
        </div>
        <div class="col-12 col-md-4 col-lg-4 col-xl-4 sidebar_informatics">
          <div class="main_recent_container">
            <!-- call back request  -->
            <div class="header_informatics">
              <h3>Recent Call Back Requests</h3>
              <svg
                width="14"
                height="4"
                viewBox="0 0 14 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0.75C2.69036 0.75 3.25 1.30964 3.25 2C3.25 2.69036 2.69036 3.25 2 3.25C1.30964 3.25 0.75 2.69036 0.75 2C0.75 1.30964 1.30964 0.75 2 0.75Z"
                  fill="#1C1C1C"
                />
                <path
                  d="M7 0.75C7.69036 0.75 8.25 1.30964 8.25 2C8.25 2.69036 7.69036 3.25 7 3.25C6.30964 3.25 5.75 2.69036 5.75 2C5.75 1.30964 6.30964 0.75 7 0.75Z"
                  fill="#1C1C1C"
                />
                <path
                  d="M13.25 2C13.25 1.30964 12.6904 0.75 12 0.75C11.3096 0.75 10.75 1.30964 10.75 2C10.75 2.69036 11.3096 3.25 12 3.25C12.6904 3.25 13.25 2.69036 13.25 2Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>

            <div class="list">
              <div v-for="n in 5" :key="n" class="user_content_details">
                <div class="userImage">
                  <span>la</span>
                </div>
                <div class="user_details">
                  <p>
                    <span>56 min ago</span>-<span class="property_name"
                      >Imperial Avenue</span
                    >
                  </p>
                  <h3>Larry Doyle</h3>
                  <p>Is this Available ...</p>
                </div>
              </div>
            </div>
            <!-- top properties  -->
            <div class="header_informatics" style="margin-top: 28px">
              <h3>Top Properties</h3>
              <svg
                width="14"
                height="4"
                viewBox="0 0 14 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0.75C2.69036 0.75 3.25 1.30964 3.25 2C3.25 2.69036 2.69036 3.25 2 3.25C1.30964 3.25 0.75 2.69036 0.75 2C0.75 1.30964 1.30964 0.75 2 0.75Z"
                  fill="#1C1C1C"
                />
                <path
                  d="M7 0.75C7.69036 0.75 8.25 1.30964 8.25 2C8.25 2.69036 7.69036 3.25 7 3.25C6.30964 3.25 5.75 2.69036 5.75 2C5.75 1.30964 6.30964 0.75 7 0.75Z"
                  fill="#1C1C1C"
                />
                <path
                  d="M13.25 2C13.25 1.30964 12.6904 0.75 12 0.75C11.3096 0.75 10.75 1.30964 10.75 2C10.75 2.69036 11.3096 3.25 12 3.25C12.6904 3.25 13.25 2.69036 13.25 2Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>

            <div class="list">
              <div v-for="n in 5" :key="n" class="user_content_details popProp">
                <nuxt-link to="/">
                  <p>Imperial Avenue</p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </v-row>
    </section>
    <ModalCallViewUser ref="viewUser" />
    <ModalEditUser ref="editUser" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      headers: [
        {
          text: "Name",
          align: "start",
          value: "user",
        },
        { text: "Reviews & Ratings", value: "ratings" },
        { text: "Favourites", value: "favourites" },
        { text: "Action", value: "action" },
      ],
      userData: [
        {
          user: {
            name: "Leslie Alexander",
            email: "leslie026@example.com",
            phone: "+234 1234 567 890",
            date: "20 - Dec - 2022",
          },
          ratings: 12,
          favourites: 32,
          action: 24,
        },
        {
          user: {
            name: "Frank Alexander",
            email: "leslie026@example.com",
            phone: "+234 1234 567 890",
            date: "20 - Dec - 2022",
          },
          ratings: 2,
          favourites: 15,
          action: 37,
        },
        {
          user: {
            name: "Davy Alexander",
            email: "leslie026@example.com",
            phone: "+234 1234 567 890",
            date: "20 - Dec - 2022",
          },
          ratings: 23,
          favourites: 10,
          action: 23,
        },
      ],
      latest: true,
    };
  },
  methods: {
    showModal(type) {
      switch (type) {
        case "edit":
          this.$refs.editUser.showDialogue();
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

<style scoped lang="scss">
.content_row {
  margin: 0;
  margin-top: 39px !important;
  & > .col-12 {
    padding-left: 27px;
  }
  .header_wrapper {
    header {
      font-weight: 700;
      color: var(--bar-text-color);
      font-size: 3rem;
    }
  }
  .analyticsCard {
    background: #fff;
    border-radius: 16px;
    box-shadow: none;
    height: 11.2rem;
    max-height: 15.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 24px;
    gap: 12px;
    h3 {
      font-weight: 600;
      font-size: 1.4rem;
      color: var(--info-dark-color);
      text-transform: capitalize;
    }
    h4 {
      font-weight: 600;
      font-size: 2.4rem;
      color: var(--info-dark-color);
      text-transform: uppercase;
    }
  }
  .info_wrapper {
    header {
      color: var(--secondary-color);
      font-weight: 600;
      font-size: 2rem;
      padding-top: 6px;
    }
  }
  .users_table {
    .table_card_container {
      background: #fff;
      border-radius: 12px;
      box-shadow: none !important;

      .userImage {
        width: 4rem;
        height: 4rem;
        background-color: var(--secondary-color);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 50%;
        span {
          color: #fff;
          text-transform: uppercase;
          font-weight: 500;
          font-size: 1.8rem;
        }
      }
    }
  }
  .user_details {
    display: flex;
    flex-direction: column;
    h3 {
      font-weight: 500;
      color: var(--bar-text-color);
      font-size: 1.4rem;
    }
    a {
      &:hover {
        p {
          color: var(--primary-color);
          transition: all 0.2s ease-in-out;
        }
      }
    }
    p {
      margin: 0;
      color: var(--bar-sub-text-color);
      font-weight: 400;
      font-size: 1.4rem;
      transition: all 0.2s ease-in-out;
    }
  }
  p.table_number_stats {
    color: var(--primary-color);
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0;
  }
  .viewMoreUsers {
    text-align: left;
    border-top: 1px solid var(--border-color);
    padding: 8px 16px;
    span {
      color: var(--primary-color);
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
  .captionTable {
    text-align: left;
    border-bottom: 1px solid var(--border-color);
    padding: 8px 16px;
    span {
      color: var(--secondary-color);
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
  .no_content_data {
    min-height: 27.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-gap: 20px;
    text-align: center;
    h3 {
      font-weight: 700;
      font-size: 2.4rem;
      color: var(--bar-text-color);
    }
    span {
      font-weight: 500;
      font-size: 1.6rem;
      color: var(--bar-sub-text-color);
    }
  }
}
.sidebar_informatics {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 0;
  border-bottom: 0;
  .main_recent_container {
    padding: 22px 20px;
    height: 100%;
    width: 100%;
    .header_informatics {
      display: flex;
      align-items: center;
      justify-content: space-between;
      grid-gap: 10px;
      h3 {
        text-transform: capitalize;
        font-weight: 600;
        font-size: 1.4rem;
        color: var(--info-dark-color);
      }
      svg {
        cursor: pointer;
      }
    }
    .list {
      .user_content_details {
        margin: 10px 0;
        .userImage {
          width: 2rem;
          height: 2rem;
          background-color: var(--secondary-color);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 50%;
          span {
            color: #fff;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 1rem;
          }
        }
        .user_details {
          display: flex;
          flex-direction: column;
          h3 {
            font-weight: 400;
            color: var(--info-dark-color);
            font-size: 1.4rem;
          }
          a {
            &:hover {
              p {
                color: var(--primary-color);
                transition: all 0.2s ease-in-out;
              }
            }
          }
          p {
            margin: 0;
            color: var(--bar-sub-text-color);
            font-weight: 400;
            font-size: 1rem;
            transition: all 0.2s ease-in-out;
            .property_name {
              color: var(--primary-color);
            }
          }
        }
        & > a {
          p {
            color: var(--primary-color);
            font-weight: 400;
            font-size: 1.4rem;
            margin: 0;
          }
        }
        &.popProp {
          padding-bottom: 0;
        }
      }
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

@media (max-width: 959px) {
  .row.content_row > .col-12 {
    padding: 0 !important;
  }
}
</style>