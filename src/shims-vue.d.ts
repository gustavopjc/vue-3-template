// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ComponentCustomProperties } from 'vue';
import mitt from 'mitt';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $errorHandler: (error: any) => string;
    $snackbar: (message: string, type: 'error' | 'success' | 'info') => void
    emitter: mitt.Emitter;
  }
}