<template>
  <div>
    <section id="pageBody">
      <v-row class="content_row" style="margin-top: 0">
        <!-- title  -->
        <div class="col-12 header_wrapper">
          <header>Edit Socials Content</header>
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
                      <!-- socials  -->
                      <div
                        v-for="(social, index) in socials"
                        :key="index"
                        class="
                          col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6
                          inputArea
                        "
                      >
                        <label :for="social.title">{{ social.title }}</label>

                        <input
                          :id="social.title"
                          placeholder="Enter link"
                          type="text"
                          name=""
                          v-model="social.value"
                        />
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
      tabItem: ["Socials"],
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
        font-size: 2rem;
        color: var(--secondary-color);
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
        border: 1px solid var(--border03-color);
        filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.07));
        border-radius: 12px;
        padding-bottom: 20px;
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