import { createStore } from "vuex";
import { state } from "@/store/state";
import { actions } from "@/store/actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const store = createStore({
  state,
  mutations,
  getters,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
