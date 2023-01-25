<template>
  <div>
    <section id="pageBody">
      <v-row class="content_row" style="margin-top: 0">
        <!-- title  -->
        <div class="col-12 header_wrapper">
          <header>Admin</header>
        </div>

        <div class="col-12 users_table">
          <v-card class="table_card_container">
            <form class="row row_form">
              <!-- header  -->
              <div class="col-12 edit_section_header">
                <header>Add New Admin</header>
              </div>

              <!-- input area  -->

              <!-- photo  -->
              <div class="col-12 inputArea fileInputArea">
                <label for="photo">Profile Photo</label>
                <input class="d-none" required type="file" id="photo" />
                <div class="svg_logo">
                  <svg
                    width="76"
                    height="70"
                    viewBox="0 0 76 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="69"
                      height="69"
                      rx="34.5"
                      fill="white"
                      stroke="#D0D3D6"
                      stroke-dasharray="8 8"
                    />
                    <path
                      d="M39.2083 20.9375H25.7917C24.5213 20.939 23.3034 21.4285 22.4051 22.2987C21.5068 23.1689 21.0015 24.3488 21 25.5794V38.5768C21.0015 39.8075 21.5068 40.9873 22.4051 41.8575C23.3034 42.7277 24.5213 43.2173 25.7917 43.2188H39.2083C40.4787 43.2173 41.6966 42.7277 42.5949 41.8575C43.4932 40.9873 43.9985 39.8075 44 38.5768V25.5794C43.9985 24.3488 43.4932 23.1689 42.5949 22.2987C41.6966 21.4285 40.4787 20.939 39.2083 20.9375V20.9375ZM25.7917 22.7943H39.2083C39.9708 22.7943 40.7021 23.0877 41.2413 23.61C41.7804 24.1323 42.0833 24.8408 42.0833 25.5794V38.5768C42.0817 38.9904 41.9834 39.3983 41.7958 39.7698L33.0146 31.263C32.5697 30.8318 32.0414 30.4898 31.4599 30.2564C30.8785 30.0231 30.2553 29.903 29.626 29.903C28.9966 29.903 28.3734 30.0231 27.792 30.2564C27.2105 30.4898 26.6823 30.8318 26.2373 31.263L22.9167 34.4789V25.5794C22.9167 24.8408 23.2196 24.1323 23.7587 23.61C24.2979 23.0877 25.0292 22.7943 25.7917 22.7943ZM25.7917 41.362C25.0292 41.362 24.2979 41.0685 23.7587 40.5462C23.2196 40.0239 22.9167 39.3155 22.9167 38.5768V37.1044L27.5914 32.5757C27.8584 32.3169 28.1754 32.1116 28.5244 31.9715C28.8733 31.8315 29.2473 31.7594 29.625 31.7594C30.0027 31.7594 30.3767 31.8315 30.7256 31.9715C31.0746 32.1116 31.3916 32.3169 31.6586 32.5757L40.4398 41.0835C40.0563 41.2652 39.6353 41.3604 39.2083 41.362H25.7917Z"
                      fill="#A1A7AD"
                    />
                    <path
                      d="M36.3337 30.6862C36.9971 30.6862 37.6455 30.4956 38.1971 30.1386C38.7487 29.7815 39.1786 29.2741 39.4325 28.6803C39.6864 28.0866 39.7528 27.4332 39.6234 26.8029C39.494 26.1726 39.1745 25.5936 38.7054 25.1392C38.2363 24.6848 37.6387 24.3753 36.988 24.2499C36.3374 24.1246 35.663 24.1889 35.0501 24.4348C34.4372 24.6808 33.9133 25.0973 33.5448 25.6316C33.1762 26.166 32.9795 26.7942 32.9795 27.4369C32.9795 28.2986 33.3329 29.1251 33.9619 29.7345C34.5909 30.3439 35.4441 30.6862 36.3337 30.6862ZM36.3337 26.0443C36.618 26.0443 36.8959 26.1259 37.1323 26.279C37.3687 26.432 37.5529 26.6495 37.6617 26.9039C37.7705 27.1584 37.799 27.4384 37.7435 27.7085C37.6881 27.9787 37.5512 28.2268 37.3501 28.4216C37.1491 28.6163 36.8929 28.7489 36.6141 28.8027C36.3353 28.8564 36.0462 28.8288 35.7836 28.7234C35.5209 28.618 35.2964 28.4395 35.1384 28.2105C34.9805 27.9815 34.8962 27.7123 34.8962 27.4369C34.8962 27.0675 35.0476 26.7133 35.3172 26.4521C35.5868 26.191 35.9524 26.0443 36.3337 26.0443Z"
                      fill="#A1A7AD"
                    />
                    <path
                      d="M47.3333 39.3125H44.3333V36.4375C44.3333 35.9049 44.1146 35.4008 43.7362 35.0343C43.3588 34.6687 42.8536 34.4688 42.3333 34.4688C41.8129 34.4688 41.3077 34.6687 40.9303 35.0343C40.5519 35.4008 40.3333 35.9049 40.3333 36.4375V39.3125H37.3333C36.8129 39.3125 36.3077 39.5125 35.9304 39.878C35.5519 40.2446 35.3333 40.7487 35.3333 41.2812C35.3333 41.8138 35.5519 42.3179 35.9304 42.6845C36.3077 43.05 36.8129 43.25 37.3333 43.25H40.3333V46.125C40.3333 46.6576 40.5519 47.1617 40.9303 47.5283L41.6261 46.81L40.9304 47.5283C41.3077 47.8938 41.8129 48.0938 42.3333 48.0938C42.8536 48.0938 43.3588 47.8938 43.7362 47.5283L43.0404 46.81L43.7362 47.5283C44.1146 47.1617 44.3333 46.6576 44.3333 46.125V43.25H47.3333C47.8536 43.25 48.3588 43.05 48.7362 42.6845C49.1146 42.3179 49.3333 41.8138 49.3333 41.2812C49.3333 40.7487 49.1146 40.2446 48.7362 39.878C48.3588 39.5125 47.8536 39.3125 47.3333 39.3125Z"
                      fill="#A1A7AD"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>

              <!-- first name  -->
              <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 inputArea">
                <label for="fName">First Name</label>
                <input
                  :class="{ content: admin.first_name }"
                  v-model="admin.first_name"
                  required
                  type="text"
                  placeholder="Title (mandatory)"
                  id="fName"
                />
              </div>

              <!-- last name  -->
              <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 inputArea">
                <label for="lName">Last Name</label>
                <input
                  :class="{ content: admin.last_name }"
                  v-model="admin.last_name"
                  required
                  type="text"
                  placeholder="Title (mandatory)"
                  id="lName"
                />
              </div>

              <!-- email address  -->
              <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 inputArea">
                <label for="email">Email Address</label>
                <input
                  :class="{ content: admin.email }"
                  v-model="admin.email"
                  required
                  type="text"
                  placeholder="Title (mandatory)"
                  id="email"
                />
              </div>

              <!-- Phone Number  -->
              <div
                class="
                  col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6
                  inputArea
                  phone
                "
              >
                <label for="phone">Phone Number</label>
                <input
                  :class="{ content: admin.phone }"
                  v-model="admin.phone"
                  required
                  type="text"
                  placeholder="Title (mandatory)"
                  id="phone"
                />
              </div>

              <!-- Role  -->
              <div
                class="
                  col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6
                  inputArea
                  phone
                "
              >
                <label for="role">Role</label>
                <input
                  :class="{ content: admin.role }"
                  disabled
                  v-model="admin.role"
                  required
                  type="text"
                  placeholder="Title (mandatory)"
                  id="role"
                />
              </div>

              <!-- password  -->
              <div
                class="
                  col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6
                  inputArea
                  phone
                "
              >
                <label for="password">Password</label>
                <input
                  :class="{ content: admin.password }"
                  v-model="admin.password"
                  required
                  type="password"
                  placeholder="Title (mandatory)"
                  id="password"
                />
              </div>

              <div class="col-12 inputArea listing_action">
                <v-btn to="/admin/manage?query=Admins" class="Btn cancel"
                  >Cancel</v-btn
                >
                <v-btn @click="showModal('create')" class="Btn upload"
                  >Create</v-btn
                >
              </div>
            </form>
          </v-card>
        </div>
      </v-row>
    </section>
    <ModalAdminCreateSuccess ref="adminSuccess" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      admin: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        role: "Admin",
        password: "",
      },
    };
  },
  mounted() {},
  methods: {
    showModal(type) {
      switch (type) {
        case "create":
          this.$refs.adminSuccess.showDialogue();
          break;

        default:
          break;
      }
    },
  },
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
        text-transform: capitalize;
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
</style>