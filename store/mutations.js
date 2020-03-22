import Vue from 'vue';

export default {
   SET_BOT_DATA: (state, data) => {
      Vue.set(state, 'bot', data);
   },
};
