// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  publicPath: 'https://localhost:8080/',
  lintOnSave: false,
  filenameHashing: false,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: 'localhost',
    https: true,
  },
};
