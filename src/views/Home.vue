<template>
  <div class="container">
    <h1>Mis Indicadores</h1>
    <div class="row">
      <div class="col-4" v-for="(indicador,i) in indicadores" :key="i">
        <b-card
          :title="indicador.codigo.toUpperCase()"
          :img-src="imgUrl"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Valor en CLP: {{indicador.unidad_medida == "Dólar" ? indicador.valor * (indicadores.find( i => i.codigo =="dolar").valor) : indicador.valor}} </b-card-text>
          <b-card-text>
            <p>Fecha de Cotización</p>
            {{new Date(indicador.fecha).getFullYear()}} -
            {{new Date(indicador.fecha).getMonth()}} -
            {{new Date(indicador.fecha).getDate()}} 
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      imgUrl:
        "https://img.blogs.es/anexom/wp-content/uploads/2019/03/imagen_apertura-920x515.jpg",
    };
  },
  computed: {
    ...mapState(["indicadores"]),
  },
};
</script>