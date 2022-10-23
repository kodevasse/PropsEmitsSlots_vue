import { defineStore } from "pinia";

export const useCounterStore = defineStore("users", {
  state: () => ({ users: 0, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
