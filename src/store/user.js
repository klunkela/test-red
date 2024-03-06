import {userApi} from "@/api/user";

export const user = {
  namespaced: true,
  state: () => ({
    user: null,
  }),
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async getUser({commit}, {token}) {
      return userApi.getUser(token).then(response => {
        if (response === 'error') return false
        commit('setUser', response);
        return response
      })
    },
  },
}
