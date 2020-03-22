export default {
   async DATA_PROCESS({ commit, state }, message = '') {
      const { data } = await this.$axios.post('/bot', { message, sessionId: state.bot && state.bot.sessionId });
      commit('SET_BOT_DATA', data);
   },
};
