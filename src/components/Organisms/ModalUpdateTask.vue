<template>
  <div>
  </div>
</template>

<script  lang='ts'>

import { Component, Vue } from 'vue-property-decorator';

import Title from '../Atoms/Titles.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Title,
  },
  props: {
    name:String,
    description:String,
    priority: {
      type:String,
      default:"min",
      validator(value:string) {
        return ['min', 'max', 'medium'].includes(value)
      }
    }
  },
});
</script>
<style>
</style>
