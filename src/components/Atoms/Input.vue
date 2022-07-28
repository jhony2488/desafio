<template>
  <div>
    <div :v-if="type == 'text'">
      <v-text-field
        :v-model="name"
        :counter="count"
        :rules="nameRules"
        :label="label"
        :placeholder="placeholder"
        :required="required"
        :value="value"
      ></v-text-field>
    </div>
    <div :v-if="type == 'select'">
      <v-select
        v-model="name"
        :items="itemsSelect"
        :rules="[(v:any) => !!v || 'Item is required']"
        :label="label"
        :required="required"
        :value="value"
      ></v-select>
    </div>
  </div>
</template>

<script  lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "App",
  props: {
    placeholder: String,
    label: String,
    name: String,
    value: String,
    errCount: Number,
    errMessage: String,
    onChange: Function,
    disabled: Boolean,
    type: {
      default: "Text",
      type: String,
    },
    required: Boolean,
    count: Number,
    nameRules: Array,
    itemsSelect: Array,
  },
});
</script>
<style>
</style>
