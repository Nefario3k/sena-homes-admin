<template>
  <div>
    <section id="pageBody">
      <v-row class="content_row" style="margin-top: 0">
        <!-- title  -->
        <div class="col-12 header_wrapper">
          <header>Edit FAQ’S Content</header>
        </div>

        <div class="col-12 users_table">
          <v-card class="table_card_container">
            <form class="row row_form">
              <div class="col-12 tabArea">
                <v-tabs v-model="tab" class="tabWrapper">
                  <v-tab
                    v-for="(item, index) in tabItem"
                    :key="index"
                    class="tabList"
                    :class="{ active: tab == index }"
                    >{{ item }}</v-tab
                  >
                </v-tabs>
                <v-divider></v-divider>
              </div>
              <div class="col-12 inputArea tabDropDown">
                <div class="relative">
                  <input
                    class="active"
                    style="cursor: pointer !important"
                    disabled
                    v-model="tabItem[tab]"
                    required
                    type="text"
                    placeholder="Select option"
                  />
                </div>
              </div>

              <div class="col-12 tabWrapper_container">
                <v-tabs-items v-model="tab">
                  <!-- socials section  -->
                  <v-tab-item>
                    <v-row>
                      <v-row v-for="n in 6" :key="n">
                        <!-- header  -->
                        <div class="col-12 edit_section_header">
                          <header class="relative">
                            <span>FAQ {{ n }}</span>
                            <div class="absolute delete_svg">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7 13.7578C10.7279 13.7578 13.75 10.7357 13.75 7.00781C13.75 3.27989 10.7279 0.257812 7 0.257812C3.27208 0.257812 0.25 3.27989 0.25 7.00781C0.25 10.7357 3.27208 13.7578 7 13.7578ZM3.24996 8.47579H10.75V5.53752H3.24996V8.47579Z"
                                  fill="#EE0D0D"
                                />
                              </svg>
                            </div>
                          </header>
                        </div>

                        <!-- question  -->
                        <div
                          class="
                            col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6
                            inputArea
                          "
                        >
                          <label for="question">Question</label>
                          <textarea
                            id="header"
                            placeholder="Description"
                            rows="4"
                            maxlength="2000"
                            cols=""
                          ></textarea>
                        </div>

                        <!-- answer  -->
                        <div
                          class="
                            col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6
                            inputArea
                          "
                        >
                          <label for="question">Answer</label>
                          <textarea
                            id="header"
                            placeholder="Description"
                            rows="4"
                            maxlength="2000"
                            cols=""
                          ></textarea>
                        </div>
                      </v-row>

                      <div class="col-12 inputArea amenities_section">
                        <div class="amenities_section_wrapper">
                          <div class="captionTable rotate">
                            <v-btn elevation="0" class="Btn">
                              <div class="Btn_wrapper">
                                <span>Add new</span>
                              </div>
                            </v-btn>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 inputArea listing_action">
                        <v-btn
                          to="/admin/manage?query=Admins"
                          class="Btn cancel"
                          >Cancel</v-btn
                        >
                        <v-btn class="Btn upload">Save</v-btn>
                      </div>
                    </v-row>
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </form>
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
      tab: 0,
      socials: [
        { title: "Facebook", value: "" },
        { title: "Instagram", value: "" },
        { title: "Twitter", value: "" },
        { title: "Linkedin", value: "" },
        { title: "WhatsApp", value: "" },
      ],
      tabItem: ["FAQ’S"],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.content_row {
  & > .col-12 {
    padding-right: 27px;
  }
}
.table_card_container {
  padding: 30px 19px 104.79px;
  .row_form {
    .edit_section_header {
      padding-top: 0;
      header {
        font-weight: 600;
        width: max-content;
        font-size: 2rem;
        color: var(--secondary-color);
        margin-top: 10px;
        .delete_svg {
          cursor: pointer;
          top: -9px;
          right: -18px;
          z-index: 222;
        }
      }
      &.underSide {
        padding-top: 22px;
      }
    }
    .inputArea {
      &.listing_action {
        .Btn {
          min-height: 4.2rem;
          max-width: 21.4rem;
          width: 100%;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.6rem;
          border: 1px solid var(--border02-color);
          color: var(--border02-color);
          background: transparent;
          text-transform: initial;
          box-shadow: none !important;
          &.upload {
            border-color: var(--primary-color) !important;
            background: var(--primary-color) !important;
            color: #fff;
            margin-left: 17.2px;
          }
        }
      }
      &.amenities_section .amenities_section_wrapper {
        padding-bottom: 32px;
        .captionTable {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 5rem;
          border-bottom: 1px solid var(--border-color);
          margin: 0 9px;
          & span {
            font-weight: 700;
            font-size: 2rem;
            color: var(--bar-text-color);
            &.showInput {
              text-decoration: underline;
              &:hover {
                color: var(--primary-color);
              }
            }
          }
          &.rotate {
            border-top: 1px solid var(--border-color);
            border-bottom: none;
            .Btn {
              min-width: 9.2rem;
              height: 3.6rem;
              background-color: var(--primary-color);
              border-radius: 8px;
              box-shadow: none !important;
              margin-top: 9px;
              .Btn_wrapper {
                display: flex;
                align-items: center;
                gap: 5px;
                svg {
                  width: 20px;
                  height: 20px;
                  margin-top: -2px;
                }
                span {
                  color: #fff;
                  font-weight: 500;
                  font-size: 1.4rem;
                  text-transform: initial;
                }
              }
            }
          }
        }
        .imagesRow {
          padding: 0 25px;
          margin-top: 16px;
          .images_container {
            margin-top: 8px;
            border: 1px solid var(--border03-color);
            border-radius: 8px;
            padding: 22px 14px 14px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 60px;
            .img_logo {
              height: 100%;
              svg {
                width: 100%;
                height: 100%;
              }
              .delete_svg {
                top: -7px;
                right: -5px;
                cursor: pointer;
              }
            }
          }
        }
      }
      label {
        font-weight: 500;
        font-size: 1.4rem;
        color: var(--secondary-color);
        margin-bottom: 4px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        svg {
          cursor: pointer;
        }
      }
      input {
        border: 1px solid var(--border03-color);
        border-radius: 8px;
        min-height: 4.5rem;
        &::placeholder {
          font-size: 1.3rem;
          color: var(--placeholer-color);
          font-weight: 400;
        }
        &.active {
          border-color: var(--primary-color);
        }
        &:focus {
          border-color: var(--primary-color);
        }
        &.content {
          border-color: var(--primary-color);
        }
      }
      &.fileInputArea {
        & svg {
          cursor: pointer;
          &:hover {
            rect {
              stroke: var(--primary-color);
            }
            path {
              fill: var(--primary-color);
            }
          }
        }
      }
    }
  }
}

.tabWrapper {
  .tabList {
    font-weight: 400;
    font-size: 1.8rem;
    color: var(--secondary-color);
    text-transform: initial;
    padding: 0 32px;
    &.active {
      color: var(--primary-color);
    }
    &:first-child {
      margin-left: 42px;
    }
  }
}
textarea {
  border: 1px solid var(--border03-color);
  border-radius: 8px;
  resize: none;
  font-size: 1.4rem;
  color: var(--placeholer-color);
  &::placeholder {
    font-size: 1.3rem;
    color: var(--placeholer-color);
    font-weight: 400;
  }
  &.content {
    border-color: var(--primary-color) !important;
  }
}
</style>