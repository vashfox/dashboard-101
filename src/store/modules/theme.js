export default {
  namespaced: true,
  state() {
    return {
      theme: 'light'
    };
  },
  mutations: {
    setTheme(state, paylod){
      state.theme = paylod;
    },
  },
  actions: {
  },
  getters: {
    theme: (state) => state.theme,
  },
};
