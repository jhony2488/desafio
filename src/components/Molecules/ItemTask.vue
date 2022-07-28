<template>
  <v-card elevation="2" class="mx-auto" max-width="100%" outlined>
    <h2>{{ name }}}</h2>
    <p>{{ description }}}</p>
    <v-row align="center" justify="space-around">
      <v-chip :v-if="priority == 'min'" class="ma-2" color="primary">
        Prioridade Minima
      </v-chip>
      <v-chip
        :v-if="priority == 'medium'"
        class="ma-2"
        color="orange"
        text-color="white"
      >
        Prioridade Média
      </v-chip>
      <v-chip
        :v-if="priority == 'max'"
        class="ma-2"
        color="red"
        text-color="white"
      >
        Prioridade Máxima
      </v-chip>
    </v-row>
    <v-row align="center" justify="space-around">
      <v-btn depressed color="primary"> Editar </v-btn>
      <v-btn depressed color="error"> Excluir </v-btn>
    </v-row>
  </v-card>
</template>

<script  lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "App",
  props: {
    id: Number,
    name: String,
    description: String,
    priority: {
      type: String,
      default: "min",
      validator(value: string) {
        return ["min", "max", "medium"].includes(value);
      },
    },
  },
});
</script>
<style>
</style>
