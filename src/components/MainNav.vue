<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" :myby="123" class="flex items-center h-full text-xl">{{
          company
        }}</a>
        <h2 class="flex items-center h-full ml-8">Developed by {{ author }}</h2>
        <nav class="h-full first:ml-0 ml-9">
          <ul class="flex h-full p-0 m-0 list-none">
            <li v-for="item in menuItems" :key="item" class="h-full ml-9">
              <a href="" class="flex items-center h-full py-2.5">
                {{ item }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            data-test="login-button"
            :btn-text="text"
            type="primary"
            @click="login"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import SubNav from "@/components/SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      company: "Bobo Careers",
      author: "TaiTai",
      url: "httos://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bobo Corp",
        "How we hire",
        "Locations",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
      text: "Sign In",
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>
