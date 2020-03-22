import Vue from 'vue';

export default {
   SET_ORDERS: (state, data) => {
      Vue.set(state, 'orders', data);
   },

   SET_STATUS: (state, data) => {
      Vue.set(state, 'status', data);
   },
};
