const { WebAclMiddleware } = require('@semapps/webacl');
const CONFIG = require('./config/config');

module.exports = {
  // You can set all ServiceBroker configurations here
  // See https://moleculer.services/docs/0.14/configuration.html
  middlewares: [
    WebAclMiddleware({ baseUrl: CONFIG.HOME_URL })
  ]
};
