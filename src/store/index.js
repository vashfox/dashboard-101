import { createStore } from 'vuex';
import user from './modules/user';
import theme from './modules/theme';

const store = createStore({
  modules: {
    user,
    theme,
  },
});

export default store;