<template>
  <v-container class="my-12">
    <v-row no-gutters>
      <v-col cols="12 mb-8">
        <div class="title font-weight-regular grey--text mb-1">
          <span class="font-weight-bold">{{ title }}</span>
        </div>
        <div class="body-2 grey--text text--lighten-2" style="font-size: small;">{{ subtitle }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <slot></slot>
      </v-col>

    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String
    },
    subtitle: {
      required: true,
      type: String
    },
  }
})
</script>
<style scoped>
.title {
  color: rgb(var(--v-theme-primary));
  font-weight: bold;
}
</style>