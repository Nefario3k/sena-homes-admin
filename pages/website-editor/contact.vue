<template>
  <div>
    <section id="pageBody">
      <v-row class="content_row" style="margin-top: 0">
        <!-- title  -->
        <div class="col-12 header_wrapper">
          <header>Edit Contact Page Content</header>
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
                <v-menu v-model="tab_open" bottom :nudge-bottom="10" offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <div class="relative" v-bind="attrs" v-on="on">
                      <input
                        :class="{ active: tab_open }"
                        style="cursor: pointer !important"
                        disabled
                        v-model="tabItem[tab]"
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
                      @click="tab = index"
                      v-for="(item, index) in tabItem"
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

              <div class="col-12 tabWrapper_container">
                <v-tabs-items v-model="tab">
                  <!-- header Section -->
                  <v-tab-item>
                    <v-row>
                      <!-- header  -->
                      <div class="col-12 col-md-6 col-lg-6 col-xl-6 inputArea">
                        <label for="header">Header</label>
                        <div class="relative">
                          <textarea
                            id="header"
                            v-model="contact.header"
                            placeholder="Description"
                            rows="3"
                            maxlength="2000"
                            cols=""
                          ></textarea>
                        </div>
                      </div>

                      <!-- subtext  -->
                      <div class="col-12 col-md-6 col-lg-6 col-xl-6 inputArea">
                        <label for="subtext">Subtext</label>
                        <div class="relative">
                          <textarea
                            id="subtext"
                            v-model="contact.subtext"
                            placeholder="Description"
                            rows="3"
                            maxlength="2000"
                            cols=""
                          ></textarea>
                        </div>
                      </div>

                      <!-- images  -->
                      <div class="col-12 inputArea amenities_section">
                        <label
                          ><span>Background Images</span
                          ><svg
                            @click="showModal('tips')"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1.71484C7.51664 1.71484 6.06659 2.15471 4.83323 2.97882C3.59986 3.80293 2.63856 4.97427 2.07091 6.34472C1.50325 7.71516 1.35472 9.22316 1.64411 10.678C1.9335 12.1329 2.64781 13.4692 3.6967 14.5181C4.7456 15.567 6.08197 16.2813 7.53683 16.5707C8.99168 16.8601 10.4997 16.7116 11.8701 16.1439C13.2406 15.5763 14.4119 14.615 15.236 13.3816C16.0601 12.1483 16.5 10.6982 16.5 9.21484C16.4979 7.22638 15.707 5.31997 14.3009 3.91392C12.8949 2.50786 10.9885 1.71699 9 1.71484V1.71484ZM9 15.4648C7.76387 15.4648 6.5555 15.0983 5.52769 14.4115C4.49988 13.7248 3.6988 12.7487 3.22576 11.6066C2.75271 10.4646 2.62894 9.20791 2.8701 7.99553C3.11125 6.78315 3.70651 5.6695 4.58059 4.79543C5.45466 3.92135 6.56831 3.32609 7.78069 3.08494C8.99307 2.84378 10.2497 2.96755 11.3918 3.4406C12.5338 3.91364 13.5099 4.71472 14.1967 5.74253C14.8834 6.77034 15.25 7.97871 15.25 9.21484C15.2482 10.8719 14.5891 12.4605 13.4174 13.6322C12.2457 14.804 10.657 15.463 9 15.4648V15.4648Z"
                              fill="#BF9001"
                            />
                            <path
                              d="M8.99975 7.96484H8.37475C8.20899 7.96484 8.05002 8.03069 7.93281 8.1479C7.8156 8.26511 7.74976 8.42408 7.74976 8.58984C7.74976 8.7556 7.8156 8.91458 7.93281 9.03179C8.05002 9.149 8.20899 9.21484 8.37475 9.21484H8.99975V12.9648C8.99975 13.1306 9.0656 13.2896 9.18281 13.4068C9.30002 13.524 9.45899 13.5898 9.62475 13.5898C9.79051 13.5898 9.94948 13.524 10.0667 13.4068C10.1839 13.2896 10.2498 13.1306 10.2498 12.9648V9.21484C10.2498 8.88332 10.1181 8.56538 9.88363 8.33096C9.64921 8.09654 9.33127 7.96484 8.99975 7.96484Z"
                              fill="#BF9001"
                            />
                            <path
                              d="M9 6.71484C9.51777 6.71484 9.9375 6.29511 9.9375 5.77734C9.9375 5.25958 9.51777 4.83984 9 4.83984C8.48223 4.83984 8.0625 5.25958 8.0625 5.77734C8.0625 6.29511 8.48223 6.71484 9 6.71484Z"
                              fill="#BF9001"
                            />
                          </svg>
                        </label>
                        <div class="amenities_section_wrapper">
                          <div class="captionTable">
                            <span>
                              Drag & Drop your files or
                              <span class="showInput">Browse</span>
                            </span>
                          </div>
                          <div class="imagesRow">
                            <label for=""
                              >Label
                              <span
                                style="
                                  color: var(--delete-color);
                                  font-weight: 500;
                                  font-size: 1.4rem;
                                "
                                >*</span
                              ></label
                            >
                            <div class="images_container">
                              <div class="img_logo relative">
                                <svg
                                  width="119"
                                  height="119"
                                  viewBox="0 0 119 119"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.10185"
                                    y="1.10185"
                                    width="116.796"
                                    height="116.796"
                                    rx="16.5278"
                                    fill="white"
                                    stroke="#D0D3D6"
                                    stroke-width="2.2037"
                                    stroke-dasharray="17.63 17.63"
                                  />
                                  <g clip-path="url(#clip0_620_28260)">
                                    <path
                                      d="M64.1142 46.0547H50.8094C49.5496 46.0562 48.3418 46.5573 47.451 47.4481C46.5602 48.3389 46.0591 49.5466 46.0576 50.8064V64.1113C46.0591 65.3711 46.5602 66.5788 47.451 67.4696C48.3418 68.3604 49.5496 68.8615 50.8094 68.863H64.1142C65.374 68.8615 66.5817 68.3604 67.4725 67.4696C68.3633 66.5788 68.8644 65.3711 68.866 64.1113V50.8064C68.8644 49.5466 68.3633 48.3389 67.4725 47.4481C66.5817 46.5573 65.374 46.0562 64.1142 46.0547V46.0547ZM50.8094 47.9554H64.1142C64.8704 47.9554 65.5955 48.2558 66.1302 48.7904C66.6649 49.3251 66.9653 50.0503 66.9653 50.8064V64.1113C66.9636 64.5347 66.8661 64.9522 66.6802 65.3325L57.9721 56.6244C57.5309 56.1831 57.007 55.833 56.4304 55.5941C55.8538 55.3552 55.2358 55.2323 54.6117 55.2323C53.9876 55.2323 53.3696 55.3552 52.793 55.5941C52.2164 55.833 51.6925 56.1831 51.2513 56.6244L47.9583 59.9165V50.8064C47.9583 50.0503 48.2587 49.3251 48.7934 48.7904C49.328 48.2558 50.0532 47.9554 50.8094 47.9554ZM50.8094 66.9623C50.0532 66.9623 49.328 66.662 48.7934 66.1273C48.2587 65.5926 47.9583 64.8674 47.9583 64.1113V62.604L52.5941 57.9682C52.8589 57.7033 53.1733 57.4931 53.5193 57.3497C53.8653 57.2063 54.2362 57.1325 54.6107 57.1325C54.9853 57.1325 55.3562 57.2063 55.7022 57.3497C56.0482 57.4931 56.3626 57.7033 56.6274 57.9682L65.3354 66.6772C64.9551 66.8632 64.5376 66.9607 64.1142 66.9623H50.8094Z"
                                      fill="#A1A7AD"
                                    />
                                    <path
                                      d="M61.2632 56.0274C61.9211 56.0274 62.5642 55.8324 63.1112 55.4669C63.6582 55.1014 64.0845 54.5819 64.3363 53.9741C64.588 53.3663 64.6539 52.6975 64.5255 52.0523C64.3972 51.4071 64.0804 50.8144 63.6152 50.3492C63.15 49.884 62.5574 49.5673 61.9121 49.4389C61.2669 49.3106 60.5981 49.3764 59.9903 49.6282C59.3826 49.8799 58.8631 50.3063 58.4976 50.8533C58.1321 51.4003 57.937 52.0434 57.937 52.7012C57.937 53.5834 58.2875 54.4294 58.9112 55.0532C59.535 55.677 60.3811 56.0274 61.2632 56.0274ZM61.2632 51.2757C61.5452 51.2757 61.8208 51.3593 62.0552 51.5159C62.2896 51.6726 62.4723 51.8952 62.5802 52.1557C62.6881 52.4162 62.7164 52.7028 62.6614 52.9793C62.6064 53.2558 62.4706 53.5098 62.2712 53.7092C62.0719 53.9086 61.8179 54.0443 61.5413 54.0993C61.2648 54.1544 60.9782 54.1261 60.7177 54.0182C60.4572 53.9103 60.2346 53.7276 60.078 53.4932C59.9213 53.2588 59.8377 52.9832 59.8377 52.7012C59.8377 52.3231 59.9879 51.9606 60.2552 51.6932C60.5226 51.4259 60.8852 51.2757 61.2632 51.2757Z"
                                      fill="#A1A7AD"
                                    />
                                    <path
                                      d="M64.9535 59.6619L64.9535 59.6619C64.3542 60.2611 64.0176 61.0739 64.0176 61.9214V63.6843H62.2546C61.4071 63.6843 60.5944 64.021 59.9951 64.6202L59.9951 64.6202C59.3959 65.2195 59.0592 66.0322 59.0592 66.8797C59.0592 67.7272 59.3959 68.5399 59.9951 69.1392C60.5944 69.7384 61.4071 70.0751 62.2546 70.0751H64.0176V71.838C64.0176 72.6855 64.3542 73.4982 64.9535 74.0975C65.5527 74.6967 66.3655 75.0334 67.2129 75.0334C68.0604 75.0334 68.8732 74.6967 69.4724 74.0975C70.0717 73.4982 70.4083 72.6855 70.4083 71.838V70.0751H72.1713C73.0187 70.0751 73.8315 69.7384 74.4307 69.1392C75.03 68.5399 75.3666 67.7271 75.3666 66.8797C75.3666 66.0322 75.03 65.2195 74.4307 64.6202C73.8315 64.021 73.0187 63.6843 72.1713 63.6843H70.4083V61.9214C70.4083 61.0739 70.0717 60.2611 69.4724 59.6619C68.8732 59.0626 68.0604 58.726 67.2129 58.726C66.3655 58.726 65.5527 59.0626 64.9535 59.6619Z"
                                      fill="#A1A7AD"
                                      stroke="white"
                                      stroke-width="4.40741"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_620_28260">
                                      <rect
                                        width="31.7333"
                                        height="31.7333"
                                        fill="white"
                                        transform="translate(44.0742 44.0703)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <div class="absolute delete_svg">
                                  <svg
                                    width="28"
                                    height="27"
                                    viewBox="0 0 28 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M13.9815 26.6319C21.2839 26.6319 27.2037 20.7122 27.2037 13.4097C27.2037 6.10729 21.2839 0.1875 13.9815 0.1875C6.67907 0.1875 0.759277 6.10729 0.759277 13.4097C0.759277 20.7122 6.67907 26.6319 13.9815 26.6319ZM6.636 14.8789H21.3274V11.9406H6.636V14.8789Z"
                                      fill="#EE0D0D"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
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

                  <!-- contact details section  -->
                  <v-tab-item>
                    <v-row>
                      <!-- header  -->
                      <div class="col-12 edit_section_header">
                        <header>Contact Details</header>
                      </div>

                      <!-- phone  -->
                      <div class="col-12 col-md-6 col-lg-6 col-xl-6 inputArea">
                        <label>Phone</label>
                        <div class="contactField">
                          <div
                            v-for="(phone, index) in phone_number"
                            :key="index"
                            class="relative"
                          >
                            <input
                              placeholder="Enter number"
                              type="text"
                              name=""
                              v-model="phone.phone"
                            />
                            <div v-if="index > 0" class="absolute delete_svg">
                              <svg
                                width="28"
                                height="27"
                                viewBox="0 0 28 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.9815 26.6319C21.2839 26.6319 27.2037 20.7122 27.2037 13.4097C27.2037 6.10729 21.2839 0.1875 13.9815 0.1875C6.67907 0.1875 0.759277 6.10729 0.759277 13.4097C0.759277 20.7122 6.67907 26.6319 13.9815 26.6319ZM6.636 14.8789H21.3274V11.9406H6.636V14.8789Z"
                                  fill="#EE0D0D"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <label
                          v-if="count.phone < 3"
                          @click="addMore('phone')"
                          class="addMore"
                          ><svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 0L4 8"
                              stroke="#BF9001"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 4L0 4"
                              stroke="#BF9001"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span>Add phone</span></label
                        >
                      </div>

                      <!-- email  -->
                      <div class="col-12 col-md-6 col-lg-6 col-xl-6 inputArea">
                        <label>Email</label>
                        <div class="contactField">
                          <div
                            v-for="(email, index) in email_address"
                            :key="index"
                            class="relative"
                          >
                            <input
                              placeholder="Enter email"
                              type="email"
                              name=""
                              v-model="email.email"
                            />
                            <div v-if="index > 0" class="absolute delete_svg">
                              <svg
                                width="28"
                                height="27"
                                viewBox="0 0 28 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.9815 26.6319C21.2839 26.6319 27.2037 20.7122 27.2037 13.4097C27.2037 6.10729 21.2839 0.1875 13.9815 0.1875C6.67907 0.1875 0.759277 6.10729 0.759277 13.4097C0.759277 20.7122 6.67907 26.6319 13.9815 26.6319ZM6.636 14.8789H21.3274V11.9406H6.636V14.8789Z"
                                  fill="#EE0D0D"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <label
                          v-if="count.email < 3"
                          @click="addMore('email')"
                          class="addMore"
                          ><svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 0L4 8"
                              stroke="#BF9001"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 4L0 4"
                              stroke="#BF9001"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span>Add Email</span></label
                        >
                      </div>

                      <!-- address  -->
                      <div class="col-12 col-md-6 col-lg-6 col-xl-6 inputArea">
                        <label for="address">Address</label>
                        <div class="relative">
                          <textarea
                            id="address"
                            v-model="address"
                            placeholder="Description"
                            rows="5"
                            maxlength="2000"
                            cols=""
                          ></textarea>
                        </div>
                      </div>

                      <!-- header  -->
                      <div class="col-12 edit_section_header">
                        <header>Property Contact Details</header>
                      </div>

                      <!-- phone  -->
                      <div class="col-12 col-md-6 col-lg-6 col-xl-6 inputArea">
                        <label for="propContact_phone">Phone</label>

                        <input
                          id="propContact_phone"
                          placeholder="Enter number"
                          type="text"
                          name=""
                          v-model="propContact.phone"
                        />
                      </div>

                      <!-- email  -->
                      <div class="col-12 col-md-6 col-lg-6 col-xl-6 inputArea">
                        <label for="propContact_email">Email</label>

                        <input
                          id="propContact_email"
                          placeholder="Enter email"
                          type="email"
                          name=""
                          v-model="propContact.email"
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
    <ModalTips ref="tipsModal" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab_open: false,
      contact: {
        header: "Contact Us",
        subtext:
          "There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some",
      },
      phone_number: [{ phone: "+234 999 99999" }],
      email_address: [{ email: "info@senahomes.com" }],
      address: "Contact Us",
      tab: 0,
      count: {
        phone: 1,
        email: 1,
      },
      propContact: {
        phone: "",
        email: "",
      },
      tabItem: ["Header", "Contact Details"],
    };
  },
  mounted() {},
  methods: {
    showModal(type) {
      switch (type) {
        case "create":
          this.$refs.adminSuccess.showDialogue();
          break;
        case "tips":
          this.$refs.tipsModal.showDialogue();
          break;

        default:
          break;
      }
    },
    addMore(type) {
      switch (type) {
        case "phone":
          if (this.count.phone < 3) {
            this.phone_number.push({ phone: "" });
            this.count.phone += 1;
          }
          break;
        case "email":
          if (this.count.email < 3) {
            this.email_address.push({ email: "" });
            this.count.email += 1;
          }
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
.contactField {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
  margin-bottom: 10px;
  .relative {
    .delete_svg {
      cursor: pointer;
      top: -9px;
      right: -9px;
    }
  }
}
.addMore {
  cursor: pointer;
  svg {
    margin-top: -2px;
  }
}
</style>