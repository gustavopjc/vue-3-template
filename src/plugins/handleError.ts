import { AxiosError } from 'axios'

export default {
  install: (app:any) => {
    app.config.globalProperties.$errorHandler = function (error: unknown): string {
      if (error instanceof AxiosError) {
        if (error.response) {
          return error.response.data.message
        }
        return `Error: ${error.message}`
      }
      return 'An unexpected error has occurred'
    }
  }
}