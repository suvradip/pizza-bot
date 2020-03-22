export default {
   async FETCH_ORDERS({ commit }) {
      const { data } = await this.$axios.get('/orders');
      commit('SET_ORDERS', data);
   },

   //  async FETCH_ORDER_STATUS({ commit }, orderId) {
   //     const { data } = await this.$axios.get(`/orders/${orderId}`);
   //     commit('SET_STATUS', data);
   //  },
};
