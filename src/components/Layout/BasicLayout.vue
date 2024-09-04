<template>
  <v-layout class="layout-limer rounded rounded-md">
    <v-navigation-drawer :rail="collapse" v-if="$route.meta.showLayout && isAuthenticated">
      <div class="d-flex align-center justify-center flex-column my-2">
        Logo
      </div>
      <v-list v-if="!collapse" class="text-center overflow">
        <v-list-item subtitle="Subtitle" title="Title">
        </v-list-item>
      </v-list>
      <v-divider color="#0000ff" length="22" class="mb-6"></v-divider>
      <v-list density="compact" nav rounded>
        <v-list-item v-for="item in routes" :key="item.name" :title="item.name"
          @click="$router.push({ name: item.route })" :active="item.route === $route.name" rounded>
          <template v-slot:prepend>
            <v-icon color="primary" :icon="item.icon"></v-icon>
          </template>
          <template v-slot:append v-if="item.tag">
            <v-chip color="pink" class="ma-2" label density="compact" size="x-small">
              {{ item.tag }}
            </v-chip>
          </template>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn variant="text" density="compact" icon color="#0404ff-grey lighten-3"
            @click.stop="collapse = !collapse">
            <v-icon>{{ iconToggleCollapse }}</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar elevation="0" order="0">
      <template v-slot:append>
        <v-btn @click="onClickLogout" color="#0000ff" icon="mdi-logout" v-tooltip="'Sair'"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
  },
  data() {
    return {
      collapse: false,
      routes: [
        {
          name: 'Home',
          route: 'home',
          icon: 'mdi-home-outline',
          tag: ''
        },
      ]
    }
  },
  computed: {
    iconToggleCollapse() {
      return this.collapse ? 'mdi-arrow-right' : 'mdi-arrow-left'
    },
    isAuthenticated() {
      return true
    }
  },
  methods: {
    onClickLogout() {
      console.log('logout')
    }
  }
})
</script>
<style scoped>
.v-list-item__prepend>.v-icon {
  opacity: 100% !important;
}

.transition {
  -webkit-transition: all 100ms ease-in-out;
  transition: all 100ms ease-in-out;
}

.overflow {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 300px;
}
</style>