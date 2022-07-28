<template>
    <HomeTemplate />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HomeTemplate from '../components/Templates/Home.vue';

@Component({
  components: {
    HomeTemplate,
  },
})
export default class Home extends Vue {}
</script>
