export default {
  namespaced: true,
  state() {
    return {
      sampleData: { first: 'John', last: 'Doe'}
    };
  },
  mutations: {
    setSampleData(state, paylod) {
      state.sampleData = paylod;
    },
  },
  actions: {
  },
  getters: {
    sampleData: (state) => state.sampleData,
  },
};
