<template>
  <div>
    <v-item v-for="item in tasks" :key="item.id">
      <ItemTask
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :priority="item.priority"
      />
    </v-item>
  </div>
</template>

<script  lang='ts'>
import { Vue } from "vue-property-decorator";

import ItemTask from "../Molecules/ItemTask.vue";

import api from "../../services/api";

export default Vue.extend({
  name: "ListItems",
  components: {
    ItemTask,
  },
  data: () => ({
    tasks: [],
  }),
  created: () => {
    //this.$data.tasks = api("GET", "/tasks", "");
    console.log("jhony");
    console.log(Vue.);
  },
});
</script>
<style>
</style>
