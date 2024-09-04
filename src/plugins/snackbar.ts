export default {
  install: (app:any) => {
    app.config.globalProperties.$snackbar = function (message: string, type: string): void {
      this.emitter.emit('snackbar', { message, type })
    }
  }
}