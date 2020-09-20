import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indicadores: [],
    cotizaciones: []

  },
  mutations: {
    GET_INDICADOR(state, indicadores) {
      state.indicadores = indicadores
    },
    SET_COTIZACION(state, cotizacion) {
      state.cotizaciones.push(cotizacion)
    }
  },
  actions: {
    getIndicador({
      commit
    }) {
      axios.get("https://mindicador.cl/api").then((data) => {
        console.log(data.data)
        let indicadores = data.data
        let misIndicadores = []
        misIndicadores.push(indicadores.bitcoin)
        misIndicadores.push(indicadores.dolar)
        misIndicadores.push(indicadores.euro)
        misIndicadores.push(indicadores.utm)
        misIndicadores.push(indicadores.uf)
        misIndicadores.push(indicadores.libra_cobre)
        console.log(misIndicadores)
        commit("GET_INDICADOR", misIndicadores)
      })
    },
    setCotizacion({
      commit
    }, cotizacion) {
      commit("SET_COTIZACION", cotizacion)
    }
  },
  modules: {}
})