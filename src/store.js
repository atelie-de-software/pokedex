import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokeList: [],
    currentPage: 1,
    count: 0
  },
  mutations: {
    writePokeList: function (state, value) {
      state.pokeList = value
    },
    writeCurrentPage: function (state, page) {
      state.currentPage = page
    },
    updateCount: function (state, value) {
      state.count = value
    }
  },
  actions: {
    loadPage: function (context, page) {
      const offset = (page - 1) * 20
      context.commit('writeCurrentPage', page)
      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`).then(function (res) {
        context.commit('writePokeList', res.data.results)
        context.commit('updateCount', res.data.count)
      })
      router.push({
        path: '/',
        query: {
          page: page
        }
      })
    }
  }
})
