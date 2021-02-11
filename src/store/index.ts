import { createStore } from "vuex";

export default createStore({
  state: {
    notifications: []
  },
  getters: {},
  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push({
        ...notification,
        // @ts-ignore
        id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
      });
    },
    REMOVE_NOTIFICATION(state, notificationToRemove) {
      state.notifications = state.notifications.filter((notification) => {
        // @ts-ignore
        return notification.id != notificationToRemove.id;
      });
    }
  },
  actions: {
    addNotification({ commit }, notification) {
      commit("PUSH_NOTIFICATION", notification);
    },
    removeNotification({ commit }, notification) {
      commit("REMOVE_NOTIFICATION", notification);
    }
  },
  modules: {}
});
