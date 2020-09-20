<template>
  <div id="Buscador">
    <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
    <br />
    <select v-model="indicador">
      <option v-for="(indicador,i) in indicadores" :key="i">{{indicador.codigo}}</option>
    </select>
    <br />
    <button @click="buscarCotizacion">Buscar</button>
    <h2>Cotización: {{cotizacion}}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "Buscador",
  data() {
    return {
      value: "",
      context: null,
      indicador: "",
      cotizacion: "",
    };
  },
  computed: {
    ...mapState(["indicadores"]),
    fecha() {
      let year = this.value.slice(0, 4);
      let month = this.value.slice(5, 7);
      let date = this.value.slice(8, 10);
      return `${date}-${month}-${year}`;
    },
  },

  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
    buscarCotizacion() {
      axios
        .get(`https://mindicador.cl/api/${this.indicador}/${this.fecha}`)
        .then((data) => {
          console.log(data);
          (this.cotizacion = data.data.serie[0].valor),
            this.setCotizacion({
              fecha: this.fecha,
              indicador: this.indicador,
              valor: data.data.serie[0].valor
            });
        });
    },
    ...mapActions(["setCotizacion"]),
  },
};
</script>