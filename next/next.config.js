module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tail',
        permanent: true,
      },
    ]
  },
}
