import {delay} from "@/api/helpers";

export const userApi = {
  getUser: async (token) => {
    await delay();
    return token === 'adminroottoken' ? {id: 1, login: 'admin'} : 'error'
  },

  login: async (login, password) => {
    await delay();
    if (login === 'admin' && password === 'root') {
      localStorage.setItem('context', 'adminroottoken');
      return true
    }
    return false
  }
}
