const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://7m4ddfyi.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;