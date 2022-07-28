<template>
  <div>
    <div :v-if="type == 'h1'">
      <v-item v-for="[c, text, margin] in configTitles" :key="c">
        <template v-slot:default="{ active, toggle }">
          <v-sheet
            :color="
              active
                ? $vuetify.theme.dark
                  ? 'grey darken-3'
                  : 'grey lighten-4'
                : undefined
            "
            class="px-4 pt-4 pb-3"
            tile
            style="cursor: pointer"
            @click="toggle"
          >
            <h1
              :class="[`text-${c}`, active && `mb-${margin}`]"
              class="transition-swing"
            >
              {{ text }}
            </h1>
          </v-sheet>
        </template>
      </v-item>
    </div>
    <div :v-if="type == 'h2'">
      <v-item v-for="[c, text, margin] in configTitles" :key="c">
        <template v-slot:default="{ active, toggle }">
          <v-sheet
            :color="
              active
                ? $vuetify.theme.dark
                  ? 'grey darken-3'
                  : 'grey lighten-4'
                : undefined
            "
            class="px-4 pt-4 pb-3"
            tile
            style="cursor: pointer"
            @click="toggle"
          >
            <h2
              :class="[`text-${c}`, active && `mb-${margin}`]"
              class="transition-swing"
            >
              {{ text }}
            </h2>
          </v-sheet>
        </template>
      </v-item>
    </div>
  </div>
</template>

<script  lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "App",
  props: {
    configTitles: Array,
    type: String,
  },
});
</script>
<style>
h1,
h2 {
  text-align: center !important;
}
</style>
