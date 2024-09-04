import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    step?: number
    showLayout: boolean
  }
}
