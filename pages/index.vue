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

@media (max-width: 959px) {
  .row.content_row > .col-12 {
    padding: 0 !important;
  }
}
</style>