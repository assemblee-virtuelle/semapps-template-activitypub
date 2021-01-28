const urlJoin = require('url-join');
const { WebfingerService } = require('@semapps/webfinger');

module.exports = {
  mixins: [WebfingerService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL
  }
};
