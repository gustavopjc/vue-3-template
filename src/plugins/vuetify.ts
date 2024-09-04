import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { pt } from 'vuetify/locale'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#0404ff',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export default createVuetify({
  locale: {
    locale: 'pt',
    fallback: 'pt',
    messages: { pt }
  },
  components,
  directives,
  theme: {
    // defaultTheme: 'myCustomLightTheme',
    // themes: {
    //   myCustomLightTheme,
    // },
  },
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})
