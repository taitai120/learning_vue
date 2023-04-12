import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    console.log(wrapper.html());
  });
});

describe("when the user is logged out", () => {
  it("prompts user to sign in", () => {
    const wrapper = mount(MainNav);
    const loginBtn = wrapper.findComponent({ name: "ActionButton" });
    expect(loginBtn.exists()).toBe(true);
  });
});

describe("when the user logs in", () => {
  it("displays user profile picture", async () => {
    const wrapper = mount(MainNav);
    let profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='action-button']");
    await loginButton.trigger("click");

    profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(true);
  });
});
