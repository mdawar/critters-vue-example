const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.vue'
  ]
});

module.exports = {
  plugins: [
    require('autoprefixer'),
    // Use PurgeCSS in production only
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ]
};
