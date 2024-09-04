declare module 'VForm' {
  interface VForm {
    validate: () => {
      valid: boolean
    }
    resetValidation: () => boolean
    reset: () => void
  }

  export default VForm
}
