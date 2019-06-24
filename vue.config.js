module.exports = {
  devServer: {
    proxy: 'http://localhost:8090'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '.'
    : '/'
}
