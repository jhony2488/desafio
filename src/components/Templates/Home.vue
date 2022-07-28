<template>
  <div class="home">
    <Title :configTitles="[['h1', 'Tarefas', '6rem', '300', '4px', 2]]" type="h1" />
    <ListItems />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Title from "../Atoms/Titles.vue";

import ListItems from "../Organisms/ListItems.vue";

@Component({
  components: {
    Title,
    ListItems,
  },
})
export default class Home extends Vue {}
</script>
