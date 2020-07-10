const ApiGatewayService = require('moleculer-web');

module.exports = {
  mixins: [ApiGatewayService],
  settings: {
    server: true,
    cors: {
      origin: '*',
      exposedHeaders: '*'
    }
  },
  dependencies: ['activitypub', 'webfinger'],
  async started() {
    [
      ...(await this.broker.call('activitypub.getApiRoutes')),
      ...(await this.broker.call('webfinger.getApiRoutes')),
    ].forEach(route => this.addRoute(route));
  }
};