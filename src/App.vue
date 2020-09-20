<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/buscador">Buscador</router-link>|
      <router-link to="/favoritos">Favoritos</router-link>|
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  mounted() {
    this.getIndicador();
  },
  methods: {
    ...mapActions(["getIndicador"]),
  },
};
</script>