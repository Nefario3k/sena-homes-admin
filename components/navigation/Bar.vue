<template>
  <v-app-bar
    color="#fff"
    app
    :height="64"
    flat
    elevate-on-scroll
    :elevation="2"
    class="top_nav_bar"
  >
    <div class="topBar">
      <header v-if="$route.path.includes('/admin/')">
        <span class="tag_location">Admin Panel</span>
        /
        <span class="tag_specific_Location">{{ $route.query.query }}</span>
        <span v-if="$route.path.includes('/create')">
          /
          <span class="tag_specific_Location">Create</span>
        </span>
        <span v-if="$route.path.includes('/edit')">
          /
          <span class="tag_specific_Location">Edit</span>
        </span>
      </header>
      <header v-else-if="$route.path.includes('/website-editor/')">
        <span class="tag_location">Website Editor</span>
        /
        <span class="tag_specific_Location">{{ $route.query.query }}</span>
      </header>
      <header v-else>
        <span class="tag_location">Products</span>
        /
        <span class="tag_specific_Location">List</span>
      </header>

      <div class="bar_logo">
        <nuxt-link to="/"><img src="images/png/logo.png" alt="" /></nuxt-link>
      </div>

      <!-- user picture  -->

      <div class="control_area">
        <div class="userImage">
          <span>du</span>
        </div>
        <div class="hamburger">
          <v-app-bar-nav-icon
            @click="$emit('showNav')"
            color="var(--secondary-color)"
          ></v-app-bar-nav-icon>
        </div>
      </div>
    </div>
    <!-- -->
  </v-app-bar>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss" scoped>
.top_nav_bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 0;
  padding-bottom: 0;
}
.topBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 16px;
  header {
    color: var(--bar-sub-text-color);
    span {
      font-weight: 500;
      font-size: 1.4rem;
      display: inline-block;
      &.tag_location {
        color: var(--bar-text-color);
        margin-right: 14px;
      }
      &.tag_specific_Location {
        margin-left: 14px;
        margin-right: 14px;
      }
    }
  }
  .control_area {
    display: flex;
    align-items: center;
    gap: 35px;
  }
  .userImage {
    width: 4rem;
    height: 4rem;
    background-color: var(--secondary-color);
    display: flex;
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
.bar_logo {
  height: 100%;
  display: none;
  text-align: left;
  img {
    width: 80%;
    height: 100%;
    object-fit: contain;
  }
}
</style>