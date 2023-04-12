import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = shallowMount(MainNav);
    console.log(wrapper.html());
  });
});

describe("when the user is logged out", () => {
  it("prompts user to sign in", () => {
    const wrapper = shallowMount(MainNav);
    const loginBtn = wrapper.findComponent({ name: "ActionButton" });
    expect(loginBtn.exists()).toBe(true);
  });
});

describe("when the user logs in", () => {
  it("displays user profile picture", async () => {
    const wrapper = shallowMount(MainNav);
    let profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");

    profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(true);
  });

  it("displays subnavigation menu with additional information", async () => {
    const wrapper = shallowMount(MainNav);
    let subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");

    subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(true);
  });
});
