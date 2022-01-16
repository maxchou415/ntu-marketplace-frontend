module.exports = {
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ],
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  }
}
