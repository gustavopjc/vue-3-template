<template>
  <v-app>
    <v-snackbar v-model="snackbar" :color="color" :timeout="6000" location="top right">
      <v-container class="ma-0 pa-0">
        <v-row justify="space-between" align="center">
          <v-col class="font-weight-bold">
            {{ text }}
          </v-col>
          <v-col cols="auto" class="mr-1">
            <v-btn class="text-none" variant="text" @click.stop="snackbar = false"> FECHAR </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-snackbar>
    <BasicLayout>
      <router-view v-slot="{ Component }">
        <v-fade-transition mode="out-in">
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </BasicLayout>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BasicLayout from '@/components/Layout/BasicLayout.vue'

export default defineComponent({
  components: {
    BasicLayout
  },
  data() {
    return {
      snackbar: false,
      text: '',
      color: '',
      timeout: 3000
    }
  },
  created() {
    this.emitter.on('snackbar', ({ message, type }: { message: string, type: 'error' | 'success' | 'info' }) => {
      this.text = message
      this.color = type
      this.timeout = 3000
      this.snackbar = true
    });
  }
})
</script>