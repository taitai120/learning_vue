<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          :myby="123"
          class="flex items-center h-full text-xl"
          >Bobo Careers</router-link
        >
        <h2 class="flex items-center h-full ml-8">Developed by {{ author }}</h2>
        <nav class="h-full first:ml-0 ml-9">
          <ul class="flex h-full p-0 m-0 list-none">
            <li v-for="item in menuItems" :key="item.text" class="h-full ml-9">
              <router-link
                :to="item.url"
                class="flex items-center h-full py-2.5"
              >
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            data-test="login-button"
            :text="text"
            type="primary"
            @click="LOGIN_USER"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";
import { LOGIN_USER } from "@/store";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      author: "TaiTai",
      url: "httos://careers.google.com",
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Life at Bobo Corp", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Locations", url: "/locations" },
        { text: "Students", url: "/students" },
        { text: "Jobs", url: "/jobs/results" },
      ],
      text: "Sign In",
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn
    // },
    ...mapState(["isLoggedIn"]),
  },
  mounted() {
    console.log(this.menuItems);
  },
  methods: {
    // LOGIN_USER() {
    //   this.$store.commit("LOGIN_USER");
    // },
    ...mapMutations([LOGIN_USER]),
  },
};
</script>
