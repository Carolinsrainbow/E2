<template>
  <div>
    <b-table striped hover :items="cotizaciones"></b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Favoritos",
  computed: {
    ...mapState(["cotizaciones"]),
  },
};
</script>