const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  themes: [
    presto => ({
      primary: '#5CEBDF',

      secondary: '#4481eb',

      accent: '#073747',

      neutral: '#110E0E',

      'base-100': '#171212',

      info: '#AE9861',

      success: '#FDD836',

      warning: '#DD5700',

      error: '#E80660',
    }),
  ],
  plugins: [require('daisyui')],
}

module.exports = config
