const { LdpService } = require('@semapps/ldp');
const { containers } = require('@semapps/activitypub');

module.exports = {
  mixins: [LdpService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    containers
  }
};
